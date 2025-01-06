import axios, { AxiosInstance } from 'axios';
import crypto from 'crypto-js';

const API_SECRET = import.meta.env.VITE_API_SECRET;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const generateSignature = (url: string, body: string, timestamp: number) => {
    const dataToSign = `${url}|${body}|${timestamp}`;
    return crypto.HmacSHA256(dataToSign, API_SECRET).toString();
};


export const helebbaApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    }
});

helebbaApi.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    const timestamp = (Date.now() / 1000);
    const fullUrl = `${config.baseURL}${config.url}`;
    const bodyString = JSON.stringify(config.data || {});
    const signature = generateSignature(fullUrl, bodyString.replace(/^['"]|['"]$/g, ''), timestamp);

    config.headers['X-Timestamp'] = timestamp.toString();
    config.headers['X-Signature'] = signature;
    config.headers['X-Path'] = fullUrl;


    return config;
}, (error) => {
    return Promise.reject(error);
});

helebbaApi.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Response error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Network error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);
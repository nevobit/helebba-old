import crypto from 'crypto';

const API_SECRET = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMDE5NDAxMCwiaWF0IjoxNzEwMTk0MDEwfQ.GMyEO-pOzdCIVg26ByIYb_MNuV4G3dh2u2K0xfwjyco";
const PATH = "/ruta-del-endpoint";
const BODY = {};

export const getLocationInfo = async (slug: string) => {
    const timestamp = Math.floor(Date.now() / 1000).toString();

    const bodyString = JSON.stringify(BODY);

    const dataToSign = `${PATH}|${bodyString}|${timestamp}`;

    const signature = crypto
        .createHmac('sha256', API_SECRET)
        .update(dataToSign)
        .digest('hex');

    const headers = {
        'Content-Type': 'application/json',
        'x-timestamp': timestamp,
        'x-signature': signature,
        'x-path': PATH,
    };

    const response = await fetch(`http://localhost:8000/api/v1/bookings/location/public/${slug}`,
        {
            headers,
        }
    );

    if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return;
    }

    const data = await response.json();
    console.log("Respuesta:", data);
    return data;
}
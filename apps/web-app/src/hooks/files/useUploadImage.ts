import { helebbaApi } from '@/api';
import { useState } from 'react';

export const useUploadImage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState<string[]>([]);

    const uploadImage = async (image: string | Blob ) => {
        setIsLoading(true);
        const formData = new FormData();

        formData.append('image', image);
       
        try {
            const { data } = await helebbaApi.post('/upload/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            });
            const newUrls: string[] = [...urls, data.url];
            setUrls(newUrls);
            setUrl(data.url);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        url,
        uploadImage,
        urls,
    };
};

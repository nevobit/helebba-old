import { useEffect, useState } from "react";

export const useCountry = () => {
    const [country, setCountry] = useState('');

    useEffect(() => {
      const fetchLocation = async () => {
        const response = await fetch('https://ipinfo.io?token=9cf035310d0137');
        const data = await response.json();
        setCountry(data.country);
      };
      fetchLocation();
    }, []);
    
    return { country }
}
import { useEffect, useState } from 'react';
import { divisaFormater } from './divisaFormater';

const conversionRates: { [key: string]: number } = {
  ARS: 0.015,
  MXN: 0.0045,
  PYG: 1.65,
  UYU: 0.0082,
  VES: 0.00024,
  BOB: 0.0018,
};

const pricesCOP = {
  plus: 23000,
  basic: 49000,
  standard: 99000,
  advanced: 179000,
  premium: 350000,
};

const getPrices = (country: string) => {
  const rates: { [key: string]: { rate: number, currency: string, format: string } } = {
    "AR": { rate: conversionRates.ARS, currency: "COP", format: 'es-AR' },
    "MX": { rate: conversionRates.MXN, currency: "MXN", format: 'es-MX' },
    "PY": { rate: conversionRates.PYG, currency: "COP", format: 'es-PY' },
    "UY": { rate: conversionRates.UYU, currency: "COP", format: 'es-UY' },
    "VE": { rate: conversionRates.VES, currency: "USD", format: 'en-US' },
    "BO": { rate: conversionRates.BOB, currency: "COP", format: 'es-BO' },
    "CO": { rate: 1, format: 'es-CO', currency: "COP" },
  };

  const { rate, format } = rates[country] || rates.COP;
  const currency = rates[country].currency;

  const convertedPrices = {
    plus: divisaFormater({ value: pricesCOP.plus * rate, currency, format }),
    basic: divisaFormater({ value: pricesCOP.basic * rate, currency, format }),
    standard: divisaFormater({
      value: pricesCOP.standard * rate,
      currency,
      format,
    }),
    advanced: divisaFormater({
      value: pricesCOP.advanced * rate,
      currency,
      format,
    }),
    premium: divisaFormater({
      value: pricesCOP.premium * rate,
      currency,
      format,
    }),
  };

  return convertedPrices;
};

export const usePrices = () => {

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch('https://ipinfo.io?token=9cf035310d0137');
      const data = await response.json();
      const convertedPrices = getPrices(data.country);
    setPrices(convertedPrices);
    };
    fetchLocation();
  }, []);

  const [prices, setPrices] = useState<{ plus: string; basic: string; standard: string; advanced: string; premium: string; } | null>(null);
  return prices;
};

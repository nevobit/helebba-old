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
  plus: { current: 17000, previous: 69000 },
  basic: { current: 33000, previous: 135000 },
  standard: { current: 68000, previous: 270000 },
  advanced: { current: 115000, previous: 459000 },
  premium: { current: 230000, previous: 920000 },
};

const defaultCurrency = { rate: 0.00025, currency: 'USD', format: 'en-US' }; // USD como predeterminado

const getPrices = (country: string) => {
  const rates: { [key: string]: { rate: number; currency: string; format: string } } = {
    AR: { rate: conversionRates.ARS!, currency: 'COP', format: 'es-AR' },
    MX: { rate: conversionRates.MXN!, currency: 'MXN', format: 'es-MX' },
    PY: { rate: conversionRates.PYG!, currency: 'COP', format: 'es-PY' },
    UY: { rate: conversionRates.UYU!, currency: 'COP', format: 'es-UY' },
    VE: { rate: conversionRates.VES!, currency: 'USD', format: 'en-US' },
    BO: { rate: conversionRates.BOB!, currency: 'COP', format: 'es-BO' },
    CO: { rate: 1, currency: 'COP', format: 'es-CO' },
  };

  const { rate, currency, format } = rates[country] || defaultCurrency; // Si no se encuentra, usa USD por defecto

  const convertedPrices = Object.entries(pricesCOP).reduce(
    (acc, [key, { current, previous }]) => {
      const currentPrice = current * rate;
      const previousPrice = previous * rate;
      const monthlySavings = previousPrice - currentPrice;
      const totalSavings = monthlySavings * 3; 

      acc[key] = {
        current: divisaFormater({ value: currentPrice, currency, format }),
        previous: divisaFormater({ value: previousPrice, currency, format }),
        savings: divisaFormater({ value: totalSavings, currency, format }), // Ahorro acumulado
      };
      return acc;
    },
    {} as Record<string, { current: string; previous: string; savings: string }>
  );

  return convertedPrices;
};

export const usePrices = () => {
  const [prices, setPrices] = useState<
    Record<string, { current: string; previous: string; savings: string }> | null
  >(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipinfo.io?token=9cf035310d0137');
        const data = await response.json();
        const convertedPrices = getPrices(data.country);
        setPrices(convertedPrices);
      } catch (error) {
        console.error('Error fetching location or converting prices:', error);
        setPrices(getPrices('')); // Si hay error, usar USD como fallback
      }
    };
    fetchLocation();
  }, []);

  return prices;
};

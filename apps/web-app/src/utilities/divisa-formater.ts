import { countryCurrencyMap } from "./countryCurrencyMap";

interface CurrencyFormatOptions {
 value: number;
 currency?: string;
 format?: string;
 minFractionDigits?: number;
 thousandsSeparator?: string;
 country?: string;
}

export const DivisaFormater = ({value, currency = 'COP', format = 'ru-RU', minFractionDigits = 0, thousandsSeparator = '.', country = "CO"}: CurrencyFormatOptions) => {
  const currencyInfo = countryCurrencyMap[country] || countryCurrencyMap["CO"];

  const formatter = new Intl.NumberFormat(currencyInfo.locale || format, {
   style: 'currency',
   currency: currencyInfo.currency || currency,
   minimumFractionDigits: minFractionDigits,
   useGrouping: true,
 });
 
 
 const formattedValue = formatter.format(value);
 return formattedValue.replace(',', thousandsSeparator);
}
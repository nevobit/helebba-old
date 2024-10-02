import * as XLSX from 'xlsx';
import { useState } from 'react';
import { useAccountStore } from '@/state-manager';

interface ImportDataProps<T> {
    create: (data: T) => void;
    field: keyof T;
    setNotification: () => void;
}
  
export const useImport = <T>({ field, create, setNotification }: ImportDataProps<T> ) => {
  const account = useAccountStore((state) => state.account);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      console.log(sheet)

      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as T[] ;
      if (excelData && Array.isArray(excelData)) {

      const headers = excelData.shift() as string[];
      console.log(headers)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      excelData.forEach( async (row: any) => {
        const rowData: { [key: string]: string } = {};
        headers?.forEach((header: string, index: number) => {
          rowData[header] = row[index] || ''; // Asignar valor o cadena vacía si está ausente
        });
        const newRowData = rowData as T;
        console.log(newRowData)
        const dataToCreate = { [field]: newRowData, account: account.id } as T;

        await create(dataToCreate);
      });
    }
    };

    reader.readAsArrayBuffer(file);
    setIsLoading(false);
    setNotification();

  };

  return {
    isLoading,
    handleFileUpload
  }
}
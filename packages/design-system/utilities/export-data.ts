import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ColumnDef } from '../web';

export type ExportFormat = 'excel' | 'pdf';

interface ExportOptions<T> {
    data: T[];
    columns: ColumnDef<T>[];
    fileName: string;
    format: ExportFormat;
}

export const exportTable = <T>({ data, columns, fileName, format }: ExportOptions<T>): void => {
    if (format === 'excel') {
        const worksheet = XLSX.utils.json_to_sheet(
            data.map(row =>
                columns.reduce((acc, col) => {

                    const value = row[col.accessor as keyof T] as string;
                    acc[col.header] = value;
                    return acc;
                }, {} as Record<string, unknown>)
            )
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    } else if (format === 'pdf') {
        const doc = new jsPDF();

        const tableHeaders = columns.map(col => col.header);
        const tableData = data.map(row =>
            columns.map(col => {
                const value = row[col.accessor as keyof T] as string;
                return typeof value === 'string' || typeof value === 'number'
                    ? value
                    : JSON.stringify(value);
            })
        );

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save(`${fileName}.pdf`);
    } else {
        console.error('Formato no soportado');
    }
};

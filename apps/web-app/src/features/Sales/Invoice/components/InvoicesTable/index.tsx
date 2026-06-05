import { Table, type ColumnDef } from "@helebba/design-system/web";
import { Document, DocumentType } from "@helebba/entities";
import { useState } from "react";
import { useDocuments } from "@/hooks";
import Actions from "./Actions";
import { DivisaFormater } from "@/utilities";

export enum StatusDocument {
    Pending = 0,
    Paid = 1,
    PartiallyPaid = 2,
    Cancelled = 3
}

export const getStatusDocument = (status: number) => {
    switch (status) {
        case StatusDocument.Pending:
            return "Pendiente de pago";
        case StatusDocument.Paid:
            return "Pagada";
        case StatusDocument.PartiallyPaid:
            return "Pago parcial";
        case StatusDocument.Cancelled:
            return "Cancelada";
        default:
            throw new Error("Invalid invoice status");
    }
}

export const columns: ColumnDef<Document>[] = [
    { header: 'Fecha', accessor: 'date', width: '100%' },
    { header: 'Num', accessor: 'docNumber', width: '100%' },
    { header: 'Cliente', accessor: 'contactName', width: '100%' },
    { header: 'Subtotal', accessor: 'subtotal', width: '100%', isNumeric: true, Cell: ({ value }) => <span>{DivisaFormater({ value: Number(value) })}</span> },
    { header: 'Total', accessor: 'total', width: '100%', isNumeric: true, Cell: ({ value }) => <span>{DivisaFormater({ value: Number(value) })}</span> },
    {
        header: 'Estado', accessor: 'statusDocument', width: '50%', Cell: ({ value }) => <span style={{
            fontSize: 12,
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 5
        }}>{getStatusDocument(Number(value))}</span>
    },
    {
        header: '', accessor: 'id', width: '150px', isNumeric: true, Cell: ({ value, row }) => <Actions id={String(value)} row={row} />
    }
]

export const InvoicesTable = ({ setSelectedRows, search }: { search: string, setSelectedRows: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const [page, setPage] = useState(1);
    const { documents } = useDocuments(DocumentType.INVOICE);

    console.log(documents, page)
    const setCurrentPage = (newPage: number) => {
        setPage((prev) => prev + newPage)
    }

    return (
        <Table<Document> searchKey='contactName' search={search} columns={columns} data={documents?.items} page={documents?.pageInfo.page} onSelectionChange={setSelectedRows} setCurrentPage={setCurrentPage} >
            <Table.Header />
            <Table.Body />
            <Table.Footer />
        </Table>
    )
}
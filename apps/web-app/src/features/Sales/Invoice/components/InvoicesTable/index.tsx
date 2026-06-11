import { Table, type ColumnDef } from "@helebba/design-system/web";
import { Document, DocumentType } from "@helebba/entities";
import { useState } from "react";
import { useDocuments } from "@/hooks";
import Actions from "./Actions";
import { DivisaFormater } from "@/utilities";

const CREDIT_PAYMENT_METHODS = ['addi', 'sistecredito'];

const getTodayDateInput = () =>
    new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date());

export const getEffectivePaymentCollectionStatus = (document: Document) => {
    const paymentCollectionStatus = document.paymentCollectionStatus;

    if (
        CREDIT_PAYMENT_METHODS.includes(document.paymentMethod || '') &&
        document.paymentDisbursementDate &&
        document.paymentDisbursementDate < getTodayDateInput()
    ) {
        return 'pending';
    }

    return paymentCollectionStatus || 'pending';
}

export enum StatusDocument {
    Pending = 0,
    Paid = 1,
    PartiallyPaid = 2,
    Cancelled = 3
}

export const getStatusDocument = (status: string) => {
    switch (status) {
        case 'pending':
            return "Pendiente de pago";
        case 'received':
            return "Pagada";
        case 'paid':
            return "Pagada";
        case 'partially_paid':
            return "Pago parcial";
        case 'cancelled':
            return "Cancelada";

        default:
            throw new Error("Invalid invoice status");
    }
}

export const getMethodDocument = (method: string) => {
    switch (method) {
        case 'bank':
            return "Transferencia";
        case 'cash':
            return "Efectivo";
        case 'addi':
            return "Addi";
        case 'sistecredito':
            return "Sistecredito";
        default:
            throw new Error("Invalid invoice status");
    }
}

export const columns: ColumnDef<Document>[] = [
    { header: 'Fecha', accessor: 'date', width: '100%' },
    { header: 'Num', accessor: 'docNumber', width: '100%' },
    { header: 'Cliente', accessor: 'contactName', width: '100%' },
    {
        header: 'Metodo', accessor: 'paymentMethod', width: '100%', Cell: ({ value }) => <span style={{
            fontSize: 12,
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 5
        }}>{getMethodDocument(String(value))}</span>
    },

    { header: 'Subtotal', accessor: 'subtotal', width: '100%', isNumeric: true, Cell: ({ value }) => <span>{DivisaFormater({ value: Number(value) })}</span> },
    { header: 'Total menos Comision', accessor: 'paymentNetAmount', width: '100%', isNumeric: true, Cell: ({ value }) => <span>{DivisaFormater({ value: Number(value) })}</span> },

    { header: 'Total', accessor: 'total', width: '100%', isNumeric: true, Cell: ({ value }) => <span>{DivisaFormater({ value: Number(value) })}</span> },
    {
        header: 'Estado', accessor: 'paymentCollectionStatus', width: '50%', Cell: ({ value, row }) => <span style={{
            fontSize: 12,
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 5
        }}>{getStatusDocument(String(getEffectivePaymentCollectionStatus(row) || value))}</span>
    },
    {
        header: '', accessor: 'id', width: '150px', isNumeric: true, Cell: ({ value, row }) => <Actions id={String(value)} row={row} />
    }
]

interface InvoicesTableProps {
    paymentMethod: string;
    paymentStatus: string;
    search: string;
    setSelectedRows: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InvoicesTable = ({ paymentMethod, paymentStatus, setSelectedRows, search }: InvoicesTableProps) => {
    const [, setPage] = useState(1);
    const { documents } = useDocuments(DocumentType.INVOICE);
    const filteredDocuments = documents?.items?.filter((document: Document) => {
        const matchesMethod = paymentMethod ? document.paymentMethod === paymentMethod : true;
        const matchesStatus = paymentStatus ? getEffectivePaymentCollectionStatus(document) === paymentStatus : true;
        return matchesMethod && matchesStatus;
    });

    const setCurrentPage = (newPage: number) => {
        setPage((prev) => prev + newPage)
    }

    return (
        <Table<Document> searchKey='contactName' search={search} columns={columns} data={filteredDocuments} page={documents?.pageInfo.page} onSelectionChange={setSelectedRows} setCurrentPage={setCurrentPage} >
            <Table.Header />
            <Table.Body />
            <Table.Footer />
        </Table>
    )
}

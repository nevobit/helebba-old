import { Table, type ColumnDef } from "@helebba/design-system/web";
import { Document, DocumentType } from "@helebba/entities";
import { useState } from "react";
import { useDocuments } from "@/hooks";
import Actions from "./Actions";

export const columns: ColumnDef<Document>[] = [
    { header: 'Fecha', accessor: 'date', width: '100%' },
    { header: 'Num', accessor: 'docNumber', width: '100%' },
    { header: 'Cliente', accessor: 'contactName', width: '100%' },
    { header: 'Descripción', accessor: 'desc', width: '100%' },
    { header: 'Subtotal', accessor: 'billAddress.address', width: '100%', trunc: true },
    { header: 'Total', accessor: 'billAddress.city', width: '100%' },
    {
        header: 'Estado', accessor: 'statusDocument', width: '50%', Cell: ({ value }) => <span style={{
            color: "#fff",
            fontSize: 12,
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 5
        }}>{JSON.stringify(value)}</span>
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
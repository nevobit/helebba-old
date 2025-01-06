import { Table, type ColumnDef } from "@helebba/design-system/web";
import { Document } from "@helebba/entities";
import { useState } from "react";
import { useServices } from "../../hooks";

export const columns: ColumnDef<Document>[] = [
    { header: 'Nombre', accessor: 'name', width: '100%' },
    { header: 'Descripción', accessor: 'description', width: '100%' },
    { header: 'Tags', accessor: 'tags', width: '100%' },
    { header: 'Código', accessor: 'code', width: '100%' },
    { header: 'Subtotal', accessor: 'subtotal', isNumeric: true, width: '100%', trunc: true },
    { header: 'Coste', accessor: 'cost', isNumeric: true, width: '100%' },
    { header: 'Total', accessor: 'total', isNumeric: true, width: '100%' },
]

export const ServicesTable = ({ setSelectedRows, search }: { search: string, setSelectedRows: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const [page, setPage] = useState(1);
    const { services } = useServices();

    console.log(services, page)
    const setCurrentPage = (newPage: number) => {
        setPage((prev) => prev + newPage)
    }

    return (
        <Table<Document> searchKey='name' search={search} columns={columns} data={services?.items} page={services?.pageInfo.page} onSelectionChange={setSelectedRows} setCurrentPage={setCurrentPage} >
            <Table.Header />
            <Table.Body />
            <Table.Footer />
        </Table>
    )
}
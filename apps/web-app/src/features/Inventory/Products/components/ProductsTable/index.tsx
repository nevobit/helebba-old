import { Table, type ColumnDef } from "@helebba/design-system/web";
import { Product } from "@helebba/entities";
import { useState } from "react";
import { useProducts } from "../../hooks";
import { DivisaFormater } from "@/utilities";
import Actions from "./Actions";

export const columns: ColumnDef<Product>[] = [
    { header: 'Nombre', accessor: 'name', width: '200%' },
    { header: 'SKU', accessor: 'sku', width: '100%' },
    { header: 'Stock', accessor: 'stock', width: '100%', isNumeric: true, },
    { header: 'Valor de costo', accessor: 'purchasePrice', isNumeric: true, width: '100%', Cell: ({ value }) => <>{DivisaFormater({ value: Number(value) })}</> },
    { header: 'Total', accessor: 'price', width: '100%', isNumeric: true, Cell: ({ value }) => <>{DivisaFormater({ value: Number(value) })}</> },
    {
        header: '', accessor: 'id', width: '150px', isNumeric: true, Cell: ({ value, row }) => <Actions id={String(value)} row={row} />
    }
]

export const ProductsTable = ({ setSelectedRows, search }: { search: string, setSelectedRows: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const [page, setPage] = useState(1);
    const { products } = useProducts();

    console.log(page)
    const setCurrentPage = (newPage: number) => {
        setPage((prev) => prev + newPage)
    }

    return (
        <Table<Product> searchKey='name' search={search} columns={columns} data={products?.items || []} page={products?.pageInfo.page} onSelectionChange={setSelectedRows} setCurrentPage={setCurrentPage} >
            <Table.Header />
            <Table.Body />
            <Table.Footer />
        </Table>
    )
}
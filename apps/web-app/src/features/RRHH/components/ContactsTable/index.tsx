import { Table, type ColumnDef } from "@helebba/design-system/web";
import { useContacts } from "../../hooks"
import { Contact } from "@helebba/entities";
import { useState } from "react";
import { getType } from "@/features/Contacts/screens/Contact";
import { useContactStore } from "@/state-manager";

export const columns: ColumnDef<Contact>[] = [
    { header: 'Nombre', accessor: 'name', width: '100%' },
    { header: 'Correo electrónico', accessor: 'email', width: '100%' },
    { header: 'Teléfono', accessor: 'phone', width: '100%' },
    { header: 'Celular', accessor: 'mobile', width: '100%' },
    { header: 'Dirección', accessor: 'billAddress.address', width: '100%', trunc: true },
    { header: 'Ciudad', accessor: 'billAddress.city', width: '100%' },
    {
        header: 'Tipo', accessor: 'type', width: '50%', Cell: ({ value }) => <span style={{
            backgroundColor: getType((value as string)).color,
            color: "#fff",
            fontSize: 12,
            paddingBlock: 2,
            paddingInline: 10,
            borderRadius: 5
        }}>{getType((value as string)).type}</span>
    },
]

export const ContactsTable = ({ setSelectedRows, search, isPerson = '' }: { isPerson: string, search: string, setSelectedRows: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const [page, setPage] = useState(1);
    const { contacts } = useContacts(page);

    const selectContactId = useContactStore((state) => state.selectContact);

    const handler = (id: string) => {
        console.log({ id })
        selectContactId(id);
    };

    const setCurrentPage = (newPage: number) => {
        setPage((prev) => prev + newPage)
    }

    return (
        <Table<Contact> filterKeys={[{ key: 'isPerson', value: isPerson, operator: 'eq', status: isPerson === '' ? 'inactive' : 'active' }]} searchKey='name' search={search} rowHandler={handler} columns={columns} data={contacts?.items} page={contacts?.pageInfo.page} onSelectionChange={setSelectedRows} setCurrentPage={setCurrentPage} >
            <Table.Header />
            <Table.Body />
            <Table.Footer />
        </Table>
    )
}
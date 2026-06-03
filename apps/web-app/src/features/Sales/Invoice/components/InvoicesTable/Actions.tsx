import { useDeleteDocument } from '@/hooks/documents/useDeleteDocument';
import { Menus } from '@helebba/design-system/web'
import { Document, DocumentType } from '@helebba/entities';

const Actions = ({ id, row }: { id: string, row: Document }) => {
    const { deleteDocument } = useDeleteDocument(DocumentType.INVOICE);
    return (
        <Menus.Menu>
            <Menus.Toggle id={`actions-invoice-menu-${id}`} />
            <Menus.List id={`actions-invoice-menu-${id}`} >
                <Menus.Button onClick={() => deleteDocument({ id: row.id!, docType: DocumentType.INVOICE })}>
                    Eliminar
                </Menus.Button>
            </Menus.List>
        </Menus.Menu>
    )
}

export default Actions
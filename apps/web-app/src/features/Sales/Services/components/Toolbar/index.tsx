import { Button, Input, Menus } from '@helebba/design-system/web';
import { CloudDownload, Search } from 'lucide-react';
import styles from './Toolbar.module.css';
import { exportTable } from '@helebba/design-system/utilities';
import { columns } from '../ServicesTable';
import { Document, DocumentType } from '@helebba/entities';
import { useDocuments } from '@/hooks';

export const Toolbar = ({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
    const { documents } = useDocuments(DocumentType.INVOICE);
    return (
        <div className={styles.toolbar}>
            <div className={styles.buttons}>
                <select name="" id="">
                    <option value="">Todos</option>
                    <option value="">Pagado</option>
                    <option value="">Pendiente</option>
                    <option value="">Vencido</option>
                    <option value="">Pendiente + Vencido</option>
                    <option value="">Pagado parcialmente</option>
                    <option value="">Cancelado</option>
                </select>

            </div>

            <div className={styles.right}>
                <Input icon={<Search />} onChange={({ target }) => setSearch(target.value)} />
                <Menus.Menu>
                    <Menus.Toggle id={'open-export-menu'}>
                        <span className={styles.download}> <CloudDownload size={16} /> </span>
                    </Menus.Toggle>
                    <Menus.List id='open-export-menu' >
                        <Menus.Button onClick={() => exportTable<Document>({ data: documents.items, columns: columns, fileName: 'Facturas', format: 'excel' })}>
                            <Button className={styles.btn}> Exportar Excel </Button>
                        </Menus.Button>
                        <Menus.Button onClick={() => exportTable<Document>({ data: documents.items, columns: columns, fileName: 'Facturas', format: 'pdf' })}>
                            <Button className={styles.btn}> Exportar PDF </Button>
                        </Menus.Button>
                    </Menus.List>
                </Menus.Menu>
            </div>
        </div>
    )
}
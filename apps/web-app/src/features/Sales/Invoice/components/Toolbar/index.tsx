import { Button, Input, Menus } from '@helebba/design-system/web';
import { CloudDownload, Search } from 'lucide-react';
import styles from './Toolbar.module.css';
import { exportTable } from '@helebba/design-system/utilities';
import { columns, getEffectivePaymentCollectionStatus } from '../InvoicesTable';
import { Document, DocumentType } from '@helebba/entities';
import { useDocuments } from '@/hooks';

interface ToolbarProps {
    paymentMethod: string;
    paymentStatus: string;
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
    setPaymentStatus: React.Dispatch<React.SetStateAction<string>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const filterDocuments = (documents: Document[], paymentMethod: string, paymentStatus: string) =>
    documents.filter((document) => {
        const matchesMethod = paymentMethod ? document.paymentMethod === paymentMethod : true;
        const matchesStatus = paymentStatus ? getEffectivePaymentCollectionStatus(document) === paymentStatus : true;
        return matchesMethod && matchesStatus;
    });

export const Toolbar = ({ paymentMethod, paymentStatus, setPaymentMethod, setPaymentStatus, setSearch }: ToolbarProps) => {
    const { documents } = useDocuments(DocumentType.INVOICE);
    const filteredDocuments = filterDocuments(documents.items, paymentMethod, paymentStatus);

    return (
        <div className={styles.toolbar}>
            <div className={styles.buttons}>
                <select
                    aria-label="Filtrar por estado de pago"
                    name="paymentStatus"
                    value={paymentStatus}
                    onChange={({ target }) => setPaymentStatus(target.value)}
                >
                    <option value="">Todos los estados</option>
                    <option value="received">Pagado</option>
                    <option value="pending">Pendiente de pago</option>
                    <option value="scheduled">Programado</option>
                </select>
                <select
                    aria-label="Filtrar por método de pago"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={({ target }) => setPaymentMethod(target.value)}
                >
                    <option value="">Todos los métodos</option>
                    <option value="bank">Transferencia</option>
                    <option value="cash">Efectivo</option>
                    <option value="addi">Addi</option>
                    <option value="sistecredito">Sistecrédito</option>
                </select>

            </div>

            <div className={styles.right}>
                <Input icon={<Search />} onChange={({ target }) => setSearch(target.value)} />
                <Menus.Menu>
                    <Menus.Toggle id={'open-export-menu'}>
                        <span className={styles.download}> <CloudDownload size={16} /> </span>
                    </Menus.Toggle>
                    <Menus.List id='open-export-menu' >
                        <Menus.Button onClick={() => exportTable<Document>({ data: filteredDocuments, columns: columns, fileName: 'Facturas', format: 'excel' })}>
                            <Button className={styles.btn}> Exportar Excel </Button>
                        </Menus.Button>
                        <Menus.Button onClick={() => exportTable<Document>({ data: filteredDocuments, columns: columns, fileName: 'Facturas', format: 'pdf' })}>
                            <Button className={styles.btn}> Exportar PDF </Button>
                        </Menus.Button>
                    </Menus.List>
                </Menus.Menu>
            </div>
        </div>
    )
}

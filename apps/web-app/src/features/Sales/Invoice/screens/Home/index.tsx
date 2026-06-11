import { LineScaleLoader, LinkButton, Menus, ScreenHeader } from '@helebba/design-system/web';
import styles from './Home.module.css';
import { ChevronDown, CloudUpload } from 'lucide-react';
import { useState } from 'react';
import { InvoicesTable, Toolbar } from '../../components';
import { useDocuments } from '@/hooks';
import { DocumentType } from '@helebba/entities';

const Home = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [tab, setTab] = useState('invoices');
    const [search, setSearch] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    console.log(selectedRows)
    const { isLoading } = useDocuments(DocumentType.INVOICE);


    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader title='Facturas de venta' tip='Crea y envía fácilmente facturas con tu logo, cobra on-line y mantén tus ventas siempre accesibles.'>
                <div className={styles.flex}>
                    <Menus.Menu>
                        <Menus.Toggle id='actions-menu' >
                            <span className={styles.actionsBtn}>Acciones <ChevronDown size={18} /> </span>
                        </Menus.Toggle>
                        <Menus.List id='actions-menu' >
                            <Menus.Button>
                                <span className={styles.option}><CloudUpload size={16} /> Importar contactos</span>
                            </Menus.Button>
                        </Menus.List>
                    </Menus.Menu>
                    <LinkButton variant='primary' href='/doc/invoice/new'>Nueva factura</LinkButton>
                    {/* <CreateContact /> */}

                </div>
            </ScreenHeader>

            <div className={styles.tabs}>
                <button onClick={() => setTab('invoices')} className={`${styles.tab} ${tab == 'invoices' ? styles.active : ''}`} >Facturas</button>
                <button onClick={() => setTab('recurring-invoices')} className={`${styles.tab} ${tab == 'recurring-invoices' ? styles.active : ''}`} >Facturas recurrentes</button>
            </div>

            <Toolbar
                paymentMethod={paymentMethod}
                paymentStatus={paymentStatus}
                setPaymentMethod={setPaymentMethod}
                setPaymentStatus={setPaymentStatus}
                setSearch={setSearch}
            />
            <InvoicesTable
                paymentMethod={paymentMethod}
                paymentStatus={paymentStatus}
                search={search}
                setSelectedRows={setSelectedRows}
            />
        </div>
    )
}

export default Home

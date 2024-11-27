import { Button, Input, Menus } from '@helebba/design-system/web';
import { CloudDownload, Search } from 'lucide-react';
import styles from './Toolbar.module.css';
import { exportTable } from '@helebba/design-system/utilities';
import { useContacts } from '../../hooks';
import { columns } from '../ContactsTable';
import { Contact } from '@helebba/entities';

const Toolbar = ({ setSearch, setIsPerson, isPerson }: { isPerson: string, setIsPerson: React.Dispatch<React.SetStateAction<string>>, setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
    const { contacts } = useContacts();
    return (
        <div className={styles.toolbar}>
            <div className={styles.buttons}>
                <button onClick={() => setIsPerson('')} className={isPerson == '' ? styles.active : ''} >Todos</button>
                <button onClick={() => setIsPerson('false')} className={isPerson == 'false' ? styles.active : ''} >Empresas</button>
                <button onClick={() => setIsPerson('true')} className={isPerson == 'true' ? styles.active : ''} >Personas</button>
            </div>

            <div className={styles.right}>
                <Input icon={<Search />} onChange={({ target }) => setSearch(target.value)} />
                <Menus.Menu>
                    <Menus.Toggle id={'open-export-menu'}>
                        <span className={styles.download}> <CloudDownload size={16} /> </span>
                    </Menus.Toggle>
                    <Menus.List id='open-export-menu' >
                        <Menus.Button onClick={() => exportTable<Contact>({ data: contacts.items, columns: columns, fileName: 'Contactos', format: 'excel' })}>
                            <Button className={styles.btn}> Exportar Excel </Button>
                        </Menus.Button>
                        <Menus.Button onClick={() => exportTable<Contact>({ data: contacts.items, columns: columns, fileName: 'Contactos', format: 'pdf' })}>
                            <Button className={styles.btn}> Exportar PDF </Button>
                        </Menus.Button>
                    </Menus.List>
                </Menus.Menu>
            </div>
        </div>
    )
}

export default Toolbar
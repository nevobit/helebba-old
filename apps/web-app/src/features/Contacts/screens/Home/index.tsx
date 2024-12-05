import { useState } from 'react';
import { ContactsTable, CreateContact } from '../../components';
import styles from './Home.module.css';
import { LineScaleLoader, Menus, ScreenHeader } from '@helebba/design-system/web';
import { ChevronDown, CloudUpload, X } from 'lucide-react';
import Toolbar from '../../components/Toolbar';
import { useContacts } from '../../hooks';
import ContactCard from '../../components/ContactCard';
import { useContactStore } from '../../store';

const Contacts = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const { isLoading } = useContacts();
    const contactId = useContactStore((state) => state.contact);
    const [search, setSearch] = useState('');
    const [isPerson, setIsPerson] = useState('');



    if (isLoading) return <LineScaleLoader />
    return (
        <div className={styles.container}>
            <ScreenHeader title='Contactos' tip='Gestiona tus clientes y proveedores sin esfuerzo, centralizando facturación, oportunidades y mucho más.'>
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
                    <CreateContact />

                </div>
            </ScreenHeader>
            <Toolbar isPerson={isPerson} setSearch={setSearch} setIsPerson={setIsPerson} />
            <ContactsTable isPerson={isPerson} search={search} setSelectedRows={setSelectedRows} />

            {selectedRows.length > 0 && (
                <div className={styles.actions}>
                    <p>{selectedRows.length} Seleccionados</p>
                    <div>
                        <button><X size={14} /> </button>
                    </div>
                </div>
            )}

            {contactId.length > 0 && (
                <ContactCard />
            )}
        </div>
    )
}

export default Contacts
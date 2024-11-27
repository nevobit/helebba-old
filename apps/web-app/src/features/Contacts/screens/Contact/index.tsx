import { Link } from "react-router-dom";
import { HeaderName } from "../../components";
import { useContact, useDeleteModal } from "../../hooks"
import styles from './Contact.module.css';
import { ArrowLeft, Edit, Trash } from "lucide-react";
import { LineScaleLoader, Menus } from "@helebba/design-system/web";
import { useEditModal } from "../../hooks/useEditModal";
import { useState } from "react";
import Summary from "../../components/ContactTabs/Summary";

const Contact = () => {
    const { contact } = useContact();
    const { openEditModal } = useEditModal({ contact });
    const { deleteModal } = useDeleteModal(contact);

    const [tab, setTab] = useState('summary');

    const renderSection = () => {
        switch (tab) {
            case 'summary':
                return <Summary contact={contact} />;
            default:
                return <Summary contact={contact} />;
        }
    };

    if (!contact) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <div>
                    <Link to='/contacts' > <ArrowLeft size={18} /> </Link>
                    <HeaderName name={contact.name} />
                    <div className={styles.type} style={{
                        backgroundColor: getType(contact.type).color
                    }} >
                        {getType(contact.type).type}
                    </div>
                </div>

                <div>
                    <Menus.Menu>
                        <Menus.Toggle id='contact-menu' />
                        <Menus.List id='contact-menu'>
                            <Menus.Button onClick={openEditModal}>
                                <span className={styles.btn}><Edit size={14} /> Editar</span>
                            </Menus.Button>
                            <Menus.Button onClick={deleteModal}>
                                <span className={styles.btn}><Trash size={14} /> Eliminar</span>
                            </Menus.Button>
                        </Menus.List>
                    </Menus.Menu>
                </div>
            </div>

            <div className={styles.tabs}>
                <button onClick={() => setTab('summary')} className={`${styles.tab} ${tab == 'summary' ? styles.active : ''}`} >Resumen</button>
            </div>
            <div className={styles.content} >{renderSection()}</div>

        </div>
    )
}

export default Contact

export function getType(type: string): { type: string, color: string } {

    if (type == 'client') {
        return {
            type: 'Cliente',
            color: '#00B66D'
        }
    }
    else if (type == 'supplier') {
        return {
            type: 'Proveedor',
            color: '#F55753'
        }
    } else {
        return { type: 'Lead', color: '#47B0F7' }
    }
}
import { Button, Menus, Modal, useModal } from '@helebba/design-system/web';
import { useContact } from '../../hooks';
import styles from './Card.module.css';
import { useOutsideClick } from '@helebba/design-system/utilities';
import { useContactStore } from '../../store';
import { useEffect, useState } from 'react';
import ContactInfo from './ContactInfo';
import DeleteModal from './DeleteModal';
import { useEditModal } from '../../hooks/useEditModal';
import { HeaderName } from '../HeaderName';

const ContactCard = () => {
    const [open, setOpen] = useState(false)
    const { contact, isLoading } = useContact();
    const { openModal, requestCloseModal } = useModal();

    const { openEditModal } = useEditModal({ contact });
    const selectContactId = useContactStore((state) => state.selectContact);

    const ref = useOutsideClick<HTMLDivElement>({
        handler: () => handleClose()
    });

    const deleteModal = () => {
        openModal(
            <Modal.Window className={styles.confirmationModal} isOpen={true} onClose={() =>
                requestCloseModal({
                    confirm: false,
                    onConfirm: () => {
                        console.log('Modal cerrado.');
                    },
                })
            }>
                <DeleteModal id={contact.id} />

            </Modal.Window>
        );
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            selectContactId("");
        }, 300);
    };

    useEffect(() => {
        if (contact) {
            requestAnimationFrame(() => {
                setOpen(true);
            });
        }
    }, [contact]);

    return (
        <div className={`${styles.container} `} >
            {isLoading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner} />
                </div>
            ) : (
                <div className={`${styles.content} ${open ? styles.open : ''}`} ref={ref}>
                    <div className={styles.header}>
                        <HeaderName name={contact.name} />
                        <Menus.Menu>
                            <Menus.Toggle id='contact-menu' />
                            <Menus.List id='contact-menu'>
                                <Menus.Button onClick={openEditModal}>
                                    <span>Editar</span>
                                </Menus.Button>
                                <Menus.Button onClick={deleteModal}>
                                    <span>Eliminar</span>
                                </Menus.Button>
                                <Menus.Button onClick={handleClose} >
                                    <span>Cerrar</span>
                                </Menus.Button>
                            </Menus.List>
                        </Menus.Menu>
                    </div>

                    <ContactInfo contact={contact} />
                    <div className={styles.information}>
                        <div className={styles.informationHeader}>
                            <h4>Información del contacto</h4>
                            <Button variant='plain' onClick={openEditModal} >Editar</Button>
                        </div>
                        <ul className={styles.informationContent} >
                            {contact.email && <li><p>Correo electronico</p> <h5>{contact.email}</h5></li>}
                            {contact.mobile && <li><p>Telefono</p> <h5>{contact.mobile}</h5></li>}

                        </ul>
                    </div>
                </div>
            )
            }
        </div>

    )
}

ContactCard.displayName = 'ContactCard';

export default ContactCard
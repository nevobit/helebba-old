import { X } from 'lucide-react';
import { Button, Modal, useModal } from '@helebba/design-system/web';
import ContactForm from '../ContactForm';
import styles from './Create.module.css';

export const CreateContact = () => {
    const { openModal, closeModal, requestCloseModal } = useModal();

    const open = () => {
        openModal(
            <Modal.Window
                isOpen={true}
                onClose={() =>
                    requestCloseModal({
                        confirm: true,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })
                }
            >
                <Modal.Header className={styles.header} >
                    <h2>Nuevo contacto</h2>
                    <button onClick={() => requestCloseModal({
                        confirm: true,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })}><X width={20} /></button>
                </Modal.Header>
                <ContactForm onCloseModal={closeModal} />
            </Modal.Window>,
        );
    };

    return (
        <Button size="slim" variant="primary" onClick={open} > Nuevo contacto </Button>
    )
}

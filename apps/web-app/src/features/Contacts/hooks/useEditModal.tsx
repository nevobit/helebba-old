import styles from '../components/CreateContact/Create.module.css';
import { UpdateContactDto } from '@helebba/entities';
import { X } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Button, Modal, useModal } from '@helebba/design-system/web';

interface Props {
    contact: UpdateContactDto;
}

export const useEditModal = ({ contact }: Props) => {
    const { openModal, closeModal, requestCloseModal } = useModal();

    const openEditModal = () => {
        openModal(
            <>
                <Modal.Window isOpen={true} onClose={() => requestCloseModal({
                    confirm: true,
                    onConfirm: () => { }
                })}>
                    <Modal.Header className={styles.header}>
                        <h3>Editar Contacto</h3>
                        <Button onClick={() => requestCloseModal({
                            confirm: true,
                            onConfirm: () => { }
                        })}>
                            <X />
                        </Button>
                    </Modal.Header>
                    <ContactForm contactToEdit={contact} onCloseModal={closeModal} />
                </Modal.Window>
            </>,
        );
    };

    return { openEditModal }
};
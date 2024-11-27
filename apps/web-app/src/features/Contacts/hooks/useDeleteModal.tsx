import { Modal, useModal } from '@helebba/design-system/web';
import styles from '../components/ContactCard/Card.module.css';
import DeleteModal from '../components/ContactCard/DeleteModal';
import { Contact } from '@helebba/entities';

export const useDeleteModal = (contact: Contact, handler?: () => void) => {
    const { openModal, requestCloseModal } = useModal();

    const deleteModal = () => {
        openModal(
            <Modal.Window className={styles.confirmationModal} isOpen={true} onClose={() =>
                requestCloseModal({
                    confirm: false,
                    onConfirm: () => {
                        handler?.()
                    },
                })
            }>
                <DeleteModal id={contact.id} />
            </Modal.Window>
        );
    };

    return { deleteModal }
}

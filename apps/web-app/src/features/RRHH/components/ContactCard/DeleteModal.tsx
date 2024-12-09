import { Button, Modal, useModal } from '@helebba/design-system/web'
import styles from './Card.module.css';
import { useDeleteContact } from '../../hooks';

const DeleteModal = ({ id }: { id: string }) => {
    const { closeModal, } = useModal();
    const { deleteContact, isDeleting } = useDeleteContact(closeModal);

    return (
        <>
            <Modal.Header> <h2 className={styles.confirmTitle}>Aviso</h2></Modal.Header>
            <Modal.Body> <p className={styles.confirmCopy}>¿Estás seguro?</p></Modal.Body>
            <Modal.Footer className={styles.confirmFooter}>
                <Button onClick={closeModal}>Cancelar</Button>
                <Button
                    variant='primary'
                    tone='critical'
                    loading={isDeleting}
                    onClick={() => deleteContact(id)}
                >
                    Confirmar
                </Button>
            </Modal.Footer>
        </>
    )
}

export default DeleteModal
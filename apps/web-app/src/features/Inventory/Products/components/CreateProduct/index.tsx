import { X } from 'lucide-react';
import { Button, Modal, useModal } from '@helebba/design-system/web';
import ProductForm from '../ProductForm';
import styles from './Create.module.css';

export const CreateProduct = () => {
    const { openModal, closeModal, requestCloseModal } = useModal();

    const open = () => {
        openModal(
            <Modal.Window
                className={styles.container}
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
                    <h2>Nuevo producto</h2>
                    <button onClick={() => requestCloseModal({
                        confirm: true,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })}><X width={20} /></button>
                </Modal.Header>
                <ProductForm onCloseModal={closeModal} />
            </Modal.Window>,
        );
    };

    return (
        <Button className={styles.linkBtn} size="slim" variant="primary" onClick={open} > Nuevo producto </Button>
    )
}

import { X } from 'lucide-react';
import { Button, Modal, useModal } from '@helebba/design-system/web';
import styles from './Create.module.css';
import EmployeeForm from '../EmployeeForm';

export const CreateEmployee = () => {
    const { openModal, closeModal, requestCloseModal } = useModal();

    const open = () => {
        openModal(
            <Modal.Window
                className={styles.window}
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
                    <h2>Nuevo empleado</h2>
                    <button onClick={() => requestCloseModal({
                        confirm: true,
                        onConfirm: () => {
                            console.log('Modal cerrado.');
                        },
                    })}><X width={20} /></button>
                </Modal.Header>
                <EmployeeForm onCloseModal={closeModal} />
            </Modal.Window>,
        );
    };

    return (
        <Button size="slim" variant="primary" onClick={open} > Crea tu perfil de empleado </Button>
    )
}

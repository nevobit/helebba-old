import styles from '../components/CreateEmployee/Create.module.css';
import { UpdateEmployeeDto } from '@helebba/entities';
import { X } from 'lucide-react';
import { Button, Modal, useModal } from '@helebba/design-system/web';
import EmployeeForm from '../components/EmployeeForm';

interface Props {
    employee: UpdateEmployeeDto;
}

export const useEditModal = ({ employee }: Props) => {
    const { openModal, closeModal, requestCloseModal } = useModal();

    const openEditModal = () => {
        openModal(
            <>
                <Modal.Window isOpen={true} onClose={() => requestCloseModal({
                    confirm: true,
                    onConfirm: () => { }
                })}>
                    <Modal.Header className={styles.header}>
                        <h3>Editar Empleado</h3>
                        <Button onClick={() => requestCloseModal({
                            confirm: true,
                            onConfirm: () => { }
                        })}>
                            <X />
                        </Button>
                    </Modal.Header>
                    <EmployeeForm employeeToEdit={employee} onCloseModal={closeModal} />
                </Modal.Window>
            </>,
        );
    };

    return { openEditModal }
};
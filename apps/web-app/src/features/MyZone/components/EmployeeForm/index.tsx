import { Button, Field, Input, Modal, useForm } from '@helebba/design-system/web'
import { UpdateEmployeeDto } from '@helebba/entities'
import { FormEvent } from 'react'
import styles from './Form.module.css';
import { useAccountStore } from '@/state-manager';
import { useCreateEmployee, useEditEmployee } from '@/features/RRHH/hooks';
import { useUser } from '@/hooks';
import { useNavigate } from 'react-router-dom';

interface Props {
    employeeToEdit?: UpdateEmployeeDto
    onCloseModal?: () => void
}

const EmployeeForm = ({ employeeToEdit = {}, onCloseModal }: Props) => {
    const account = useAccountStore((state) => state.account);
    const { user } = useUser();
    const { isCreating, createEmployee } = useCreateEmployee();
    const { isEditing, editEmployee } = useEditEmployee();
    const navigate = useNavigate();
    const isWorking = isCreating || isEditing;

    const { id: employeeId, ...editValues } = employeeToEdit;
    const isEditSession = Boolean(employeeId);

    const { formState: employee, handleChange } = useForm(
        isEditSession ? editValues : {},
    );

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditSession) {
            editEmployee(
                {
                    id: employeeToEdit.id,
                    ...employee,
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                    },
                },
            );
        } else {
            createEmployee(
                {
                    account: account.id!,
                    employee: { ...employee, helebbaUserId: user.id },
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                        navigate('/employees/summary')
                    },
                },
            );
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Modal.Body>
                <div className={styles.mainInfo}>
                    <Field label='Nombre' >
                        <Input value={employee.name} name='name' onChange={handleChange} />
                    </Field>
                    <Field label='Apellidos' >
                        <Input value={employee.lastname} name='lastname' onChange={handleChange} />
                    </Field>
                </div>
                <Field label='Correo' >
                    <Input value={employee.mainEmail} name='mainEmail' onChange={handleChange} />
                </Field>
            </Modal.Body>
            <Modal.Footer className={styles.footer} >
                <div><Button loading={isWorking} type='submit' variant='primary'> {isEditSession ? 'Guardar' : 'Crear'}</Button></div>
            </Modal.Footer>
        </form>

    )
}

export default EmployeeForm
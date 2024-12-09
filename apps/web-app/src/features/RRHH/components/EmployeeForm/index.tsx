import { Button, Field, Input, Modal, useForm } from '@helebba/design-system/web'
import { UpdateEmployeeDto } from '@helebba/entities'
import { FormEvent, useState } from 'react'
import styles from './Form.module.css';
import { useAccountStore } from '@/state-manager';
import { useCreateEmployee, useEditEmployee } from '../../hooks';

interface Props {
    employeeToEdit?: UpdateEmployeeDto
    onCloseModal?: () => void
}

const EmployeeForm = ({ employeeToEdit = {}, onCloseModal }: Props) => {
    const account = useAccountStore((state) => state.account);

    const { isCreating, createEmployee } = useCreateEmployee();
    const { isEditing, editEmployee } = useEditEmployee();
    const isWorking = isCreating || isEditing;

    const { id: employeeId, ...editValues } = employeeToEdit;
    const isEditSession = Boolean(employeeId);

    const { formState: employee, handleChange } = useForm(
        isEditSession ? editValues : {},
    );

    const [activeTab, setActiveTab] = useState('basic');

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
                    employee: { ...employee },
                },
                {
                    onSuccess() {
                        onCloseModal?.();
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
                    <Field label='Número de identificación' >
                        <Input name='identification' onChange={handleChange} />
                    </Field>
                </div>

                <div className={styles.tabs}>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
                        onClick={() => setActiveTab('basic')}
                    >
                        Básico
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'banks' ? styles.active : ''}`}
                        onClick={() => setActiveTab('banks')}
                    >
                        Bancos
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'preferences' ? styles.active : ''}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        Preferencias
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'accounting' ? styles.active : ''}`}
                        onClick={() => setActiveTab('accounting')}
                    >
                        Contabilidad
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.footer} >
                <div><Button loading={isWorking} type='submit' variant='primary'> {isEditSession ? 'Guardar' : 'Crear'}</Button></div>
            </Modal.Footer>
        </form>

    )
}

export default EmployeeForm
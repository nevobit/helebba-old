import { Button, Field, Input, Modal, useForm } from '@helebba/design-system/web'
import { UpdateServiceDto } from '@helebba/entities'
import { FormEvent } from 'react'
import styles from './Form.module.css';
import { useAccountStore } from '@/state-manager';
import { useCreateService, useEditService } from '../../hooks';

interface Props {
    serviceToEdit?: UpdateServiceDto
    onCloseModal?: () => void
}

const ServiceForm = ({ serviceToEdit = {}, onCloseModal }: Props) => {
    const account = useAccountStore((state) => state.account);

    const { isCreating, createService } = useCreateService();
    const { isEditing, editService } = useEditService();
    const isWorking = isCreating || isEditing;

    const { id: issueId, ...editValues } = serviceToEdit;
    const isEditSession = Boolean(issueId);

    const { formState: service, handleChange } = useForm(
        isEditSession ? editValues : {},
    );

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditSession) {
            editService(
                {
                    id: serviceToEdit.id,
                    ...service,
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                    },
                },
            );
        } else {
            createService(
                {
                    account: account.id!,
                    service: { ...service },
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
                <div className={styles.col}>
                    <Field label='Nombre' >
                        <Input value={service.name} name='name' onChange={handleChange} />
                    </Field>
                    <Field label='Código' >
                        <Input name='code' value={service.name?.toLowerCase().replace(/\s+/g, '-')} onChange={handleChange} />
                    </Field>
                </div>
                <Field label='Descripción' >
                    <Input name='description' onChange={handleChange} />
                </Field>

                <div className={styles.col}>
                    <Field label='Tags' >
                        <Input name='tags' onChange={handleChange} />
                    </Field>
                    <Field label='Tiempo en minutos' >
                        <Input name='timeInMinutes' onChange={handleChange} />
                    </Field>
                </div>

                <div className={styles.col}>
                    <Field label='Precio / unidad' >
                        <Input value={service.price} name='price' onChange={handleChange} />
                    </Field>
                    <Field label='Coste / unidad' >
                        <Input name='cost' onChange={handleChange} />
                    </Field>
                </div>

                <div className={styles.col}>
                    <Field label='Impuestos de venta' >
                        <Input value={service.tax} name='tax' onChange={handleChange} />
                    </Field>
                    <Field label='Total' >
                        <Input name='total' onChange={handleChange} />
                    </Field>
                </div>


            </Modal.Body>
            <Modal.Footer className={styles.footer} >
                <div><Button loading={isWorking} type='submit' variant='primary'> {isEditSession ? 'Guardar' : 'Crear'}</Button></div>
            </Modal.Footer>
        </form>

    )
}

export default ServiceForm;
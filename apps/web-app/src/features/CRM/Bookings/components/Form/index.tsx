import { Button, Field, Input, useForm } from '@helebba/design-system/web';
import styles from './Form.module.css';
import { BookingLocation } from '@helebba/entities';
import { useEditBookingLocation } from '../../hooks';
import { useParams } from 'react-router-dom';

const Form = ({ bookingLocation }: { bookingLocation: BookingLocation }) => {
    const { id } = useParams();
    const { isEditing, editBookingLocation } = useEditBookingLocation();

    const { formState: business, handleChange } = useForm({
        name: bookingLocation.name,
        url: '',
        type: '',
        typeName: ''
    });
    return (
        <div className={styles.container}>
            <h2>Define tu espacio de trabajo</h2>
            <p>Añade el nombre, la URL pública y el tipo de espacio donde prestas tus servicios.</p>

            <form className={styles.form}>
                <Field label='Nombre *' >
                    <Input value={business.name} placeholder='Nombre del negocio' name='name' onChange={handleChange} />
                </Field>
                <Field label='URL de la página de reserva *' >
                    <Input placeholder='' value={`reservas.helebba.com.co/${bookingLocation.hash}`} disabled />
                </Field>
                <Field label='Tipo'>
                    <select name="type" onChange={handleChange}>
                        <option value="Cabina">Cabina</option>
                        <option value="Silla">Silla</option>
                        <option value="Sala">Sala</option>
                        <option value="Cama">Cama</option>
                        <option value="Habitación">Habitación</option>
                        <option value="Pista">Pista</option>
                        <option value="Otro">Otro</option>
                    </select>
                </Field>
                {business.type == 'Otro' && (
                    <Field label='Tipo de espacio*' >
                        <Input placeholder='' onChange={handleChange} name='typeName' />
                    </Field>
                )}

                <Button
                    type='button'
                    variant='primary'
                    loading={isEditing} onClick={() => editBookingLocation({ id, name: business.name, defaultSpace: business.type, type: business.type, url: business.url, typeName: business.typeName, onboarding: { started: true, completedSettings: true, completedBackground: false, completedLogo: false, finished: false } })}
                    fullWidth >Continuar</Button>
            </form>
        </div>
    )
}

export default Form
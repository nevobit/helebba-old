import { Button, Field, Input, useForm } from '@helebba/design-system/web';
import styles from './Form.module.css';

const Form = () => {
    const { formState: business, handleChange } = useForm({
        name: '',
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
                    <Input placeholder='Nombre del negocio' />
                </Field>
                <Field label='URL de la página de reserva *' >
                    <Input placeholder='' value='reservas.helebba.com.co' disabled />
                </Field>
                <Field label='Tipo'>
                    <select name="type" onChange={handleChange} id="">
                        <option value="">Cabina</option>
                        <option value="">Silla</option>
                        <option value="">Sala</option>
                        <option value="">Cama</option>
                        <option value="">Habitación</option>
                        <option value="">Pista</option>
                        <option value="other">Otro</option>
                    </select>
                </Field>
                {business.type == 'other' && (
                    <Field label='Tipo de espacio*' >
                        <Input placeholder='' />
                    </Field>
                )}

                <Button variant='primary' fullWidth >Continuar</Button>
            </form>
        </div>
    )
}

export default Form
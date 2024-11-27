import { Field, Input } from '@helebba/design-system/web'
import styles from './Form.module.css';
import { UpdateContactDto } from '@helebba/entities';
import { ChangeEvent } from 'react';

const BasicSection = ({ contact, handleChange }: { contact: UpdateContactDto, handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void }) => {
    return (
        <div className={styles.containerBasic}>
            <div>

                <Field label='Dirección' >
                    <Input value={contact.billAddress?.address} name='billAddress.address' onChange={handleChange} />
                </Field>
                <div className={styles.col}>
                    <Field label='Ciudad' >
                        <Input value={contact.billAddress?.city} name='billAddress.city' onChange={handleChange} />
                    </Field>
                    <Field label='Codigo postal' >
                        <Input value={contact.billAddress?.postalCode} name='billAddress.postalCode' onChange={handleChange} />
                    </Field>
                </div>
                <div className={styles.col}>
                    <Field label='Departamento/Estado' >
                        <Input value={contact.billAddress?.province} name='billAddress.province' onChange={handleChange} />
                    </Field>
                    <Field label='Pais' >
                        <Input value={contact.billAddress?.country} name='billAddress.country' onChange={handleChange} />
                    </Field>
                </div>
                <Field label='Nombre comercial' >
                    <Input value={contact.tradeName} name='tradeName' onChange={handleChange} />
                </Field>
                <Field label='Asignar usuarios' >
                    <Input name='name' onChange={handleChange} />
                </Field>
            </div>
            <div>
                {contact?.isPerson && (

                    <Field label='Empresa' >
                        <Input value={contact.company} name='company' onChange={handleChange} />
                    </Field>
                )}

                <Field label='Correo electronico' >
                    <Input value={contact.email} name='email' onChange={handleChange} />
                </Field>
                <div className={styles.col}>
                    <Field label='Telefono' >
                        <Input value={contact.phone} name='phone' onChange={handleChange} />
                    </Field>
                    <Field label='Celular' >
                        <Input value={contact.mobile} name='mobile' onChange={handleChange} />
                    </Field>
                </div>
                <Field label='Sitio web' >
                    <Input value={contact.socialNetworks?.website} name='socialNetworks.website' onChange={handleChange} />
                </Field>
                <Field label='Tags' >
                    <Input name='email' onChange={handleChange} />
                </Field>
                <Field label='Tipo de contacto' >
                    <select value={contact.type} name="type" onChange={handleChange}>
                        <option value="Sin especificar">Sin especificar</option>
                        <option value="client">Cliente</option>
                        <option value="supplier">Proveedor</option>
                        <option value="lead">Lead</option>
                        <option value="deudor">Deudor</option>
                        <option value="acreedor">Acreedor</option>
                    </select>
                </Field>
            </div>
        </div>
    )
}

export default BasicSection
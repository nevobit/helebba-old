import { Button, Field, Input } from '@/components';
import { useCreateContact, useEditContact, useForm } from '@/hooks';
import styles from './Create.module.css';
import { FormEvent, useState } from 'react';
import { countryData } from '@/utilities/countryData';
import { useAccountStore } from '@/state-manager';
import { Contact } from '@helebba/entities';

interface Props {
  contactToEdit?: Partial<Contact>;
  onCloseModal?: () => void;
}

const ContactFrom = ({ contactToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createContact } = useCreateContact();
  const { isEditing, editContact } = useEditContact();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = contactToEdit;
  const isEditSession = Boolean(editId);

  const { formState: contact, handleChange } = useForm(
    isEditSession ? editValues : {},
  );

  const [type, setType] = useState( contact.isPerson ? "person" :"enterprise");

  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleDepartmentChange = (e: { target: { value: string } }) => {
    const selectedDept = e.target.value;
    setSelectedDepartment(selectedDept);

    const departmentData = countryData.find(
      (dept) => dept.departamento === selectedDept,
    );

    if (departmentData) {
      setCities(departmentData.ciudades);
      setSelectedCity('');
    } else {
      setCities([]);
      setSelectedCity('');
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditSession) {
      editContact(
        {
          id: contactToEdit.id,
          isPerson: type == "person",
          ...contact,
          billAddress: { ...contact.billAddress, address: contact.billAddress?.address, postalCode: contact.billAddress?.postalCode, city: selectedCity, province: selectedDepartment }
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    } else {
      createContact(
        {
          account: account.id!,
          contact: { ...contact, isPerson: type == "person", billAddress: { ...contact.billAddress, address: contact.billAddress?.address, postalCode: contact.billAddress?.postalCode, city: selectedCity, province: selectedDepartment }  },
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
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.main}>
        <div className={styles.first}>
          <Field label="Nombre *">
            <Input
              disabled={isWorking}
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </Field>

          <div className={styles.contact_type}>
            <p>Este contacto es...</p>
            <div className={styles.combo_button}>
              <button
                type="button"
                onClick={() => setType('enterprise')}
                className={type == 'enterprise' ? styles.active : ''}>
                Empresa
              </button>
              <button
                type="button"
                onClick={() => setType('person')}
                className={type == 'person' ? styles.active : ''}>
                Persona
              </button>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <div>
            <Field label="Dirección">
              <Input
                disabled={isWorking}
                value={contact.billAddress?.address}
                name="billAddress.address"
                onChange={handleChange}
              />
            </Field>
            <div className={styles.col}>
              <Field label="Pais">
                <Input
                  disabled={isWorking}
                  value={contact.billAddress?.country}
                  name="billAddress.country"
                  onChange={handleChange}
                />
              </Field>
              <Field label="Código postal">
                <Input
                  disabled={isWorking}
                  value={contact.billAddress?.postalCode}
                  name="billAddress.postalCode"
                  onChange={handleChange}
                />
              </Field>
            </div>
            <div className={styles.col}>
              <Field label="Departamento">
                <select
                name='billAddress.province'
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}>
                  <option value="">Seleccionar</option>
                  {countryData.map((dept) => (
                    <option key={dept.id} value={dept.departamento}>
                      {dept.departamento}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Ciudad">
                <select
                name='billAddress.city'
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}>
                  <option value="">Seleccionar</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Nombre comercial">
              <Input
                value={contact.tradeName}
                disabled={isWorking}
                name="tradeName"
                onChange={handleChange}
              />
            </Field>
          </div>
          <div>
            <Field label="Correo electrónico">
              <Input
                disabled={isWorking}
                value={contact.email}
                name="email"
                onChange={handleChange}
              />
            </Field>
            <div className={styles.col}>
              <Field label="Teléfono">
                <Input
                  disabled={isWorking}
                  value={contact.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </Field>
              <Field label="Celular">
                <Input
                  disabled={isWorking}
                  value={contact.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </Field>
            </div>
            <Field label="Sitio web">
              <Input
                disabled={isWorking}
                value={contact.socialNetworks?.website}
                name="socialNetworks.website"
                onChange={handleChange}
              />
            </Field>
            <Field label="Tags">
              <Input disabled={isWorking} name="tags" onChange={handleChange} />
            </Field>
            <Field label="Tipo de contacto">
              <select
                className={styles.contact_type}
                name="type"
                onChange={handleChange}>
                <option value="Sin especificar">Sin especificar</option>
                <option value="client">Cliente</option>
                <option value="supplier">Proveedor</option>
                <option value="lead">Lead</option>
              </select>
            </Field>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button onClick={() => onCloseModal?.()} type="button" variant="third">
          Descartar
        </Button>
        <Button loading={isWorking} type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default ContactFrom;

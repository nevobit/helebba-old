import { Button, Field, Input } from '@/components';
import { useCreateEmployee, useEditEmployee, useForm } from '@/hooks';
import styles from './Create.module.css';
import { FormEvent } from 'react';
import { useAccountStore } from '@/state-manager';
import { Employee } from '@helebba/entities';
import { countries } from '@/utilities';

interface Props {
  employeeToEdit?: Partial<Employee>;
  onCloseModal?: () => void;
}

const EmployeeFrom = ({ employeeToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createEmployee } = useCreateEmployee();
  const { isEditing, editEmployee } = useEditEmployee();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = employeeToEdit;
  const isEditSession = Boolean(editId);

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
          employee: { ...employee,  },
          
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
              value={employee.name}
              onChange={handleChange}
            />
          </Field>
          <Field label="Apellidos">
            <Input
              disabled={isWorking}
              name="lastname"
              value={employee.lastname}
              onChange={handleChange}
            />
          </Field>
          <Field label="Correo electrónico *">
            <Input
              disabled={isWorking}
              name="email"
              value={employee.email}
              onChange={handleChange}
            />
          </Field>
        </div>

        <div className={styles.tabs}>
            <button type='button' >Datos personales</button>
        </div>

        <div className={styles.col} >
          <div>

          <div className={styles.col}>
          <Field label="Teléfono">
            <Input
              disabled={isWorking}
              name="phone"
              value={employee.phone}
              onChange={handleChange}
            />
          </Field>
          <Field label="Celular">
            <Input
              disabled={isWorking}
              name="mobile"
              value={employee.mobile}
              onChange={handleChange}
            />
          </Field>
          </div>
 
          <Field label="N° de cuenta bancaria">
            <Input
              disabled={isWorking}
              name="iban"
              value={employee.iban}
              onChange={handleChange}
            />
          </Field>
          <div className={styles.col}>
          <Field label="Doc de identidad">
            <Input
            type='number'
              disabled={isWorking}
              name="identification"
              value={employee.identification}
              onChange={handleChange}
            />
          </Field>
          <Field label="N° de seguridad social">
            <Input
              disabled={isWorking}
              name="socialSecurityNum"
              value={employee.socialSecurityNum}
              onChange={handleChange}
            />
          </Field>
          </div>
          <Field label="Correo electrónico personal">
            <Input
              disabled={isWorking}
              name="mainEmail"
              value={employee.mainEmail}
              onChange={handleChange}
            />
          </Field>
          </div>
         
          
          <div>
          <Field label="Dirección">
            <Input
              disabled={isWorking}
              name="address.address"
              value={employee.address?.address}
              onChange={handleChange}
            />
          </Field>

          <div className={styles.col} >
          <Field label="Ciudad">
            <Input
              disabled={isWorking}
              name="address.city"
              value={employee.address?.city}
              onChange={handleChange}
            />
          </Field>
          <Field label="Código postal">
            <Input
              disabled={isWorking}
              name="address.postalCode"
              value={employee.address?.postalCode}
              onChange={handleChange}
            />
          </Field>
          </div>
          <div className={styles.col} >
          <Field label="Departamento">
            <Input
              disabled={isWorking}
              name="address.province"
              value={employee.address?.province}
              onChange={handleChange}
            />
          </Field>
          <Field label="País">
          <select  name="address.country" value={employee.address?.country} onChange={handleChange}>
            <option value="">Seleccionar</option>

              {countries.map((country) => (
                <option value={country.code}>{country.name}</option>
              ))}
            </select>
           
          </Field>
          </div>
          <div className={styles.col} >
          <Field label="Fecha nacimiento">
            <Input
              disabled={isWorking}
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
            />
          </Field>
          <Field label="Nacionalidad">
            <select name="nationality" value={employee.nationality} onChange={handleChange}>
            <option value="">Seleccionar</option>

              {countries.map((country) => (
                <option value={country.code}>{country.name}</option>
              ))}
            </select>
            
          </Field>
          </div>
          <div className={styles.col} >
          <Field label="Idioma">
          <select name="mainLanguage" value={employee.mainLanguage} onChange={handleChange}>
          <option value="">Seleccionar</option>
              
              <option value="Catalan">Catalán</option>
              <option value="Checo">Checo</option>
              <option value="Danes">Danés</option>
              <option value="Aleman">Alemán</option>
              <option value="Griego">Griego</option>
              <option value="Ingles">Ingles</option>
              <option value="Espanon">Español</option>
              <option value="Femenino">Checo</option>
              <option value="Femenino">Checo</option>
              <option value="Femenino">Checo</option>
              <option value="Femenino">Checo</option>

            </select>
            
          </Field>
          <Field label="Género">
            <select name="gender" value={employee.gender} id="">
            <option value="">Seleccionar</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </Field>
          </div>
          </div>

        </div>
{/* 
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
        </div> */}
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

export default EmployeeFrom;

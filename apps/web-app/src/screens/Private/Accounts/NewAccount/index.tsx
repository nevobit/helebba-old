import { useCreateAccount, useForm, useUser } from '@/hooks';
import { countries } from '@/utilities';
import styles from './Accounts.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/constant-definitions';
import { Button, Field, Input } from '@/components';
import { useState } from 'react';
import EmployeesButton from './EmployeesButton';
import { useAccountStore } from '@/state-manager';

const NewAccount = () => {
  const navigate = useNavigate();
  const { isCreating, createAccount } = useCreateAccount();
  const { user } = useUser();
  const selectAccount = useAccountStore((state) => state.selectAccount);

  const [type, setType] = useState('enterprise');
  const [employees, setEmployees] = useState('1');
  const { formState: account, handleChange } = useForm({
    name: '',
    country: countries[47].code,
    structure: 'enterprise',
    website: '',
  });

  const logoutHandler = () => {
    navigate(PublicRoutes.LOGIN, { replace: true });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAccount({...account, type, employees}, {
      onSuccess(data) {
        selectAccount(data)
        navigate(PrivateRoutes.HOME, { replace: true });
      },
    });
  };

  return (
    <>
      <div className={styles.header}>
        <img src="/images/logos/logo.svg" alt="" />
        <div onClick={logoutHandler}>
          <span>{user?.name?.charAt(0)}</span>
          <div>
            <h3 className={styles.name}>
              {user?.name} {user?.lastname}
            </h3>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <span className={styles.step}>PASO 1 / 2</span>
        <h2 className={styles.title}>Vamos a crear tu cuenta</h2>
        <Field label="Seleccione su tipo de actividad">
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={() => setType('enterprise')}
              className={type == 'enterprise' ? styles.active : ''}>
              Empresa
            </button>
            <button
              type="button"
              onClick={() => setType('independ')}
              className={type == 'independ' ? styles.active : ''}>
              Independiente
            </button>
            <button
              type="button"
              onClick={() => setType('sign')}
              className={type == 'sign' ? styles.active : ''}>
              Firma de contabilidad
            </button>
          </div>
        </Field>

        <Field label={`Nombre ${type != 'independ' ? 'de la empresa' : ''}`}>
          <Input
            placeholder={`Nombre ${type != 'independ' ? 'de la empresa' : ''}`}
            name="name"
            onChange={handleChange}
          />
        </Field>
        <Field label="Pais">
          <select
            name="country"
            id=""
            defaultValue={countries[47].code}
            onChange={handleChange}>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </Field>
        {type != 'independ' && (
          <>
            <Field label="Estructura legal">
              <select name="structure" id="" onChange={handleChange}>
                <option value="enterprise">Empresa</option>
                <option value="corporation">Corporacion</option>
                <option value="others">Otros</option>
              </select>
            </Field>
            <Field label="Numero de empleados">
              <div className={styles.employe_buttons}>
                <EmployeesButton employees={employees} value='1' onChange={() => setEmployees("1")} />
                <EmployeesButton employees={employees} value='2-5' onChange={() => setEmployees("2-5")} />
                <EmployeesButton employees={employees} value='6-10' onChange={() => setEmployees("6-10")} />
                <EmployeesButton employees={employees} value='11-25' onChange={() => setEmployees("11-25")} />
                <EmployeesButton employees={employees} value='26-50' onChange={() => setEmployees("26-50")} />
                <EmployeesButton employees={employees} value='+50' onChange={() => setEmployees("+50")} />
              </div>
            </Field>
          </>
        )}

        <Field label="Pagina web (Opcional)">
          <Input onChange={handleChange} />
        </Field>
        <div className={styles.footer}>
          <Link to="/">Cancelar</Link>
          <Button loading={isCreating} type="submit">
            Siguiente
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewAccount;

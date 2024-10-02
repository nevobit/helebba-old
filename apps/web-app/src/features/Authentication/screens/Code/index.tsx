import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Button, Field, Input } from "@helebba/design-system/web"
import { useUser } from '@/hooks';
import { useCode } from '../../hooks/useCode';

const CodeVerification = () => {
  const { isLogging, codeVerification } = useCode();
  const {  user } = useUser()

  const [code, setCode] = useState<string>('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    codeVerification(Number(code))
  };

  return (
    <>
      <div className={styles.header}>
        <img
          src="/images/logos/logo.svg"
          alt="Logo Helebba"
          title="Logo Helebba"
        />
        <p>
          <span className={styles.new} >
           ¿Nuevo en Helebba? 
          </span>
          <Link to="/signup"> Registrarse</Link>
        </p>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.title}>Inicia sesión en Helebba</h2>
        {/* <div className={styles.social}>
         <Button size="large" onClick={() => loginGoogleFn()} ><img  src='/images/logo.png' /> Continuar con Google</Button>
        </div> */}

        <div className={styles.separator_container}>
          <div className={styles.separator}>
            <span>Te hemos enviado un codigo al correo: <strong>{ user?.email }</strong></span>
          </div>
        </div>
       
        <Field label="Codigo">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Introduce el codigo"
            onChange={({ target }) => setCode(target.value)}
          />
        </Field>
        <div style={{
          display: 'inline-block',
          marginTop: 10,
            height: 25
          }} ></div> 
        <Button loading={isLogging} type="submit" className={styles.submit}>
          Continuar
        </Button>
      </form>
      <div className={styles.footer}>
        {/* <select name="" id="">
          <option value="">Espanol</option>
          <option value="">English</option>
        </select> */}
      </div>
    </>
  );
};

export default CodeVerification;

import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Button, Field, Input } from "@helebba/design-system/web"
import { useLogin, useLoginGoogle } from '../../hooks';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const { login } = useLogin();
  const { loginGoogle  } = useLoginGoogle();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // const {loading, success, user: auth, error} = useSelector((state: AppStore) => state.auth);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };


  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login(user)
  };

  const handleGoogleSuccess = async (
    token_id: string,
  ) => {
      loginGoogle(token_id)
  };

  const loginGoogleFn = useGoogleLogin({
  onSuccess: (token) => handleGoogleSuccess(token.access_token)
});

  

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
        <div className={styles.social}>
         <Button size="large" onClick={() => loginGoogleFn()} ><img  src='/images/logo.png' /> Continuar con Google</Button>
        </div>

        <div className={styles.separator_container}>
          <div className={styles.separator}>
            <span>O inicia sesión con</span>
          </div>
        </div>

        <Field label="Correo electrónico">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Introduce tu correo electrónico"
            onChange={handleChange}
          />
        </Field>
        <label htmlFor="remember" className={styles.remember}>
          <input type="checkbox" name="remember" id="remember" />
          Recuérdame
        </label>
        <Button type="submit" className={styles.submit}>
          Iniciar sesión
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

export default Login;

import React, { useState, useCallback } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Button, Field, Input } from "@helebba/design-system/web";
import { useLogin, useLoginGoogle } from '../../hooks';
import { useGoogleLogin } from '@react-oauth/google';
import { isEmail } from '../utils';

const Header = () => (
  <div className={styles.header}>
    <img
      src="/images/logos/logo.svg"
      alt="Logo Helebba"
      title="Logo Helebba"
    />
    <p>
      <span className={styles.new}>¿Nuevo en Helebba?</span>
      <Link to="/signup"> Registrarse</Link>
    </p>
  </div>
);

const LoginForm = () => {
  const { isLogging, login } = useLogin();
  const { loginGoogle } = useLoginGoogle();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!isEmail(email)) {
        setError("Por favor, introduce un correo válido.");
        return;
      }
      try {
        setError(null);
        await login(email);
      } catch (e) {
        setError("Hubo un problema al iniciar sesión. Intenta nuevamente.");
      }
    },
    [email, login]
  );

  const handleGoogleSuccess = useCallback(
    async (tokenId: string) => {
      try {
        await loginGoogle(tokenId);
      } catch (e) {
        setError("Hubo un problema al iniciar sesión con Google.");
      }
    },
    [loginGoogle]
  );

  const loginGoogleFn = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (token) => handleGoogleSuccess(token.code),
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Inicia sesión en Helebba</h2>
      <div className={styles.social}>
        <Button
          type="button"
          size="large"
          onClick={() => loginGoogleFn()}
          aria-label="Iniciar sesión con Google"
        >
          <img src="/images/logo.png" alt="Logo Google" />
          Continuar con Google
        </Button>
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
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          aria-label="Correo electrónico"
        />
      </Field>
      {error && <p className={styles.error}>{error}</p>}
      <label htmlFor="remember" className={styles.remember}>
        <input type="checkbox" name="remember" id="remember" />
        Recuérdame
      </label>
      <Button
        loading={isLogging}
        disabled={!isEmail(email)}
        type="submit"
        className={styles.submit}
        aria-label="Iniciar sesión"
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

const Login = () => (
  <>
    <Header />
    <LoginForm />
    <div className={styles.footer}>
      {/* Opcional: habilitar selector de idioma */}
    </div>
  </>
);

export default Login;

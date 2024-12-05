import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './Login.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Button, Field, Input } from "@helebba/design-system/web";
import { useLogin } from '../../hooks';
import { isEmail } from '../utils';
import { Calendar, PlayCircle } from 'lucide-react';

const Header = () => (
  <div className={styles.header}>
    <img
      src="/images/logos/logo.svg"
      alt="Logo Helebba"
      title="Logo Helebba"
    />
    <p>
      <span className={styles.new}>¿¿Ya tienes una cuenta?</span>
      <Link to="/signup"> Acceder</Link>
    </p>
  </div>
);

const LoginForm = () => {
  const { isLogging, login } = useLogin();
  const [email, setEmail] = useState<string>('');
  const [option, setOption] = useState<string>('demo');

  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const loginButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const provider = queryParams.get('provider');

    if (provider === 'google' && loginButtonRef.current) {
      loginButtonRef.current.click();
    }
  }, [location.search]);

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


  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>A un paso de optimizar tu gestión</h2>
      <p className={styles.copy} >Déjanos tu información y elige la opción que más se ajusta a tu disponibilidad.</p>
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
      <Field label="Número de empleados">
        <select>
          <option value="">Elige una opción</option>
          <option value="">1</option>
          <option value="">2-5</option>
          <option value="">6-10</option>
          <option value="">11-25</option>
          <option value="">26-50</option>
          <option value="">+50</option>
        </select>
      </Field>
      <div className={styles.buttons} >
        <button onClick={() => setOption('demo')} type='button' className={option == 'demo' ? styles.active : ''} >
          <Calendar size={24} color='var(--main-color)' />
          <h4>Agenda una demo</h4>
          <p>Explora Helebba paso a paso con nuestro equipo</p>
        </button>
        <button onClick={() => setOption('video')} type='button' className={option == 'video' ? styles.activeVideo : ''}>
          <PlayCircle size={24} color='var(--main-color)' />
          <h4>Ver tutorial</h4>
          <p>Descubre todo lo esencial de Helebba en este vídeo.</p>
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <Button
        loading={isLogging}
        disabled={!isEmail(email)}
        type="submit"
        className={styles.submit}
        aria-label="Iniciar sesión"
      >
        Continuar
      </Button>
      <p className={styles.copy_footer}>
        Al continuar confirmas que aceptas nuestros <br /> <Link to='/'>Términos y condiciones, Política de Privacidad y Cookies.</Link>
      </p>
    </form>
  );
};

const Demo = () => (
  <>
    <Header />
    <LoginForm />
  </>
);

export default Demo;

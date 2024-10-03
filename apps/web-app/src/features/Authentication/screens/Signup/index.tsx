import React, { useState } from 'react'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import { useLoginGoogle, useRegister } from '../../hooks'
import { Button, Field, Input } from '@helebba/design-system/web'
import { useGoogleLogin } from '@react-oauth/google';

const Signup = () => {
  const { isRegistering, register } = useRegister();
  const { loginGoogle } = useLoginGoogle();
  
  const [user, setUser] = useState({
    name: '',
    last_name: '',
    phone: 0,
    email: '',
    password: '',
    newsletter: true,
    method: 'email'
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({...prev, [event.target.name]: event.target.value}))
  }
  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    register(user)
  }
  
  const handleGoogleSuccess = async (
    token_id: string,
  ) => {
      loginGoogle(token_id)
  };
  
  const loginGoogleFn = useGoogleLogin({
            flow: 'auth-code',
  onSuccess: (token) => handleGoogleSuccess(token.code)
});
  return (
    <>
     <div className={styles.header}>
       <img src="/images/logos/logo.svg" alt="Logo Helebba" title='Logo Helebba' />
       <p><span className={styles.new} > ¿Ya tienes una cuenta? </span> <Link to='/login'>Acceder</Link></p>
     </div>
     
     <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Prueba Helebba 15 días gratis</h2>
      <p className={styles.copy}>Sin compromisos, sin límites y sin necesidad de tarjeta de crédito.</p>
      
      <div className={styles.form_colum}>
        
      <Field label='Nombre'>
       <Input type="text" name="name" id="" placeholder='Escribe tu nombre' onChange={handleChange} />
      </Field>
      <Field label='Apellido'>
       <Input type="text" name="last_name" id="" placeholder='Escribe tu apellido' onChange={handleChange} />
      </Field>
      </div>
      
      <Field label='Teléfono'>
       <Input type="text" name="phone" id="" placeholder='Escribe tu número de teléfono' onChange={handleChange} />
      </Field>
      <Field label='Email'>
       <Input type="text" name="email" id="" placeholder='Introduce tu correo electrónico' onChange={handleChange} />
      </Field>
       <label htmlFor="newsletter" className={styles.remember}>
        <input type="checkbox" name="newsletter" id="remember"  />        
        Consentir newsletters y ofertas.
       </label>
      <Button type='submit' loading={ isRegistering } className={styles.submit}>Empieza tu prueba de 14 días</Button>
      <div className={styles.separator_container}>
      <div className={styles.separator}>
       
       <span>o regístrate con</span>
      </div>
      </div>
      <div className={styles.social}>
         <Button size="large" onClick={() => loginGoogleFn()} ><img  src='/images/logo.png' /> Continuar con Google</Button>

        {/* <button> <img src="/images/logos/google.svg" alt="" /> </button>
        <button> <img src="/images/logos/facebook.svg" alt="" />  </button>
        <button><img src="/images/logos/apple.svg" alt="" /></button>         */}
      </div>
      <p className={styles.copy_footer}>
      Al continuar confirmas que aceptas nuestros <br /> <Link to='/'>Términos y condiciones, Política de Privacidad y Cookies.</Link>
      </p>
     </form>
     {/* <div className={styles.footer}>
      <select name="" id="">
       <option value="">Espanol</option>
       <option value="">English</option>
      </select>
     </div> */}
    </>
  )
}

export default Signup
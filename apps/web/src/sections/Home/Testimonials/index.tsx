import React from 'react';
import styles from './Testimonials.module.css';
import Card from './Card';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>RESEÑAS DE NUESTROS CLIENTES</h3>
        <h2 className={styles.title} >Lo que dicen de nosotros</h2>

        <div className={styles.list}>
            <Card date='12 de diciembre 2023' name='Natalia' title='Te hacen el trabajo mucho más fácil' description='Trabajamos con Helebba hace unos meses y estamos encantadas'  />
            <Card date='12 de diciembre 2023' name='Natalia' title='Te hacen el trabajo mucho más fácil' description='Trabajamos con Helebba hace unos meses y estamos encantadas'  />
            <Card date='12 de diciembre 2023' name='Natalia' title='Te hacen el trabajo mucho más fácil' description='Trabajamos con Helebba hace unos meses y estamos encantadas'  />
    
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

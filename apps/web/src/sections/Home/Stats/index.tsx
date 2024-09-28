import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text} >
        <h2 className={styles.title} >Únete a más de 500 emprendedores y empresas que ya optimizan su gestión con Helebba</h2>
        </div>

        <ul className={styles.list}>
          <li>
            <h3>40h</h3>
            <p>Automatizan 40 horas de trabajo al mes</p>
          </li>
          <li>
            <h3>+160</h3>
            <p>Procesan cotizaciones 160 veces más rápido</p>
          </li>
          <li>
            <h3>80%</h3>
            <p>Cobra un 80% más rápido que con procesos manuales</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;

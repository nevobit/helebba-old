import React from 'react';
import styles from './HeroSection.module.css';
const HeroSection = () => {
  return (
      <section className={styles.hero}>
          
      <h1 className={styles.title}>El programa de facturación y <br /> gestión para emprendedores</h1>
      <p className={styles.copy}>Controla la facturación y toda la gestión de tu negocio desde un software útil e <br /> intuitivo. <strong>La burocracia ya es bastante complicada, pásate a Helebba.</strong> </p>
       <div className={styles.heroButtonsContainer}>
        <button className={styles.heroButton}>Empieza gratis</button>
         <button className={styles.heroButtonGoogle}>
          <img src="/logo.png" alt="Logo de Google" className={styles.logo} />
          Empieza gratis con Google
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
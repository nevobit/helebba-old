import Image from 'next/image';
import React from 'react';
import styles from './ElectronicBilling.module.css';

const ElectronicBilling = () => {
  return (
    <section className={styles.section}>
      <div className={styles.img}>
        <Image
          src="/FacturaElectronica.png"
          alt="Testimonio"
          layout="responsive"
          width={550}
          height={480}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Helebba, preparado para la <br /> facturación electrónica
        </h2>
        <div>
          <h4 className={styles.name}>
            Cumpliremos con todos los requisitos de la ley Antifraude y la ley Crea y Crece.
            Mientras tanto, aprende cómo van a afectar a tu negocio viendo nuestro webinar.
          </h4>
          <button className={styles.btn}>Conoce las nuevas leyes</button>
        </div>
      </div>
    </section>
  );
};

export default ElectronicBilling;

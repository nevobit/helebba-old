import Image from 'next/image';
import React from 'react';
import styles from './Testimonial.module.css';
import Icon from './Icon';

const Testimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.img} >
            <Image src="/images/home/testi_osito.jpeg" width={380} height={480} alt='Testimonio' />
        </div>
        <div className={styles.text} >

        <Icon />
        <h2 className={styles.title} >Toda la empresa habla el mismo idioma gracias a Helebba.</h2>
        <div>
            <h4 className={styles.name} >Ander Méndez</h4>
            <h4 className={styles.position} >CEO de Osito & Co.</h4>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

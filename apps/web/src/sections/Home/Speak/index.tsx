import Image from 'next/image';
import React from 'react';
import styles from './Testimonial.module.css';
import Link from 'next/link';

const Speak = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
          <Image src="/partners_banner.jpeg" width={600} height={350}  alt='Helebba Asesorías' />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>
            "Habla" Helebba con tu asesoría
          </h2>
          <p>En Helebba traducimos lo complejo y lo hacemos fácil e intuitivo. Utiliza nuestro programa junto con tu asesoría y comprende mejor el estado de tu negocio.</p>
          <Link href="https://app.helebba.com">Descubre cómo</Link>
        </div>
      </div>
    </section>
  );
};

export default Speak;

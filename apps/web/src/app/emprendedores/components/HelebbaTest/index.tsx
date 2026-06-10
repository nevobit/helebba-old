import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from'./HelebbaTest.module.css'; 

function HelebbaTest() {
  return (
    <section className={styles.section} >
        <div className={styles.content}> 
        <div className={styles.cta}>
            <div className={styles.text}>
                      <h2>Prueba Helebba completamente gratis durante 14 días</h2>
                      <p>Con Helebba puedes hacer muchas cosas, pero para empezar no tienes por qué saberlo todo.</p>
                      <Link href="https://app.helebba.com/login">Empieza gratis</Link>
            </div>
            <div className={styles.picture} >
                <Image src="/PruebaGratis.svg" width={500} height={350} alt='Call to action' />
            </div>
        </div>
        </div>
    </section>
  );
}

export default HelebbaTest;
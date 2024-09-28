import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Tools.module.css';

const OneClic = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
            <h2 className={styles.title} >Disfruta de otras herramientas para potenciar tu negocio</h2>
            <p className={styles.copy} >Todos los aspectos de tu empresa conectados con una sola plataforma</p>
        </div>
        <div>
            <ul>
                <li>
                    <Link href="/" >
                    <Image src="/images/home/home-3.svg" width={370} height={270} alt='Equipo pontencia' />
                    <h3>Equipo</h3>
                    <p className={styles.text} >Potencia y organiza a tu equipo con las mejores herramientas de recursos humanos.</p>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                <Image src="/images/home/home-4.svg" width={370} height={270} alt='Equipo pontencia' />
                    <h3>Proyectos</h3>
                    <p className={styles.text}>Potencia y organiza a tu equipo con las mejores herramientas de recursos humanos.</p>
                    </Link>
                
                </li>
                <li>
                    <Link href="/" >

                <Image src="/images/home/home-5.svg" width={370} height={270} alt='Equipo pontencia' />
                    <h3>Inventario</h3>
                    <p className={styles.text}>Potencia y organiza a tu equipo con las mejores herramientas de recursos humanos.</p>
                    </Link>
                
                </li>
                <li>
                    <Link href="/" >
                <Image src="/images/home/home-6.svg" width={370} height={270} alt='Equipo pontencia' />
                    <h3>CRM</h3>
                    <p className={styles.text}>Potencia y organiza a tu equipo con las mejores herramientas de recursos humanos.</p>
                    </Link>
                
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default OneClic;

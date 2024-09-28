import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './More.module.css';
import { Check } from 'react-feather';

const More = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
            <h2 className={styles.title} >Y eso no es todo...</h2>
            <p className={styles.copy} >Sea cual sea tu negocio, Helebba tiene la herramienta que buscas.</p>
        </div>
        <div>
            <ul>
                <li>
                    <Link href="/" >
                    <h3><Check size={18} /> Soporte de múltiples divisas</h3>
                    <p className={styles.text} >Crea facturas en cualquier moneda cambiando la divisa en tus configuraciones.</p>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                    <h3><Check size={18} /> Envío de presupuestos</h3>
                    <p className={styles.text}>Prepara presupuestos y envíalos desde Helebba para ser aprobados por tu cliente.</p>
                    </Link>
                
                </li>
                <li>
                    <Link href="/" >

                    <h3><Check size={18} /> Cálculo de impuestos</h3>
                    <p className={styles.text}>Elige qué impuesto quieres añadir a tus facturas y Helebba hará las cuentas por ti.</p>
                    </Link>
                
                </li>
                <li>
                    <Link href="/" >
                    <h3><Check size={18} /> Integraciones</h3>
                    <p className={styles.text}>Conecta todas tus aplicaciones con Helebba de forma sencilla a través de la Helebba Store.</p>
                    </Link>
                </li>
                <li>
                    <Link href="/" >
                    <h3><Check size={18} /> Gestión de nóminas</h3>
                    <p className={styles.text} >Gestiona nóminas con toda la información que necesitas: salario base, suplementos, IRPF, etc.</p>
                    </Link>
                </li>
                <li>
                    <Link href="/" >
                    <h3><Check size={18} /> Gestión de proformas</h3>
                    <p className={styles.text} >Personalízalas para que especifiquen los detalles sobre futuras facturas con tus clientes.</p>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
      <div className={styles.picture}>
        <Image src="/images/home/home-7.jpeg" width={1200} height={600} alt='Helebba Objetivos' />
      </div>
    </section>
  );
};

export default More;

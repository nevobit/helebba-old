'use client';
import React, { useState } from 'react';
import styles from './Steps.module.css';
import Link from 'next/link';
import Image from 'next/image';

const images = ['/images/TPV.png', '/images/TPV-1.png'];

const Steps = () => {
  const [actualImage, setActualImage] = useState(0);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          src={images[actualImage]}
          width={600}
          height={350}
          alt="Punto de Venta Helebba"
        />
        <div>
          <h2>Empieza a vender en tienda en 4 pasos</h2>
          <ul className={styles.options} >
            <li>
              <button className={ actualImage == 0 ? styles.active : "" } onClick={() => setActualImage(0)}>
                1. Registrate en Helebba
              </button>
              {actualImage == 0 && (
                  <p>Puedes empezar el registro desde esta página</p>
              )}
            </li>
            <li>
              <button className={ actualImage == 1 ? styles.active : "" } onClick={() => setActualImage(1)}>
                2. Crea tu primera tienda
              </button>
              {actualImage == 1 && (
 <p>
 Rellena los campos con los detalles y vincula un almacén nuevo o
 uno ya existente.
</p>
              )}
             
            </li>
            <li>
              <button className={ actualImage == 2 ? styles.active : "" } onClick={() => setActualImage(2)}>
                3. Añade los productos
              </button>
              {actualImage == 2 && (
              <p>
                Selecciona en tu cuenta los productos que vas a vender o crea
                nuevos.
              </p>
                )}
            </li>
            <li>
              <button className={ actualImage == 3 ? styles.active : "" } onClick={() => setActualImage(3)}>
                4. Descarga la app en tu tablet
              </button>
              {actualImage == 3 && (

              <p>
                Empieza a vender en tu tienda física mientras mantienes tu
                contabilidad en la nube.
              </p>
               )}
            </li>
          </ul>
        </div>
      </div>
      <Link href="/">Empieza ahora</Link>
    </section>
  );
};

export default Steps;

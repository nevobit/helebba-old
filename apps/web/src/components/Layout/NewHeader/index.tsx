"use client";

import Image from 'next/image';
import React from 'react';
import styles from "./Header.module.css";
import Link from 'next/link';

const NewHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.content} >
        <div>

          <div className={styles.logo} >
            <Image src="/isotype.svg" width={25} height={25} objectFit='contain' alt='Logo Helebba Software' />
          </div>

          <ul>
            <li><Link href='/' >Funcionalidades</Link></li>
            <li><Link href='/' >Empresas</Link></li>
            <li><Link href='/' >Emprendedores</Link></li>
            <li><Link href='/' >Asesorías</Link></li>
            <li><Link href='/' >Precios</Link></li>
            <li><Link href='/' >Recursos</Link></li>
          </ul>
        </div>

        <div>
          <Link href="https://app.helebba.com.co" className={styles.loginBtn}>Inicia sesión</Link>
          <Link href="https://app.helebba.com.co" className={styles.btnSec}>Pide tu demo</Link>

          <Link href="https://app.helebba.com.co" className={styles.btn}>Empieza gratis</Link>
        </div>


        {/* <div className={styles.logo}>
        <Image src="/images/logos/logotipo.png" width={110} height={25} objectFit='contain' alt='Logo Helebba Software' />
      </div>

      <nav className={`${styles.nav}`}>
        <ul>
          <li><Link href="/">Funcionalidades</Link></li>
          <li><Link href="/">Empresas</Link></li>
          <li><Link href="/">Emprendedores</Link></li>
          <li><Link href="/">Asesorías</Link></li>
          <li><Link href="/precios?type=freelancers">Precios</Link></li>
          <li><Link href="/">Recursos</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="https://app.helebba.com.co" className={styles.login_btn}>Inicia sesión</Link>
          <Link href="https://app.helebba.com.co" className={styles.btn}>Empieza gratis</Link>
        </div>
      </nav> */}
      </nav>

    </header>
  );
};

export default NewHeader;

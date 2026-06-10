"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
/*     console.log('Abierto',!isOpen) */
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logos/logotipo.png" width={110} height={25} objectFit='contain' alt='Logo Helebba Software' />
      </div>

      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="/funcionalidades">Funcionalidades</Link></li>
          <li><Link href="/">Empresas</Link></li>
          <li><Link href="/emprendedores">Emprendedores</Link></li>
          <li><Link href="/">Asesorías</Link></li>
          <li><Link href="/precios?type=freelancers">Precios</Link></li>
          <li><Link href="/">Recursos</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="https://app.helebba.com" className={styles.login_btn}>Inicia sesión</Link>
          <Link href="https://app.helebba.com" className={styles.btn}>Empieza gratis</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

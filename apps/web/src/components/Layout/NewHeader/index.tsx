"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <li><Link href='/precios?type=entrepeneurs' >Precios</Link></li>
            <li><Link href='/' >Recursos</Link></li>
          </ul>
        </div>

        <div className={styles.buttons}>
          <Link href="https://app.helebba.com" className={styles.loginBtn}>Inicia sesión</Link>
          <Link href="https://app.helebba.com/demo" className={styles.btnSec}>Pide tu demo</Link>

          <Link href="https://app.helebba.com/signup" className={styles.btn}>Empieza gratis</Link>
        </div>

        <button className={styles.menu} onClick={() => setIsOpen(!isOpen)}> {isOpen ? <X /> : <Menu />} </button>
      </nav>

      <div className={isOpen ? styles.mobileActive : styles.mobile} >


        <ul>
          <li><Link href='/funcionalidades' >Funcionalidades</Link></li>
          <li><Link href='/' >Empresas</Link></li>
          <li><Link href='/' >Emprendedores</Link></li>
          <li><Link href='/' >Asesorías</Link></li>
          <li><Link href='/precios?type=entrepeneurs' >Precios</Link></li>
          <li><Link href='/' >Recursos</Link></li>
        </ul>

        <div className={isOpen ? styles.activeButtons : styles.buttons} >
          <Link href="https://app.helebba.com" className={styles.btn}>Empieza gratis</Link>
          <Link href="https://app.helebba.com/demo" className={styles.btnSec}>Pide tu demo</Link>

          <Link href="https://app.helebba.com/signup" className={styles.loginBtn}>Inicia sesión</Link>

        </div>



      </div>

    </header>
  );
};

export default NewHeader;

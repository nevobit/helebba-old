import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-feather';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <div>
            <p>ACCESO RÁPIDO</p>
            <ul>
              <li><a href="/">Crear cuenta</a></li>
              <li><a href="/">Iniciar sesión</a></li>
              <li><a href="/">Precios</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>
          <div>
            <p>HELEBBA, TODO EN UNO</p>
            <ul>
              <li><a href="/">Facturación</a></li>
              <li><a href="/">Contabilidad</a></li>
              <li><a href="/">Helebba para asesorías</a></li>
              <li><a href="/">Inventario</a></li>
              <li><a href="/">TPV</a></li>
              <li><a href="/">CRM</a></li>
              <li><a href="/">Gestión de proyectos</a></li>
              <li><a href="/">Gestión de equipos</a></li>
            </ul>
          </div>
          <div>
            <p>RECURSOS</p>
            <ul>
              <li><a href="/">Webinars</a></li>
              <li><a href="/">Guías</a></li>
              <li><a href="/">Academy</a></li>
              <li><a href="/">Directorio de asesorías</a></li>
              <li><a href="/">Directorio de Solution Partners</a></li>
              <li><a href="/">Soluciones de developers</a></li>
            </ul>
          </div>
          <div>
            <p>SOBRE NOSOTROS</p>
            <ul>
              <li><a href="/">Únete al equipo</a></li>
              <li><a href="/">Conócenos</a></li>
              <li><a href="/">Historias de éxito</a></li>
              <li><a href="/">Solution partners</a></li>
            </ul>

            <p className={styles.top} >LEGAL</p>

            <ul>
            <li><a href="/">Política de cookies</a></li>
            <li><a href="/">Política de privacidad</a></li>
            <li><a href="/">Términos y condiciones</a></li>

            </ul>
          </div>
        </nav>
        <div className={styles.copy}>
          <p>
            &copy; {new Date().getFullYear()} Helebba. Todos los derechos
            reservados.
          </p>
          <div className={styles.socials}>
            <Link href="/">
              <Facebook />
            </Link>
            <Link href="/">
              <Instagram />
            </Link>

            <Link href="/">
              <Linkedin />
            </Link>

            <Link href="/">
              <Twitter />
            </Link>
            <Link href="/">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

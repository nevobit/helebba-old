import Image from 'next/image'
import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header} >
        <nav className={styles.nav} >
            <div>
            <Image src="/images/logos/logotipo.png" width={110} height={25} objectFit='contain' alt='Logo Helebba Software' />
            <Link href="/" >Funcionalidades</Link>
            <Link href="/" >Empresas</Link>
            <Link href="/" >Emprendedores</Link>
            <Link href="/" >Asesorías</Link>
            <Link href="/precios?type=freelancers" >Precios</Link>
            <Link href="/" >Recursos</Link>
            </div>

            <div>
                <Link href="https://app.helebba.com" className={styles.login_btn} >Inicia sesión</Link>
                <Link href="https://app.helebba.com" className={styles.btn} >Empieza gratis</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
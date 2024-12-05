import React from 'react'
import styles from './Black.module.css';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BlackFriday = ({ image = true }: { image?: boolean }) => {
    return (
        <div className={styles.container}>
            <div className={`${image == false ? styles.contentPadding : ''}  ${styles.content}`} >
                <h1>
                    <span>El software de gestión para pymes y emprendedores<Dot size={70} color='#F13A39' /></span>
                </h1>
                <p>Helebba es la herramienta en la nube que tiene todo lo que necesitas para gestionar tu</p>
                <p>empresa donde y cuando quieras.</p>
                {image && (

                <div className={styles.buttons} >
                    <Link href='/'>Empieza gratis</Link>
                        <Link href='/'><Image src='/google-logo.png' alt='Logo de Google' width={25} height={25} /> Empieza gratis con Google</Link>
                    </div>
                )}
            </div>
            {image && (
                <Image className={styles.image} src='/InfoSoftHe.png' objectFit='contain' width={1200} height={350} alt='Helebba Software' />
            )}
        </div>
    )
}

export default BlackFriday
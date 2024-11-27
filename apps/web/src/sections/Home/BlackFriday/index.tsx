import React from 'react'
import styles from './Black.module.css';
import { Dot } from 'lucide-react';
import Link from 'next/link';

const BlackFriday = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content} >
                <h2>
                    <div className={styles.offer}>
                        <span>75%</span>
                        <div className={styles.discount}>descuento</div>
                    </div>
                    <span>Black Friday<Dot size={90} color='#F13A39' /></span>
                </h2>
                <p>Hacer crecer tu negocio no cuesta tanto.</p>
                <p>Tu plan de Helebba al 75% de descuento</p>
                <p>durante esta semama.</p>
                <div className={styles.buttons} >
                    <Link href='/'>Empeiza gratis</Link>
                    <Link href='/'>Ver planes de precios</Link>
                </div>
            </div>

        </div>
    )
}

export default BlackFriday
'use client'
import React from 'react';
import styles from './Screens.module.css';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Consultancies = () => {
    return (
        <div className={styles.content} >
            <div className={styles.lastCard} >
                <div>

                    <h2>Consigue tu plan personalizado</h2>
                    <p>Colabora con tus clientes en tiempo real y reduce los tiempos de gestión.</p>

                    <ul>
                        <li><Check size={14} color='var(--hlb-btn-primary-color)' />Certificación oficial</li>
                        <li><Check size={14} color='var(--hlb-btn-primary-color)' />Anuncio en el Marketplace</li>
                        <li><Check size={14} color='var(--hlb-btn-primary-color)' />Colaboración directa con clientes</li>
                        <li><Check size={14} color='var(--hlb-btn-primary-color)' />Formación personalizada</li>
                    </ul>

                    <button>Solicita más información</button>
                    <Link href='/' >Ventajas de trabajar con Helebba</Link>
                </div>

                <div className={styles.lastImage} >
                    <Image src='/asesorias_SPANISH.svg' alt='Asesorias Helebba' width={650} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Consultancies
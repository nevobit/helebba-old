"use client"
import { usePrices } from '@/hooks/usePrices'
import React from 'react'
import styles from "./Pricing.module.css"
import Link from 'next/link'

const PricingInfoPlus = () => {
  const prices = usePrices();
  return (
    <div className={styles.pricing_cards}>
    <div className={styles.card}>
        <h3>Gratis</h3>
        <p>Empieza a facturar ahora mismo.</p>

        <div className={styles.price}>
            0 COP<span>/mes</span>
        </div>

        <Link href="https://app.helebba.com">Empieza ahora</Link>

        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> 30 facturas al año</span>
            <span><i className='bx bx-check'></i> 5 escaneos gratis al año</span>
            <span><i className='bx bx-check'></i> 1 usuarios + asesor</span>
            <span><i className='bx bx-check'></i> 10 contactos</span>
        </div>


        <div className={styles.includes}>
            <h4>INCLUYE</h4>
            <ul>
                <li>Facturación y gastos</li>
            </ul>
        </div>
    </div>
    <div className={styles.card}>
        <h3>Plus</h3>
        <p>Gestión total para independientes.</p>

        <div className={styles.price}>
            {prices?.plus}<span>/mes</span>
        </div>
        <Link href="https://app.helebba.com">Empieza ahora</Link>

        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> 250 facturas al año</span>
            <span><i className='bx bx-check'></i> 40 escaneos al año</span>
            <span><i className='bx bx-check'></i> 1 usuario + asesor</span>
            <span><i className='bx bx-check'></i> 25 Contactos</span>
        </div>


        <div className={styles.includes}>
            <h4>Incluye</h4>
            <ul>
                <li>Todo lo del plan Gratis</li>
                <li>Modelos de impuestos</li>
                <li>Portal del cliente</li>
                <li>Multidivisa</li>
                <li>Gestion de proyectos</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default PricingInfoPlus
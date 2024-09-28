"use client"
import { usePrices } from '@/hooks/usePrices'
import React from 'react'
import styles from "./Pricing.module.css"
import Link from 'next/link'

const PricingInfo = () => {
  const prices = usePrices();
  return (
    
    <div className={styles.pricing_cards}>
    <div className={styles.card}>
        <h3>Básico</h3>
        <p>Simplifica la gestión de tu negocio con las funciones esenciales.</p>

        <div className={styles.price}>
            {prices?.basic}<span>/mes</span>
        </div>

        <Link href="https://app.helebba.com">Empieza ahora</Link>

        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> 1,000 facturas al año</span>
            <span><i className='bx bx-check'></i> 100 escaneos gratis al año</span>
            <span><i className='bx bx-check'></i> 2 usuarios + asesor</span>
            <span><i className='bx bx-check'></i> 5 bancos sincronizados</span>
        </div>


        <div className={styles.includes}>
            <h4>INCLUYE</h4>
            <ul>
                <li>Facturación y gastos</li>
                <li>Flujo de caja</li>
                <li>CRM</li>
                <li>Gestion de proyectos</li>
                <li>Recursos humanos</li>
            </ul>
        </div>
    </div>
    <div className={styles.card}>
        <h3>Estándar</h3>
        <p>Automatiza tus procesos contables y asigna roles predefinidos.</p>

        <div className={styles.price}>
            {prices?.standard}<span>/mes</span>
        </div>
        <Link href="https://app.helebba.com">Empieza ahora</Link>

        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> 3,000 facturas al año</span>
            <span><i className='bx bx-check'></i> 300 escaneos al año</span>
            <span><i className='bx bx-check'></i> 4 usuarios + asesor</span>
            <span><i className='bx bx-check'></i> Bancos ilimitados</span>
        </div>


        <div className={styles.includes}>
            <h4>Incluye</h4>
            <ul>
                <li>To lo del plan Básico</li>
                <li>Contabilidad</li>
                <li>Roles de usuario predefinidos</li>
                <li>Remesas bancarias</li>
            </ul>
        </div>
    </div>
    <div className={styles.card}>
        <h3>Avanzado</h3>
        <p>Profesionaliza tus comunicaciones y personaliza roles.</p>

        <div className={styles.price}>
            {prices?.advanced}
        </div>
        <Link href="https://app.helebba.com">Empieza ahora</Link>

        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> 10,000 facturas al año</span>
            <span><i className='bx bx-check'></i> 800 escaneos gratis al año</span>
            <span><i className='bx bx-check'></i> 7 usuarios + asesor</span>
            <span><i className='bx bx-check'></i> Bancos ilimitados</span>
        </div>


        <div className={styles.includes}>
            <h4>Incluye</h4>
            <ul>
                <li>Todo lo del plan Estándar</li>
                <li>Roles de usuario personalizados</li>
                <li>Poretal de cliente personalizado</li>
                <li>Recordatorio de pagos</li>
            </ul>
        </div>
    </div>
    <div className={styles.card}>
        <h3>Premium</h3>
        <p>Gestiona con facturación ilimitada y un account manager exclusivo.</p>

        <div className={styles.price}>
            {prices?.premium}<span>/mes</span>
        </div>
        <Link href="https://app.helebba.com">Empieza ahora</Link>
        <div className={styles.stats}>
            <span><i className='bx bx-check'></i> Facturas ilimitadas</span>
            <span><i className='bx bx-check'></i> 1.500 escaneos gratis al año</span>
            <span><i className='bx bx-check'></i> 15 usuarios + asesor</span>
            <span><i className='bx bx-check'></i> Bancos ilimitados</span>
        </div>

        <div className={styles.includes}>
            <h4>Incluye</h4>
            <ul>
                <li>Todo lo del plan Avanzado</li>
                <li>Gestión de reservas</li>
                <li>IVA por pías</li>
                <li>Account manager</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default PricingInfo
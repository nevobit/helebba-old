'use client'
import React from 'react';
import styles from './Screens.module.css';
import { Check, X } from 'lucide-react';
import { usePrices } from '@/hooks/usePrices';

const Entrepenuers = () => {
    const prices = usePrices();

    return (
        <div className={styles.content} >
            <div className={styles.cards} >
                <div className={styles.card} >
                    <div className={styles.cardHeader} >
                        <p>Plus</p>
                        <h2>{prices?.plus?.current}<span>/mes</span> </h2>
                        <p><span>{prices?.plus?.previous}</span> Ahorra {prices?.plus?.savings} en 3 meses</p>
                    </div>
                    <div className={styles.cardContent} >
                        <p>Empieza a facturar</p>
                        <ul>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> 1 usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Facturas y presupuestos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tu propios diseño de documentos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Conecta 1 banco</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Informes básicos</li>
                            <li className={styles.omit} ><X size={14} /> Gestión de empleados</li>
                            <li className={styles.omit} ><X size={14} /> Roles de usuario</li>
                            <li className={styles.omit} ><X size={14} /> Cobros y pagos en masa</li>
                            <li className={styles.omit} ><X size={14} /> Contabilidad</li>
                        </ul>
                        <button>Empieza ahora</button>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#5C73F2'
                    }}  >
                        <p>Básico <span className={styles.popular} >Popular</span> </p>
                        <h2>{prices?.basic?.current}<span>/mes</span></h2>
                        <p><span>{prices?.basic?.previous}</span> Ahorra {prices?.basic?.savings} en 3 meses</p>
                    </div>
                    <div className={styles.cardContent} >
                        <p>Gestiona tu facturación con clientes y proveedores.</p>
                        <ul>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> 2 usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Facturas y presupuestos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tu propios diseño de documentos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Conecta 5 banco</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Informes básicos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Gestión de empleados</li>
                            <li className={styles.omit} ><X size={14} /> Roles de usuario</li>
                            <li className={styles.omit} ><X size={14} /> Cobros y pagos en masa</li>
                            <li className={styles.omit} ><X size={14} /> Contabilidad</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#5C73F2'
                        }} >Empieza ahora</button>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#00B170'
                    }} >
                        <p>Estándar</p>
                        <h2>{prices?.standard?.current}<span>/mes</span></h2>
                        <p><span>{prices?.standard?.previous}</span> Ahorra {prices?.standard?.savings} en 3 meses</p>
                    </div>
                    <div className={styles.cardContent} >
                        <p>Automatiza la gestión de tu facturación y tu contabilidad.</p>
                        <ul>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> 1 usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Facturas y presupuestos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tu propios diseño de documentos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Conecta 1 banco</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Informes básicos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Gestión de empleados</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Roles de usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Cobros y pagos en masa</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Contabilidad</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#00B170'
                        }} >Empieza ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entrepenuers
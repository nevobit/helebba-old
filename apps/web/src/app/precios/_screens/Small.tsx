"use client"
import React from 'react';
import styles from './Screens.module.css';
import { Check, X } from 'lucide-react';
import { usePrices } from '@/hooks/usePrices';

const Small = () => {
    const prices = usePrices();

    return (
        <div className={styles.content} >
            <div className={styles.cards} >
                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#5C73F2'
                    }}  >
                        <p>Básico</p>
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
                            <li className={styles.omit} ><X size={14} /> Campos personalizados</li>
                            <li className={styles.omit} ><X size={14} /> Portal del cliente personalizado</li>
                            <li className={styles.omit} ><X size={14} /> Plan de negocio y tesorería</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#5C73F2'
                        }} >Empieza ahora</button>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#00B170'
                    }}  >
                        <p>Estándar</p>
                        <h2>{prices?.standard?.current}<span>/mes</span></h2>
                        <p><span>{prices?.standard?.previous}</span> Ahorra {prices?.standard?.savings} en 3 meses</p>
                    </div>
                    <div className={styles.cardContent} >
                        <p>Automatiza la gestión de tu facturación y tu contabilidad.</p>
                        <ul>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> 4 usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Facturas y presupuestos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tu propios diseño de documentos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Conecta 1 banco</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Informes básicos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Gestión de empleados</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Roles de usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Cobros y pagos en masa</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Contabilidad</li>
                            <li className={styles.omit} ><X size={14} /> Campos personalizados</li>
                            <li className={styles.omit} ><X size={14} /> Portal del cliente personalizado</li>
                            <li className={styles.omit} ><X size={14} /> Plan de negocio y tesorería</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#00B170'
                        }}  >Empieza ahora</button>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#8661EC'
                    }}  >
                        <p>Avanzado <span className={styles.popular} >Popular</span></p>
                        <h2>{prices?.advanced?.current}<span>/mes</span></h2>
                        <p><span>{prices?.advanced?.previous}</span> Ahorra {prices?.advanced?.savings} en 3 meses</p>
                    </div>
                    <div className={styles.cardContent} >
                        <p>Profesionaliza la gestión de tus finanzas y operaciones.</p>
                        <ul>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> 7 usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Facturas y presupuestos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tu propios diseño de documentos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Conecta 1 banco</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Informes básicos</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Gestión de empleados</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Roles de usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Cobros y pagos en masa</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Contabilidad</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Campos personalizados</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Portal del cliente personalizado</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Plan de negocio y tesorería</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#8661EC'
                        }}  >Empieza ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Small
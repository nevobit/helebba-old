'use client'
import React from 'react';
import styles from './Screens.module.css';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { usePrices } from '@/hooks/usePrices';

const Medium = () => {
    const prices = usePrices();
    return (
        <div className={styles.content} >
            <div className={styles.cards} >
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
                            <li className={styles.omit} ><X size={14} /> Soporte premium</li>
                            <li className={styles.omit} ><X size={14} /> Dominio dedicado </li>
                            <li className={styles.omit} ><X size={14} /> Tablas de alto volumen</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#8661EC'
                        }}  >Empieza ahora</button>
                    </div>
                </div>

                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#5C73F2'
                    }}  >
                        <p>Premium</p>
                        <h2>{prices?.premium?.current}<span>/mes</span></h2>
                        <p><span>{prices?.premium?.previous}</span> Ahorra {prices?.premium?.savings} en 3 meses</p>
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
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Roles de usuario</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Cobros y pagos en masa</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Contabilidad</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Campos personalizados</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Portal del cliente personalizado</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Plan de negocio y tesorería</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Soporte premium</li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Dominio dedicado </li>
                            <li><Check size={14} color='var(--hlb-btn-primary-color)' /> Tablas de alto volumen</li>
                        </ul>
                        <button style={{
                            backgroundColor: '#5C73F2'
                        }} >Empieza ahora</button>
                    </div>
                </div>

                <div className={styles.card} >
                    <div className={styles.cardHeader} style={{
                        backgroundColor: '#041A54'
                    }}  >
                        <p>Enterprise</p>
                        <h2>Consulta con Ventas</h2>
                        <p>- Configura tu plan más óptimo</p>
                    </div>
                    <div className={styles.cardContentNoPadding} >
                        <div className={styles.paddingContent} >
                            <p>¿Necesitas más? Programa una reunión con el equipo de Holded y diseña el plan que mejor se adapte a tu negocio.</p>

                        </div>
                        <div className={styles.padding} >
                            <button style={{
                                backgroundColor: '#041A54'
                            }} >Empieza ahora</button>
                        </div>
                        <div className={styles.image}>
                            <Image alt='Imagen ERP' src="/ERP_PRICING.svg" width={380} height={450} />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medium
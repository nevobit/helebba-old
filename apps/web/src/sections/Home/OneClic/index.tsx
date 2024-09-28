import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./One.module.css"

const OneClic = () => {
  return (
    <section className={styles.section} >
        <div className={styles.content}> 
        <div className={styles.text}>

        <h4 className={styles.subtitle}>TU EMPRESA A UN CLIC DE DISTANCIA</h4>
        <h2 className={styles.title} >Entiende dónde se encuentra tu negocio en todo momento</h2>
        <p className={styles.copy}>¿Qué te parecería cambiar horas de trabajo por un simple clic? Helebba simplifica la gestión de tu negocio, automatizando tareas y agilizando todos tus procesos.</p>
        <Link className={styles.btn} href="https://app.helebba.com">Pruébalo gratis</Link>
        </div>

        <div className={styles.information} >
            <Image src="/images/home/home-1.svg" width={500} height={500} alt='Helebba se ocupa de las facturas' />
            <div>
                <h3>Helebba se ocupa de las facturas</h3>

                <ul>
                    <li>
                        <h4>Documentos con una imagen profesional</h4>
                        <p>Elige entre más de 40 plantillas editables para personalizar las facturas, documentos y mensajes que envía tu empresa.</p>
                    </li>
                    <li>
                        <h4>Envío simplificado de tus facturas</h4>
                        <p>Crea facturas de venta con todos los requisitos legales en un par de clics y envíalas a tus clientes desde un único lugar.</p>
                    </li>
                </ul>

                <Link href="https://app.helebba.com" >Aprende más</Link>
            </div>
        </div>

        <div className={styles.information} >
            <div>
                <h3>Tu contabilidad en un solo vistazo</h3>

                <ul>
                    <li>
                        <h4>Asientos automáticos en el Libro diario</h4>
                        <p>Crea asientos automáticamente cada vez que haya un movimiento en tu contabilidad, puedes editar estos asientos predefinidos o crearlos manualmente.</p>
                    </li>
                    <li>
                        <h4>Trazabilidad en todos los niveles</h4>
                        <p>A través de informes a tiempo real de todos los movimientos, para que sepas en todo momento en qué punto está tu negocio.</p>
                    </li>
                </ul>

                <Link href="https://app.helebba.com" >Aprende más</Link>
            </div>
            <Image src="/images/home/home-2.svg" width={500} height={500} alt='Helebba se ocupa de las facturas' />

        </div>
        </div>

    </section>
  )
}

export default OneClic
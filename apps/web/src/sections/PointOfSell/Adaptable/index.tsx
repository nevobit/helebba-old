import React from 'react'
import styles from "./Adaptable.module.css"
import Image from 'next/image'

const Adaptable = () => {
  return (
    <>
    <section className={styles.section}>
        <h2 className={styles.title}>Un PDV adaptale a tus necesidades</h2>

        <div className={styles.elements}>
            <div>
                <h4>TODO EN UNO</h4>
                <h3>Ventas en tienda, contabilidad en la nube</h3>
                <p>Venta en tienda física y online, stock sincronizado, informes en tiempo real, creación automática de asientos contables... Todo lo tienes en Helebba.</p>
            </div>
            <div>
                <h4>APLICACIÓN PARA TABLETS</h4>
                <h3>Diseñado para pequeños negocios</h3>
                <p>Solo necesitas una tablet para empezar. Puedes añadir más hardware en función de tus necesidades para definir la configuración perfecta.</p>
            </div>
            <div>
                <h4>DISEÑO INTUITIVO</h4>
                <h3>Fácil de aprender a usar y de manejar</h3>
                <p>Aprende a usar el TPV gracias a su diseño intuitivo. ¿Necesitas ayuda? Un equipo está a tu disposición para ayudarte en el proceso.</p>
            </div>
        </div>
    </section>
    <section className={styles.section_pt}>
        <div className={styles.container} >
            <div>
                <h3>Tu stock y contabilidad siempre conectados</h3>
                <p>El PDV se conecta con todas las demás partes de Helebba (facturación, analítica...), así puedes gestionarlo todo desde un solo programa en tiempo real.</p>
                <div className={styles.buttons} >
                    <button>Empieza ahora</button>
                    <button>Habla con Ventas</button>
                </div>
            </div>
            <Image width={550} height={400} src="/TPV.png" alt='Punto de Venta Helebba' />
        </div>
    </section>
    </>

  )
}

export default Adaptable
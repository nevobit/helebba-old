import React from 'react'
import styles from "./Only.module.css"
import Image from 'next/image'

const Only = () => {
  return (
    <>
   
    <section className={styles.section_pt}>
        <div className={styles.container} >
            <div>
                <h3>Solo necesitas una tablet para empezar</h3>
                <p>Además, si quieres, puedes equipar tu negocio con escáner, impresora y cajones de efectivo.</p>
                <div className={styles.buttons} >
                    <button>Consigue el kit completo</button>
                </div>
            </div>
            <Image width={500} height={350} src="/git-pdv.gif" alt='Punto de Venta Helebba' />
        </div>
    </section>
    <section className={styles.section}>
        <h2 className={styles.title}>Vende estés donde estés</h2>

        <div className={styles.elements}>
            <div>
            <Image width={450} height={250} src="/use1.jpeg" alt='Punto de Venta Helebba' />

                <h3>Una sola tienda</h3>
                <p>Vende en tu tienda con la comodidad de tener todo tu negocio conectado en una sola herramienta.</p>
            </div>
            <div>
            <Image width={450} height={250} src="/use2.jpeg" alt='Punto de Venta Helebba' />

                <h3>Varias tiendas y almacenes</h3>
                <p>Configura todas tus tiendas usando el mismo sistema PDV de Heleba.</p>
            </div>
            <div>
            <Image width={450} height={250} src="/use3.jpeg" alt='Punto de Venta Helebba' />

                <h3>Ferias y pop ups</h3>
                <p>Lleva tu tablet a cualquier evento y efectúa ventas con la misma normalidad que estando en un local.</p>
            </div>
        </div>
    </section>
    </>

  )
}

export default Only
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./Cta.module.css"

const CallToAction = () => {
  return (
    <section className={styles.section} >
        <div className={styles.content}> 
        <div className={styles.cta}>
            <div className={styles.text}>
                <h2>Prueba Helebba completamente gratis y durante 14 días</h2>
                <Link href="https://app.helebba.com">Empieza gratis</Link>
            </div>
            <div className={styles.picture} >
                <Image src="/images/home/cta_image.png" width={500} height={350} alt='Call to action' />
            </div>
        </div>
        </div>
    </section>
  )
}

export default CallToAction
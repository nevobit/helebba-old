import React from 'react'
import styles from "./Top.module.css"
import { ArrowRight, Phone } from 'lucide-react'

const TopBlack = () => {
  return (
    <div className={styles.top} >
      <div className={styles.container}>
        <p>Empieza ahora y ahorra 50% durante 3 meses <ArrowRight size={18} color='#8BE737' /></p>
        <div>
        </div>
        <p className={styles.sells}>Habla con el equipo de ventas: <div className={styles.number}><Phone size={15} /> +57 320 653 5488</div></p>
      </div>
    </div>
  )
}

export default TopBlack
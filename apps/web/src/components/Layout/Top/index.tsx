import React from 'react'
import styles from "./Top.module.css"
import Link from 'next/link'

const Top = () => {
  return (
    <div className={styles.top} >
      <Link href="https://app.helebba.com">Empieza ahora y ahorra 50% durante 3 meses</Link>
    </div>
  )
}

export default Top
import React from 'react'
import { Monitor } from 'react-feather'
import styles from './Option.module.css'

interface Props{
  title: string;
  copy: string;
  children: React.ReactNode
}
const Option = ({title, copy, children}: Props) => {
  return (
    
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.icon}>
        <Monitor />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.copy}>{copy}</p>
      </div>
    </div>
    <ul className={styles.options}>
      {children}
    </ul>
  </div>
  )
}

export default Option
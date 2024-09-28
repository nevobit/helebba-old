import React from 'react'
import styles from './Time.module.css';

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className={styles.card} >
        <div className={styles.icon} >
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card
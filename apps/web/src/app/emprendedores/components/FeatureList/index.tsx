import React from 'react'
import styles from './FeatureList.module.css';

const FeaturesList = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className={styles.card}>
    <div className={styles.icon}>
        {icon}
    </div>
    <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>
  )
}

export default FeaturesList
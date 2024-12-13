import React from 'react';
import styles from './Card.module.css';


const Card = ({ icon, title, description, buttonLink, buttonText }: { icon: React.ReactNode, title: string, description: string , buttonText: string, buttonLink: string; }) => {
  return (
    <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.footer}>
        <a href={buttonLink}>{buttonText} →</a>
      </div>
    </div>
  );
};

export default Card;

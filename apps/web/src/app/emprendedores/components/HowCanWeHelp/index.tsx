import React from 'react';
import Card from './Card';
import styles from './HowCanWeHelp.module.css';

const HowCanWeHelp = () => {
  return (
    <div className={styles.howCanWeHelpContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>¿En qué te podemos ayudar?</h2>
        <p className={styles.copy}>Si tienes dudas, habla con alguno de nuestros expertos.</p>
      </div>
      <div className={styles.cardsContainer}>
        <Card
          icon="icon"
          title="Pregunta por chat"
          description="Haz una pregunta a través del live chat. Es rápido y fácil."
          buttonText="Inicia una conversación"
          buttonLink="#"
        />
        <Card
          icon="icon"
          title="Explora Helebba Academy"
          description="Todas las guías para aprender a usar Helebba, acompañadas de imágenes y videos."
          buttonText="Explora Helebba Academy"
          buttonLink="#"
        />
        <Card
          icon="icon"
          title="Asiste a los webinars"
          description="Descubre en una sesión todo lo que necesitas saber sobre Helebba."
          buttonText="Apúntate gratis"
          buttonLink="#"
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default HowCanWeHelp;

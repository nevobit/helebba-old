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
              icon={ <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle-more"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M8 12h.01" />
            <path d="M12 12h.01" />
            <path d="M16 12h.01" />
          </svg>}
          title="Pregunta por chat"
          description="Haz una pregunta a través del live chat. Es rápido y fácil."
          buttonText="Inicia una conversación"
          buttonLink="#"
        />
        <Card
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg> }
          title="Explora Helebba Academy"
          description="Todas las guías para aprender a usar Helebba, acompañadas de imágenes y videos."
          buttonText="Explora Helebba Academy"
          buttonLink="#"
        />
        <Card
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-check"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>}
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

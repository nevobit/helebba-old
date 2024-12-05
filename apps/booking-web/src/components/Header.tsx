import styles from '@/styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <p className={styles.title}>
          Desarrollado por <strong>Helebba</strong>
        </p>
      </div>
    </header>
  );
};

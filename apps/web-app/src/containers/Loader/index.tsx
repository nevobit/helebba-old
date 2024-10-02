import styles from './LineScaleLoader.module.css'; // Importa los estilos CSS

const LineScaleLoader = () => {
  return (
    <div className={styles.line_scale_loader_container}>
      <div className={styles.line_scale_loader}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LineScaleLoader;

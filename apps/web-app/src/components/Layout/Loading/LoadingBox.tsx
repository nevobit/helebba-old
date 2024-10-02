import LineScaleLoader from '@/containers/Loader'
import styles from  './Loading.module.css'

export const LoadingBox = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
        <p>Cargando...</p>
        <LineScaleLoader />
    </div>
  )
}

export default LoadingBox

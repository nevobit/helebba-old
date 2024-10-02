import styles from './ConfirmDelete.module.css'

const Success = ({ confirm }: { confirm: boolean }) => {


  return (
    <div className={!confirm ? styles.content : styles.content_show} >

    <div className={styles.container} >
        <h4>Aviso</h4>
        <p>Información guardada correctamente</p>
    </div>
  </div>


  )
}

export default Success
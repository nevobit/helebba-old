import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h3>Oh no!</h3>
      <p className={styles.copy} >Esta página no existe</p>
      {/* <span>Report this page</span> */}
      
      <Link to="/">Volver</Link>
      <div className={styles.buttons}>
        <Link to='/'>Boards</Link>
        <Link to='/'>Ventas</Link>
        <Link to='/expenses'>Gastos</Link>
        <Link to='/contacts'>Contactos</Link>
      </div>
    </div>
  )
}

export default NotFound

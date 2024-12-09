import React from 'react'
import styles from './BookingModal.module.css';

const Empty = () => {
    return (
        <div className={styles.emptyContainer} >
            <img src='/calendare.svg' />
            <h2>La página de reservas está deshabilitada</h2>
            <p>Esta página de reservas ya no está disponible o el enlace podría estar roto.</p>
            <p>Vuelve a intentarlo más tarde o ponte en contacto con el proveedor de servicios.</p>
        </div>
    )
}

export default Empty
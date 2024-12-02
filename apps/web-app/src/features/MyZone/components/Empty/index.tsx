import { Button } from '@helebba/design-system/web';
import styles from './Empty.module.css';

const Empty = () => {
    return (
        <div className={styles.container} >
            <div className={styles.box} >
                <h2>Descubre tu zona de equipo</h2>
                <p>Crea tu perfil de empleado para descubrir tu zona y poder gestionar vacaciones, control horario, contratos, empleados y todo lo que necesitas para tu equipo</p>
                <div className={styles.images}>
                    <img src="/tables_timetracking.png" />
                    <img src="/tables_teamzone.png" />
                    <img src="/tables_absences.png" />
                </div>
                <Button variant='primary'>Crea tu perfil de empleado</Button>
            </div>
        </div>
    )
}

export default Empty
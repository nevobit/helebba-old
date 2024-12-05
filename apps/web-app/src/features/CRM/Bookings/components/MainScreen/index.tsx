import { DivisaFormater } from '@/utilities';
import styles from './Main.module.css';
import { LinkButton } from '@helebba/design-system/web';
import Bookimage from './Bookimage';
import ActivityImage from './ActivityImage';

const MainScreen = () => {
    return (
        <div>
            <div className={styles.data} >
                <div>
                    <p>Reservas hoy</p>
                    <h2>0</h2>
                </div>
                <div>
                    <p>Ventas de hoy</p>
                    <h2>{DivisaFormater({ value: 0 })}</h2>
                </div>
                <div>
                    <p>Reservas del último mes</p>
                    <h2>0</h2>
                </div>
                <div>
                    <p>Ventas del último mes</p>
                    <h2>{DivisaFormater({ value: 0 })}</h2>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.nextBookings} >
                    <div className={styles.header} >
                        <h3>Próximas reservas</h3>
                        <LinkButton variant='plain'>Ver todas</LinkButton>
                    </div>
                    <div className={styles.content} >
                        <div className={styles.empty} >

                            <Bookimage />
                            <p>Tus próximas citas se mostrarán aquí</p>
                        </div>

                    </div>
                </div>
                <div className={styles.activity} >
                    <div className={styles.header} >
                        <h3>Actividad reciente</h3>
                    </div>
                    <div className={styles.content} >
                        <div className={styles.empty} >

                            <ActivityImage />
                            <p>Aquí verás las últimas reservas creadas por tus clientes.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen
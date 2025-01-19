import { LineScaleLoader } from '@helebba/design-system/web';
import { useEmployeeMe } from '../../hooks';
import styles from './Summary.module.css'
import CircleCounter from '../../components/CircleCounter';

const Summary = () => {
    const { isLoading } = useEmployeeMe();

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <div className={styles.box} >
                <div className={styles.header}>
                    <h2>Ausencias</h2>
                </div>

                <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.absences}`} >
                        <h3>Próximas ausencias</h3>
                        <div>
                            <img src="/absences.png" />
                            <div>
                                <h4>Planifica tus próximas ausencias</h4>
                                <p>Haz click en 'Solicitar días libres'</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.holidays}`} >
                        <h3>Próximas vacaciones</h3>
                        <div>
                            <img src="/holidays.svg" />
                            <div>
                                <h4>No hay festivos futuros</h4>
                                <p>Estos son los festivos de tu centro de trabajo</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card} >
                        <h3 className={styles.centerTitle} >Días disponibles</h3>
                        <CircleCounter count={0} />

                    </div>
                    <div className={styles.card} >
                        <h3 className={styles.centerTitle} >Días usados</h3>
                        <CircleCounter count={0} />
                    </div>
                </div>
            </div>

            <div className={styles.column} >
                <div className={styles.box} >
                    <div className={styles.header}>
                        <h2>Nóminas</h2>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.header}>
                        <h2>Control horario</h2>
                    </div>

                    <div className={styles.summary} >
                        <div>
                            <img src="/trackers.svg" />
                            <div>
                                <h3>¡Tu primera nómina aún no está lista!</h3>
                                <p>Aquí podrás ver tus últimas nóminas.</p>
                            </div>
                        </div>
                        <div className={styles.card} >
                            <h3 className={styles.centerTitle} >Total trabajado</h3>
                            <CircleCounter count={0} />
                        </div>
                        <div className={styles.card} >
                            <h3 className={styles.centerTitle} >Promedio/dia</h3>
                            <CircleCounter count={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
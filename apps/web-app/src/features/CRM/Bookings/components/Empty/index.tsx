import Image from "./image"
import styles from './Empty.module.css';
import { Button } from "@helebba/design-system/web";

export const Empty = () => {
    return (
        <div className={styles.container}>
            <Image />
            <div>
                <h2>Te damos la bienvenida a Reservas</h2>
                <p>Crea un perfil de negocio, asigna servicios y ofrece a tus clientes un calendario online para realizar reservas fácilmente.</p>
                <ul>
                    <li>Programación y planificación de citas eficiente.</li>
                    <li>Administra múltiples ubicaciones y espacios de trabajo.</li>
                    <li>Página pública de reservas para tus clientes.</li>
                </ul>
                <Button variant="primary" >Configura tu página ahora</Button>
            </div>

        </div>
    )
}

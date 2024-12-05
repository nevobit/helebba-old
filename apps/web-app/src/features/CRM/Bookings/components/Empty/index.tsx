import Image from "./image"
import styles from './Empty.module.css';
import { Button } from "@helebba/design-system/web";
import { Check } from "lucide-react";

export const Empty = () => {
    return (
        <div className={styles.container}>
            <Image />
            <div>
                <h2>Te damos la bienvenida a Reservas</h2>
                <p>Crea un perfil de negocio, asigna servicios y ofrece a tus clientes un calendario online para realizar reservas fácilmente.</p>
                <ul>
                    <li><Check size={16} color="rgb(54, 178, 116)" /> Programación y planificación de citas eficiente.</li>
                    <li><Check size={16} color="rgb(54, 178, 116)" /> Administra múltiples ubicaciones y espacios de trabajo.</li>
                    <li><Check size={16} color="rgb(54, 178, 116)" /> Página pública de reservas para tus clientes.</li>
                </ul>
                <Button variant="primary" >Configura tu página ahora</Button>
            </div>

        </div>
    )
}

import React from 'react';
import styles from './HelebbaResults.module.css'; // Importamos los estilos CSS

interface HelebbaResultProps {
    numero: string;
    texto: string;
}

function HelebbaResult({ numero, texto }: HelebbaResultProps) {
    return (
        <div className={styles.testimonio}>
            <div className={styles.numero}>{numero}</div>
            <div className={styles.texto}>{texto}</div>
        </div>
    );
}

function HelebbaResults() {
    return (
        <div className={styles.container}>
            <h2>Más de 25.000 autónomos ya facturan con Helebba</h2>
            <div className={styles.testimoniosContainer}>
            <HelebbaResult
                numero="40h"
                texto="Automatizan 40 horas de trabajo al mes"
            />
            <HelebbaResult
                numero="+160"
                texto="Procesan facturas 160 veces más rápido"
            />
            <HelebbaResult
                numero="80%"
                texto="Cobran un 80% más rápido que con procesos manuales"
            />
            </div>
        </div>
    );
}

export default HelebbaResults;

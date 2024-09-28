import React from 'react';
import styles from './Time.module.css';
import Card from './Card';

const Time = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Tu tiempo es importante</h2>
        <p className={styles.copy}>
          Ahorra horas de trabajo automatizando tareas cotidianas.
        </p>

        <div className={styles.list}>
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Organiza y clasifica todas las facturas y gastos que recibas de una fuente externa en un solo lugar."
            title="Inbox"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Conecta Helebba con tu banco de forma segura para conciliar tus facturas con tus movimientos bancarios."
            title="Conciliación bancaria"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Helebba puede rellenar algunos modelos de IVA e IRPF de forma automática y enviarlos telemáticamente."
            title="Presentación de modelos"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Elige entre más de 40 plantillas editables para personalizar las facturas, documentos y emails que envía tu empresa."
            title="Plantillas de documentos y emails"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Automatiza la generación de remesas a través de un archivo XML con tus facturas, descárgalas y súbelas al banco."
            title="Remesas"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className=" h-6 w-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            }
            description="Programa tus facturas recurrentes cuando quieras para que no tengas que enviar la misma factura una y otra vez."
            title="Facturas recurrentes"
          />
        </div>
      </div>
    </section>
  );
};

export default Time;

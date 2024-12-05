import React from 'react';
import Image from 'next/image'
import styles from './AutomaticBilling.module.css';
import FeaturesList from '../FeatureList';
const AutomaticBilling = () => {
   return (
     <section className={styles.section}>
       <div className={styles.content}>
         <h2 className={styles.title}>Facturas que casi se hacen solas</h2>
       <p className={styles.copy}>Crea en segundos facturas, presupuestos y proformas, completando campos automaticamente con tu información.</p>
       <div className={styles.list}>
          <FeaturesList
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
                    description="Tus clientes pueden pagar con transferencia bancaria, tarjeta de crédito/débito y PayPal."
                    title="Cobra de manera efectiva" />
          <FeaturesList
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
                    description="Holded es más intuitivo y no necesitas instalar nada. Además, puedes importar todas tus facturas usando plantillas de Excel."
                    title="Una alternativa a Excel, en la nube" />
          <FeaturesList
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
                    description="Más de 40 plantillas de factura, totalmente editables, para potenciar tu imagen corporativa."
           title="Facturas con diseño personalizado" />
          <FeaturesList
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
                    description="Sigue el flujo de efectivo gracias a las funciones de seguimiento de facturas y recordatorios de pago."
                    title="Controla el estado de tus facturas" />
          <FeaturesList
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
                    description="Cuando tengas que presentar tus modelos de impuestos, como el 130 o el 303, el único trabajo será dar el visto bueno."
                    title="Modelos de impuestos siempre a punto" />
      </div>
      </div>
      <div>
          <Image src="/images/home/home-1.svg" width={500} height={500} alt='Helebba se ocupa de las facturas' />
       </div>
    </section>
  );
}

export default AutomaticBilling;
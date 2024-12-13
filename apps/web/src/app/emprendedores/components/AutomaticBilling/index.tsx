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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                    }
                    description="Tus clientes pueden pagar con transferencia bancaria, tarjeta de crédito/débito y PayPal."
                    title="Cobra de manera efectiva" />
          <FeaturesList
              icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sliders-vertical"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
                    }
                    description="Holded es más intuitivo y no necesitas instalar nada. Además, puedes importar todas tus facturas usando plantillas de Excel."
                    title="Una alternativa a Excel, en la nube" />
          <FeaturesList
              icon={
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tickets"><path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"/><path d="M6 10V8"/><path d="M6 14v1"/><path d="M6 19v2"/><rect x="2" y="8" width="20" height="13" rx="2"/></svg>
                    }
                    description="Más de 40 plantillas de factura, totalmente editables, para potenciar tu imagen corporativa."
           title="Facturas con diseño personalizado" />
          <FeaturesList
              icon={
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
                    }
                    description="Sigue el flujo de efectivo gracias a las funciones de seguimiento de facturas y recordatorios de pago."
                    title="Controla el estado de tus facturas" />
          <FeaturesList
              icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-receipt-text"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>
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
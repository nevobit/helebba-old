import React from 'react';
import Image from 'next/image';
import styles from './ClientRelations.module.css';
import FeaturesList from '../FeatureList';

const ClientRelations = () => {
   return (
     <section className={styles.section}>
       <div className={styles.image}>
          <Image src="/EmpresaSA.svg" width={400} height={400} alt="Helebba se ocupa de las facturas" />
       </div>
       <div className={styles.content}>
         <h2 className={styles.title}>El CRM para reforzar las <br/> relaciones con tus clientes</h2>
         <p className={styles.copy}>Holded te ayuda a entender a cada cliente y a conocer sus necesidades para realizar una propuesta rápida.</p>
         <div className={styles.list}>
           <FeaturesList
             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-check"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>}
             description="Comparte con tu cliente toda la información (presupuestos, facturas, etc.) desde un solo lugar dentro de Holded, donde podrán ver facturas y aprobar presupuestos hechos por ti."
             title="Portal del cliente" />
           <FeaturesList
             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>}
             description="Dale un toque personal a tus ventas. Crea un contacto por cada cliente y agrega los detalles que necesites."
             title="Panel de contacto detallado" />
           <FeaturesList
             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>}
             description="Sigue el ciclo de tus ventas mostrando cada una de las etapas hasta el cierre de un contrato."
             title="Crea embudos personalizados" />
         </div>
       </div>
     </section>
   );
}

export default ClientRelations;

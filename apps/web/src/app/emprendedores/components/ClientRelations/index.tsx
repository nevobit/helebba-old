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
             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>}
             description="Comparte con tu cliente toda la información (presupuestos, facturas, etc.) desde un solo lugar dentro de Holded, donde podrán ver facturas y aprobar presupuestos hechos por ti."
             title="Portal del cliente" />
           <FeaturesList
             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>}
             description="Dale un toque personal a tus ventas. Crea un contacto por cada cliente y agrega los detalles que necesites."
             title="Panel de contacto detallado" />
           <FeaturesList
             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>}
             description="Sigue el ciclo de tus ventas mostrando cada una de las etapas hasta el cierre de un contrato."
             title="Crea embudos personalizados" />
         </div>
       </div>
     </section>
   );
}

export default ClientRelations;

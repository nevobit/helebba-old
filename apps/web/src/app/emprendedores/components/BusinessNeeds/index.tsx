import React from 'react';
import Image from 'next/image'
import styles from './BusinessNeeds.module.css';
import FeaturesList from '../FeatureList';
const BusinessNeeds = () => {
   return (
     <section className={styles.section}>
       <div className={styles.content}>
         <h2 className={styles.title}>Cubre todas las necesidades de tu negocio</h2>
       <p className={styles.copy}>Holded automatiza tareas y agiliza todos tus procesos.</p>
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
                    description="Monitoriza la evolución de tu inventario en tiempo real y controla tus ciclos de venta."
                    title="Conecta tu inventario" />
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
                    description="Dale acceso a tu gestor y colaborad en tiempo real, compartiendo tus documentos en un mismo lugar y sin necesidad de emails ni llamadas."
                    title="Trabaja con tu asesoría en Holded" />
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
                    description="Planifica y gestiona tus proyectos de principio a fin, con un control profesional."
                    title="Gestiona proyectos" />
      </div>
       </div>
       <div className={styles.image}>
          <Image src="/BusinessNeeds.svg" width={400} height={400} alt='Helebba se ocupa de las facturas' />
       </div>
   
    </section>
  );
}

export default BusinessNeeds;
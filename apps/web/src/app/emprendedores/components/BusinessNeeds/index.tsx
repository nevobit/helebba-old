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
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-archive"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
                    }
                    description="Monitoriza la evolución de tu inventario en tiempo real y controla tus ciclos de venta."
                    title="Conecta tu inventario" />
          <FeaturesList
              icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                    }
                    description="Dale acceso a tu gestor y colaborad en tiempo real, compartiendo tus documentos en un mismo lugar y sin necesidad de emails ni llamadas."
                    title="Trabaja con tu asesoría en Holded" />
          <FeaturesList
              icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-range"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/></svg>
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
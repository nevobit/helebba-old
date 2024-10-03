import styles from './TrialExpired.module.css'
import Button from '@/components/Shared/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Modal } from '@/containers'
import Plans from './Plans'
// import Plans from '@/containers/Plans'

const TrialExpired = () => {

  return (
    <Modal>

    <div className={styles.overlay}>
        <div className={styles.container}>
            <div className={styles.period}>
                <img src="/extend-trial.png" alt="" />
                <h2>Tu periodo de prueba ha finalizado</h2>
                <p>Elige hoy tu plan y descubre como mejorar tu negocio con Helebba</p>
                <div>
                    <ul>
                        <li> <CheckCircle size={18} color='#36b274' /> Facturacióny contabilidad</li>
                        <li> <CheckCircle size={18} color='#36b274' /> Contactos y CRM</li>
                        <li> <CheckCircle size={18} color='#36b274' /> Gestion de inventario</li>
                    </ul>
                    <ul>
                        <li> <CheckCircle size={18} color='#36b274' /> Cobro online de tus facturas</li>
                        <li> <CheckCircle size={18} color='#36b274' /> Sincronizaciónde bancos</li>
                        <li> <CheckCircle size={18} color='#36b274' /> Seguridad en la nube de primera clase</li>
                    </ul>
                </div>
                <Modal.Open opens="plans">
                <Button>Elige tu plan <ArrowRight size={20} color='#fff' /></Button>

            </Modal.Open>
            </div>
            <div className={styles.extend}>
                <h2>Todavia no te has decidido?</h2>
                <p> <span>Amplia tu prueba</span> - Te regalamos 7 dias mas para que sigas explorando Helebba</p>
                <p> <span>Habla con nosotros</span> - Dejanos resolver tus dudas, mostrandote como Helebba se adapta a tu negocio. </p>
            </div>
        </div>

           
            <Modal.Window  style={{
                width: "100%",
                height: "100%"
            }} title={"Nuevo Producto"} name='plans'>
                <Plans />
            </Modal.Window>
      
        {/* { openPlan && <Plans /> } */}
    </div>
    </Modal>

  )
}

export default TrialExpired
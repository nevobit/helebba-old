import { Empty, ScreenHeader } from '@/containers';
import { useStores } from '@/hooks';
import LineScaleLoader from '@/containers/Loader';
import styles from './Pos.module.css';
import FormPos from './FormPos';
import { ChevronRight, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PosTable from './Table/PosTable';
import EmptyImage from './EmptyImage';
import { Store } from '@helebba/entities';
const title = 'Punto de venta';

const Pos = () => {
    const { isLoading, stores } = useStores();

  if (isLoading) return <LineScaleLoader />;

  return (
    <>
      <ScreenHeader  title={title}>
        <FormPos text={
            <><Plus size={18} style={{
                marginRight: 10
            }} />  Crear tienda</>
        } />
      </ScreenHeader>
      {stores.items.length > 0 ? (
         <div className={styles.container} >
         <div className={styles.left} >
             <div className={styles.panel}>
                 <div>
                     <h3>Panel de control de inventario</h3>
                     <p>Accede a una herramienta imprescindible para crear productos, editar sus propiedades, controlar su stock en múltiples almacenes y mucho más.</p>
                 </div>
                 <Link  className={styles.btn} to="" >Ir a Inventario</Link>
             </div>
             <div className={styles.more}>
                 <div className={styles.header_more}>
                     <h3>Productos más vendidos</h3>
                 </div>
                 <PosTable />
             </div>
         </div>
         <div>
             <div className={styles.stores}>
                {stores?.items.map((store: Store) => (

                 <Link to={`/pos/store/${store.id}`} className={styles.store_card}>
                     <div className={styles.info}>
                         <div>
                             <span>
                                 <ShoppingBag color='var(--main-color)' />
                             </span>
                             <div>
                                 <h4>{store.name}</h4>
                                 <p>{store?.address?.street}</p>
                             </div>
                         </div>
                         <Link to="" ><ChevronRight/></Link>
                     </div>
                     <div className={styles.registers} >
                         <h4>Registros:</h4>
                         <p><span>0</span> Abrió</p>
                         <p><span>1</span> Cerrado</p>
                     </div>
                 </Link>
                ))}

             </div>
             <div className={styles.download}></div>
         </div>
     </div>
      ): (
        <div className={styles.container_empty} >
        <Empty title="Añade tus tiendas para gestionarlas en la app POS" copy={'Aquí encontrará información general de todas sus tiendas, administrarlas y agregar registros.'} image={<EmptyImage />}  />
        </div>
      )}
       
    </>
  );
};

export default Pos;

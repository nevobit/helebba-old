import ScreenHeader from '@/containers/ScreenHeader';
import styles from './Warehouses.module.css';
import CreateWarehouse from './Create';
import { useWarehouses } from '@/hooks';
import LineScaleLoader from '@/containers/Loader';
import { Warehouse } from '@helebba/entities';
import { Link } from 'react-router-dom';

const Warehouses = () => {
  const { isLoading, warehouses } = useWarehouses();

  if (isLoading) return <LineScaleLoader />;

  return (
    <>
      <ScreenHeader
        defaultOptions
        title="Almácen"
        letter="es"
      >
        <CreateWarehouse text={<>Nuevo Almácen</>} />
      </ScreenHeader>

      <div className={styles.container}>
        {warehouses.map((warehouse: Warehouse) => (
          <Link to={`/inventory/warehouses/${warehouse.id}`} className={styles.warehouse} key={warehouse.id}>
            <span className={styles.icon}>
              <i className={warehouse.icon}></i>
            </span>
            <h2>
              <span
                style={{
                  backgroundColor: warehouse.color,
                }}></span>
              {warehouse.name}
            </h2>
            {warehouse.isPrincipal && (
              <span className={styles.default}>Almácen principal</span>
            )}
          </Link>
        ))}
      </div>

      {/* {open && <CreateWarehouse setOpen={setOpen} />} */}
    </>
  );
};

export default Warehouses;

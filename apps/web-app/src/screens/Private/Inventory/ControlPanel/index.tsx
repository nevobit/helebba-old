import Button from '@/components/Shared/Button';
import styles from './ControlPanel.module.css';
import { ExternalLink, Settings, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/constant-definitions';
import { useProductsSummary, useWarehousesOverview } from '@/hooks';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { Warehouse } from '@helebba/entities';
import LineScaleLoader from '@/containers/Loader';
import { useAccountStore } from '@/state-manager';

const ControlPanel = () => {
  const { isLoading, summary } = useProductsSummary();
  const { isLoading: isLoadingOverview, overview } = useWarehousesOverview();

  const account = useAccountStore((state) => state.account);

  const isWorking = isLoading || isLoadingOverview;

  const navigate = useNavigate();

  if(isWorking){
    return <LineScaleLoader />
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Panel de control</h2>
        <div>
          <Button variant="third">
            {' '}
            <Settings size={14} />
          </Button>
          <Button variant="third" onClick={() => navigate(PrivateRoutes.REPORTING_INVENTORY)}>
            <TrendingUp size={16} /> Análisis Inventario
          </Button>
          <Button variant="third">
            <ExternalLink size={16} />
            <Link className={styles.btn_new} to={PrivateRoutes.CATALOG}>
              Ver catálogo
            </Link>
          </Button>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.box_header}>
          <h3>Productos</h3>
          <Link to={PrivateRoutes.PRODUCTS}>Ir a productos</Link>
        </div>

        <div className={styles.boxes}>
          <div>
            <h4>Unidades de producto</h4>
            <p>{summary?.units || 0}</p>
          </div>

          <div>
            <h4>Valor del stock</h4>
            <p>{DivisaFormater({ value: summary?.stockValue || 0, country: account?.country })}</p>
          </div>
          <div>
            <h4>Precio de compra del stock</h4>
            <p>{DivisaFormater({ value: summary?.totalCost || 0, country: account?.country })}</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.box}>
        <div className={styles.box_header}>
          <h3>Pedidos</h3>
          <Link to="/">Ir a pedidos</Link>
        </div>
      </div> */}
      {/* <div className={styles.box}>
        <div className={styles.box_header}>
          <h3>Operaciones</h3>
          <Link to={PrivateRoutes.PRODUCTS}>Ir a productos</Link>
        </div>
      </div> */}
      <div className={styles.box_info}>
        <div className={styles.box_header_info}>
          <h3>Almacenes</h3>
          <Link to="/inventory/warehouses">Gestionar</Link>
        </div>
        <ul className={styles.warehouses}>
          {overview?.map((over: { warehouse: Warehouse, units: number }) => (
            <li key={over.warehouse.id} className={styles.warehouse} >{over.warehouse.name} <span>{over.units} unidades</span></li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.box}>
        <div className={styles.box_header}>
          <h3>Propiedades del producto</h3>
          <Link to="/">Ir a ajustes</Link>
        </div>
      </div> */}
    </div>
  );
};

export default ControlPanel;

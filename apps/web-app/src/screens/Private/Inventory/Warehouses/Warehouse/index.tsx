import { PrivateRoutes } from '@/constant-definitions';
import LineScaleLoader from '@/containers/Loader';
import { useDeleteWarehouse, useWarehouse } from '@/hooks';
import { ChevronLeft, Key } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Warehouse.module.css';
import { Button, ConfirmDelete } from '@/components';
import { Modal } from '@/containers';
import WarehouseForm from '../Create/WarehouseForm';

const Warehouse = () => {
  const { isPending, warehouse } = useWarehouse();
  const { isDeleting, deleteWarehouse } = useDeleteWarehouse();

  const navigate = useNavigate();
  if (isPending) return <LineScaleLoader />;

  return (
    <Modal>
      <div className={styles.header}>
        <div>
          <Link to={PrivateRoutes.WAREHOUSES}>
            <ChevronLeft />
          </Link>
          <h3>{warehouse.name}</h3>
        </div>
        <div>
          {!warehouse.isPrincipal && (
            <Modal.Open opens="delete" >
              <Button variant="danger">Eliminar</Button>
            </Modal.Open>

          )}
          <Modal.Open opens="edit" >
            <Button variant="third">Editar</Button>
          </Modal.Open>
        </div>
      </div>
      <div className={styles.tabs}>
        <button>Resumen</button>
      </div>

      <div className={styles.content}>
        <ul>
          <li>Información</li>
          <li>
            <span>Dirección</span> {warehouse.address.address}
          </li>
          <li>
            <span>Ciudad</span> {warehouse.address.city}
          </li>
          <li>
            <span>País</span> {warehouse.address.country}
          </li>
          <li>
            <span>Correo electrónico</span> {warehouse.email}
          </li>
          <li>
            <span>Teléfono</span> {warehouse.phone}
          </li>
          <li>
            <Key /> {warehouse.id.split('-')[0]}
          </li>
        </ul>

        <div className={styles.info}>
          <div>
            <h3>Total productos</h3>
            <p>{warehouse.productsCount}</p>
          </div>

          <div>
            <h3>Total unidades</h3>
            <p>{warehouse.totalStock}</p>
          </div>
        </div>
      </div>
      <Modal.Window 
          width={850} styleHeader={{
            padding: 20,
            paddingBottom: 0
        }} style={{
            padding: 0,
        }}
          title="Editar Almacén" name="edit">
            <WarehouseForm warehouseToEdit={warehouse} />
          </Modal.Window>
      <ConfirmDelete isLoading={isDeleting} name='delete' handler={() => deleteWarehouse(warehouse.id, { onSuccess(){
          navigate("/inventory/warehouses")
      } })} />

    </Modal>
  );
};

export default Warehouse;

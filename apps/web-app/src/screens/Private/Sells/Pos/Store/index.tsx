import LineScaleLoader from '@/containers/Loader';
import { useDeleteStore, useStore } from '@/hooks';
import styles from './Store.module.css';
import { ConfirmDelete, Field, Menus } from '@/components';
import { Printer } from 'lucide-react';
import { Modal } from '@/containers';
import { useNavigate, useParams } from 'react-router-dom';

const Store = () => {
const { id } = useParams();
  const { isLoading, store } = useStore();
  const { isDeleting, deleteStore } = useDeleteStore();
    const navigate = useNavigate();

  if (isLoading) return <LineScaleLoader />;
  return (
    <Menus>
      <Modal>
        <div className={styles.container}>
          <div className={styles.information}>
            <div className={styles.header}>
              <h2>Información</h2>
              <Menus.Menu>
                        <Menus.Toggle id={id || "store"} />

                        <Menus.List id={id || "store"}>
                          <Modal.Open opens="delete">
                            <Menus.Button>Eliminar</Menus.Button>
                          </Modal.Open>
                        </Menus.List>
                      </Menus.Menu>
             
            </div>

            <Field label="Depósito/Almacén">
              <p>{store.name}</p>
            </Field>
            <Field label="Dirección">
              <p>{store.address?.street}</p>
            </Field>
          </div>
          <div>
            <div className={styles.boxes_container}>
              <h2>Cajas registradoras</h2>

              <div className={styles.boxes}>
                {store.registers?.map((register) => (
                  <div className={styles.card}>
                    <div>
                      <span>
                        <Printer size={18} />
                      </span>
                      <div>
                        <p>{register.open ? 'Abierto' : 'Cerrado'}</p>
                      </div>

                      
                      {/* <Button variant="third"><MoreVertical size={18} /></Button> */}
                    </div>
                    <h4>{register.name}</h4>
                    <p>{register.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sessions}></div>
          </div>
        </div>

        <ConfirmDelete
          isLoading={isDeleting}
          name="delete"
          handler={() => deleteStore(id!, { onSuccess(){
            navigate("/pos")
          } })}
        />
      </Modal>
    </Menus>
  );
};

export default Store;

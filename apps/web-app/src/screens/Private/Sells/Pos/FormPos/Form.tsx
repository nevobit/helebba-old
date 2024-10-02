import { Button, Field, Input } from '@/components';
import {
  useCreateStore,
  useEditProduct,
  useForm,
  useWarehouses,
} from '@/hooks';
import styles from './Create.module.css';
import { FormEvent } from 'react';
import { useAccountStore } from '@/state-manager';
import {  Store, Warehouse } from '@helebba/entities';
import { ShoppingBag } from 'lucide-react';

interface Props {
  productToEdit?: Partial<Store>;
  onCloseModal?: () => void;
}

const Form = ({ productToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createStore } = useCreateStore();
  const { isEditing, editProduct } = useEditProduct();
  const { warehouses } = useWarehouses();
  const isWorking = isCreating || isEditing;
  
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  const {
    formState: store,
    handleChange,
  } = useForm(isEditSession ? editValues : {
  });


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditSession) {
      editProduct(
        {
          id: productToEdit.id,
          ...store,
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    } else {
      createStore(
        {
          account: account.id!,
          store: {
            ...store,
          },
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    }
  };


  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.main}>

          <p>Crea el perfil de tu tienda y selecciona un almacén para controlar el stock de tus productos.</p>

        <div className={styles.name} >
          <span>
            <ShoppingBag color='var(--main-color)' />
          </span>
          <Field label='Nombre de la tienda' >
            <Input name="name" value={store.name} onChange={handleChange} placeholder='Escribe el nombre de tu tienda' />
          </Field>
        </div>
        <Field label='Dirección de la tienda' >
            <Input name="address.street" value={store?.address?.street} onChange={handleChange} placeholder='Escribe el nombre de tu tienda' />
          </Field>
          <Field label='Almacén' >
            <select name="warehouse" id="">
              <option value="">Seleccionar almacén</option>
              {warehouses?.map((warehouse: Warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
              ))}
            </select>
          </Field>
          <Field label='Número de teléfono (opcional)' tip='Este es el número que aparecerá en los recibos de tu tienda.' >
            <Input type='number' placeholder='Escribe el nombre de tu tienda' />
          </Field>
      </div>

      <div className={styles.footer}>
        <Button onClick={() => onCloseModal?.()} type="button" variant="third">
          Descartar
        </Button>
        <Button loading={isWorking} type="submit">
          Crear
        </Button>
      </div>
    </form>
  );
};

export default Form;

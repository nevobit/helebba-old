import Field from '@/components/Shared/Field';
import styles from './Create.module.css';
import Input from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import { useState } from 'react';
import { useCreateWarehouse, useEditWarehouse, useForm } from '@/hooks';
import { StatusType, UpdateWarehouseDto, Warehouse } from '@helebba/entities';
import { useAccountStore } from '@/state-manager';

interface Props {
  warehouseToEdit?: Partial<Warehouse>;
  onCloseModal?: () => void;
}

const WarehouseForm = ({ warehouseToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createWarehouse } = useCreateWarehouse();
  const { isEditing, editWarehouse } = useEditWarehouse(warehouseToEdit?.id|| "");


  const { id: editId, ...editValues } = warehouseToEdit;
  const isEditSession = Boolean(warehouseToEdit?.id);

  console.log(editId)
  const { formState: warehouse, handleChange, setFormState } = useForm<UpdateWarehouseDto>(isEditSession ? editValues : {
    name: '',
    address: {
      address: '',
      postalCode: 0,
      country: '',
      province: '',
      city: '',
      countryCode: ''
    },
    email: '',
    phone: '',
    mobile: '',
    color: '',
    isPrincipal: false,
    postalCode: '',
    icon: '',
    status: StatusType.ACTIVE
  });

  const isWorking = isEditing || isCreating;

  const [icon, setIcon] = useState( isEditSession ? warehouseToEdit?.icon : 'bx bx-home');
  const [openSelect, setOpenSelect] = useState(false);

  const submit = () => {
    if(isEditSession){
      editWarehouse(
       { account: account.id, ...warehouse, icon, id: warehouseToEdit.id }, {
        onSuccess(){
          onCloseModal?.();
        }
       }
      )
    }else{

    createWarehouse({
      account: account.id!,
      warehouse: { ...warehouse, icon },
    }, {
      onSuccess(){
        onCloseModal?.();
      }
    });
  }

  };

  return (
    <>
  
          <div className={styles.main}>
            <div className={styles.grid}>
              <div>
                <Field label="Nombre">
                  <Input name="name" value={warehouse.name} onChange={handleChange} />
                </Field>
                <Field label="Correo">
                  <Input name="email" value={warehouse.email} onChange={handleChange} />
                </Field>
                <div className={styles.col}>
                  <Field label="Telefono">
                    <Input name="phone" value={warehouse.phone} onChange={handleChange} />
                  </Field>
                  <Field label="Celular">
                    <Input name="mobile" value={warehouse.mobile} onChange={handleChange} />
                  </Field>
                </div>
                <div className={styles.col}>
                  <Field label="Icono">
                    <div
                      className={styles.select}
                      onClick={() => setOpenSelect(!openSelect)}>
                      <div className={styles.select_select}>
                        <i className={icon}></i>
                      </div>
                      <div
                        className={
                          openSelect
                            ? `${styles.open_select} ${styles.options} `
                            : styles.options
                        }>
                        <button onClick={() => setIcon('bx bx-home')}>
                          <i className="bx bx-home"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bx-box')}>
                          <i className="bx bx-box"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bxs-hand')}>
                          <i className="bx bxs-hand"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bx-bell')}>
                          <i className="bx bx-bell"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bx-book')}>
                          <i className="bx bx-book"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bx-camera')}>
                          <i className="bx bx-camera"></i>{' '}
                        </button>
                        <button onClick={() => setIcon('bx bx-building')}>
                          <i className="bx bx-building"></i>{' '}
                        </button>
                      </div>
                    </div>
                  </Field>
                  <Field label="Color">
                    <Input type="color" value={warehouse.color} name="color" onChange={handleChange} />
                  </Field>
                </div>
                <div className={styles.check}>
                  <input
                    type="checkbox"
                    checked={warehouse.isPrincipal}
                    onChange={({ target }) =>
                    setFormState((prev) => ({
                        ...prev,
                        ['isPrincipal']: target.checked,
                      }))
                    }
                  />{' '}
                  <label>Marcar como almáncen principal</label>
                </div>
              </div>
              <div>
                <Field label="Dirección">
                  <Input name="address.address" value={warehouse.address?.address} onChange={handleChange} />
                </Field>
                <div className={styles.col}>
                  <Field label="Departamento">
                    <Input name="address.province" value={warehouse.address?.province} onChange={handleChange} />
                  </Field>
                  <Field label="Codigo postal">
                    <Input name="address.postalCode" value={warehouse.address?.postalCode} onChange={handleChange} />
                  </Field>
                </div>
                <div className={styles.col}>
                  <Field label="Ciudad">
                    <Input name="address.city" value={warehouse.address?.city} onChange={handleChange} />
                  </Field>
                  <Field label="País">
                    <Input name="address.country" value={warehouse.address?.country} onChange={handleChange} />
                  </Field>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <Button onClick={() => onCloseModal?.()} type='button' variant="third">
              Descartar
            </Button>
            <Button loading={isWorking} onClick={submit}>
              Guardar
            </Button>
          </div>
    </>
  );
};

export default WarehouseForm;

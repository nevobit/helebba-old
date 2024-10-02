import { useState } from 'react';
import styles from './Rates.module.css';
import { useCreateRate, useForm, useOutsideClick, useRates } from '@/hooks';
import { Button, Field, Input, Subtitle } from '@/components';
import { X } from 'lucide-react';
import { Product, ProductRate, Rate } from '@helebba/entities';
import Textarea from '@/components/Shared/Textarea';
import { useAccountStore } from '@/state-manager';

const Rates = ({ set, product } : { set: React.Dispatch<React.SetStateAction<Partial<Product>>>, product: Partial<Product> }) => {
  const close = () => setOpenName('');
  const ref = useOutsideClick<HTMLDivElement>({
    handler: close,
    listenCapturing: true,
  });
  const account = useAccountStore((state) => state.account);

  const [screen, setScreen] = useState(false);
  const [openName, setOpenName] = useState('');

  const { rates } = useRates();
  const { isCreating, createRate } = useCreateRate();

  const { formState, handleChange } = useForm({
    name: "",
    description: ""
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, rate: ProductRate) => {
    const { checked } = event.target;
    set(prevProduct => {
      if (!prevProduct) return prevProduct; // Verificación de nulidad
      const updatedRates = checked
        ? [...(prevProduct.rates || []), rate] // Verificación de nulidad
        : (prevProduct.rates || []).filter(r => r.id !== rate.id); // Verificación de nulidad
      return {
        ...prevProduct,
        rates: updatedRates // Asegurar que el tipo sea Rate[]
      };
    });
  };

  

  return (
    <>
      <button
        className={styles.variant_btn}
        type="button"
        onClick={() => setOpenName('modal')}>
        Administrar tarifas
      </button>
      {openName == 'modal' && (
        <div className={styles.overlay} ref={ref}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <Subtitle
                text={
                  screen
                    ? 'Nuevo precio de venta'
                    : 'Administrar tarifas de venta'
                }
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Button onClick={close} variant="third">
                  <X size={15} />
                </Button>
              </div>
            </div>

            <div className={styles.main}>
              {screen ? (
                <div>
                  <Field
                    label="Nombre"
                    tip="Esta información ólo será visible en la Lista de precios.">
                    <Input name='name' onChange={handleChange} />
                  </Field>

                  <Field label="Descripción">
                    <Textarea name='description' onChange={handleChange} />
                  </Field>
                </div>
              ) : (
                <ul className={styles.list} >
                  {rates?.items.map((rate: Rate) => (
                    <li> <label htmlFor="rate"><input checked={product?.rates ? product?.rates?.some(r => r.id === rate.id) : false} onChange={(event) => handleCheckboxChange(event, { id: rate.id, name:rate.name })} name='rate' id='rate' type='checkbox' />  {rate.name}</label></li>
                  ))}
                </ul>
              )}

              {!screen && (
                <button
                  className={styles.variant_btn}
                  type="button"
                  onClick={() => setScreen(!screen)}>
                  Crear nueva tarifa
                </button>
              )}
            </div>
            <div className={styles.footer}>
              <Button
                onClick={screen ? () => setScreen(false) : () => close()}
                type="button"
                variant="third">
                {screen ? 'Regresar' : 'Descartar'}
              </Button>
              <Button  onClick={screen ? () => createRate({ account: account.id!, rate: formState }, { onSuccess(){ setScreen(false) } }) : () => close()} loading={isCreating} type="button">
                {screen ? 'Guardar' : 'Aceptar'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rates;

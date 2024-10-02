import { Button, Field, ImageInput, Input } from '@/components';
import { useForm, useUploadImage } from '@/hooks';
import styles from './Create.module.css';
import { FormEvent, useState } from 'react';
import { useAccountStore } from '@/state-manager';
import { Category } from '@helebba/entities';
import { useCreateCategory, useEditCategory } from '../hooks';
import OptionsInput from '@/components/Shared/OptionsInput';

interface Props {
  categoryToEdit?: Partial<Category>;
  onCloseModal?: () => void;
}

const EmployeeFrom = ({ categoryToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { url, urls, isLoading, uploadImage } = useUploadImage();
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();
  const [options, setOptions] = useState<string[]>([]);
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const {
    formState: category,
    handleChange,
    setFormState,
  } = useForm(isEditSession ? editValues : {
    type: "options"
  });

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditSession) {
      editCategory(
        {
          id: categoryToEdit.id,
          ...category,
          options,
          image: url
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    } else {
      createCategory(
        {
          account: account.id!,
          category: { ...category, options, image: url },
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    }
  };

  const onSelectSuggestion = (name: string, opts: string[]) => {
    setFormState((prev) => ({ ...prev, name }));
    if(category.type == "options"){
      setOptions(opts);      
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Field label="Nombre">
          <Input
            disabled={isWorking}
            name="name"
            value={category.name}
            onChange={handleChange}
          />
        </Field>

        <div className={styles.type}>
          <label className={styles.radio}>
            <input
              type="radio"
              value="text"
              name="type"
              id="type"
              onChange={({ target }) =>
                setFormState((prev) => ({ ...prev, type: target.value }))
              }
            />
            Texto/Número
          </label>
          <label className={styles.radio}>
            <input
            defaultChecked
              type="radio"
              value="options"
              name="type"
              id="type"
              onChange={({ target }) =>
                setFormState((prev) => ({ ...prev, type: target.value }))
              }
            />
            Opciones
          </label>
        </div>

        {category.type == "options" && (

        <Field label="Opciones" tip="Presiona enter para guardar las opciones">
          <OptionsInput options={options} setOptions={setOptions} />
        </Field>
        )}

        <label className={styles.check}>
          <input
            type="checkbox"
            onChange={({ target }) =>
              setFormState((prev) => ({
                ...prev,
                showInCatalog: Boolean(target.value),
              }))
            }
          />
          Mostrar en el catálogo
        </label>

        <ImageInput isLoading={isLoading} uploadImage={uploadImage} urls={urls} multiImage={false} />

        <Field label="Sugerencias">
          <div className={styles.suggestion}>
            <button
              onClick={() =>
                onSelectSuggestion('Ropa', [
                  'camisetas',
                  'sudadetas con capucha',
                  'pantalones',
                ])
              }>
              {' '}
              <span className={styles.red}></span> Ropa{' '}
            </button>
            <button
              onClick={() =>
                onSelectSuggestion('Zapatos', [
                  'botas',
                  'sandalias',
                  'chancletas',
                ])
              }>
              {' '}
              <span className={styles.orange}></span> Zapatos{' '}
            </button>
            <button
              onClick={() =>
                onSelectSuggestion('Bebidas', ['soda', 'jugos', 'alcohol'])
              }>
              {' '}
              <span className={styles.green}></span> Bebidas{' '}
            </button>
            <button
              onClick={() =>
                onSelectSuggestion('Hardware', [
                  'computadora',
                  'tableta',
                  'teléfono',
                ])
              }>
              {' '}
              <span className={styles.blue}></span> Hardware{' '}
            </button>
          </div>
        </Field>
      </div>

      <div className={styles.footer}>
        <Button onClick={() => onCloseModal?.()} type="button" variant="third">
          Descartar
        </Button>
        <Button onClick={onSubmit} loading={isWorking} type="submit">
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default EmployeeFrom;

import { Button, Field, Input } from '@/components';
import {
  useContacts,
  useCreateProduct,
  useEditProduct,
  useForm,
  useHandleVariant,
  useWarehouses,
} from '@/hooks';
import styles from './Create.module.css';
import { FormEvent, useEffect, useState } from 'react';
import { useAccountStore } from '@/state-manager';
import { Category, Contact, Product, Warehouse } from '@helebba/entities';
import Textarea from '@/components/Shared/Textarea';
import { Plus, Trash } from 'lucide-react';
import ImageInput from '@/components/Shared/ImageInput';
import { useUploadImage } from '@/hooks';
import TagsInput from '@/components/Shared/TagsInput';
import Rates from './Rates';
import { DivisaFormater } from '@/utilities';
import CategorySelector from '../../Categories/components/CategorySelector';
import { useCategories } from '../../Categories/hooks';
import { ColorSelect } from './components';

interface Props {
  productToEdit?: Partial<Product>;
  onCloseModal?: () => void;
}

const ProductFrom = ({ productToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createProduct } = useCreateProduct();
  const { isEditing, editProduct } = useEditProduct();
  const { warehouses } = useWarehouses();
  const isWorking = isCreating || isEditing;
  const { isLoading, urls, uploadImage } = useUploadImage();
  const { categories } = useCategories();

  const [categoriesInput, setCategoriesInput] = useState<Category[]>([]);

  const { contacts } = useContacts();
  const [tags, setTags] = useState<string[]>([]);

  const { elements, removeElement, addElement, editElement, initialElements } =
    useHandleVariant();
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  const {
    formState: product,
    handleChange,
    setFormState,
  } = useForm(
    isEditSession
      ? editValues
      : {
          contactName: '',
        },
  );
  const [hasVariants, setHasVariants] = useState(product.kind == 'variants');

  const handleTagsChanged = (newTags: string[]) => {
    setTags(newTags);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditSession) {
      editProduct(
        {
          id: productToEdit.id,
          ...product,
          kind: hasVariants ? 'variants' : 'simple',
          variants: hasVariants ? elements : undefined,
          categories: categoriesInput,
          categoryId: categoriesInput[0]?.id
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    } else {
      createProduct(
        {
          account: account.id!,
          product: {
            ...product,
            tags,
            kind: hasVariants ? 'variants' : 'simple',
            variants: hasVariants ? elements : undefined,
            categories: categoriesInput.length > 0 ? categoriesInput : [],
            categoryId: categoriesInput.length > 0 ? categoriesInput[0]?.id : '',
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

  const removeImage = (image: string) => {
    const images = product?.images?.filter((img) => img !== image);
    setFormState((prev) => ({ ...prev, images: images }));
  };

  const editRate = (
    rateId: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prevProduct) => {
      if (!prevProduct) return prevProduct; 
      const updatedRates = prevProduct?.rates?.map((rate) => {
        if (rate.id === rateId) {
          return {
            ...rate,
            [name]: parseFloat(value), 
          };
        }
        return rate;
      });
      return {
        ...prevProduct,
        rates: updatedRates,
      };
    });
  };

  const changeSupplier = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value.length <= 0) {
      handleChange({
        ...event,
        target: { ...event.target, name: 'contactId', value: '' },
      });
      handleChange({
        ...event,
        target: { ...event.target, name: 'contactName', value: '' },
      });
      return;
    }

    const contact = JSON.parse(event.target.value) as Contact;

    handleChange({
      ...event,
      target: { ...event.target, name: 'contactId', value: contact.id },
    });
    handleChange({
      ...event,
      target: { ...event.target, name: 'contactName', value: contact.name },
    });
  };

  useEffect(() => {
    if (urls.length > 0 && !product.images?.includes(urls[urls.length - 1])) {
      const ima = product.images || [];
      setFormState((prev) => ({
        ...prev,
        images: [...ima, urls[urls.length - 1]],
      }));
    }
  }, [urls, product.images, setFormState]);

  useEffect(() => {
    if (isEditSession) {
      if (editValues.variants) {
        if (editValues.variants.length > 0) {
          const newVariants = editValues.variants.map((variant) => ({
            ...variant,
            id: variant.variantId,
          }));
          initialElements(newVariants!);
        }
      }
    }
  }, []);

  const onSelectCategory = (category: Category | null) => {
    if(category && !categoriesInput.includes(category)){
      setCategoriesInput((prev) => ([ ...prev, category ]));
    }
  }

  const onRemoveCategory = (id: string) => {
      setCategoriesInput((prev) => prev.filter((category) => category.id !== id ))
  }


  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.main}>
        <div>
          <div className={styles.box}>
            <h4>Información básica</h4>
            <p>
              Describe tu producto. Puedes utilizar esta información en los
              documentos que generes en Helebba
            </p>

            <Field label="Nombre del producto *">
              <Input
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Agrega un nombre a tu producto"
                required
              />
            </Field>

            <Field label="Descripción">
              <Textarea
                name="desc"
                value={product.desc}
                onChange={handleChange}
                placeholder="Especifica los atributos del producto"
              />
            </Field>
          </div>

          <div className={styles.box}>
            <h4>Ventas</h4>
            <p>
              Agregar subtotal e impuestos. El valor total se calculará
              automáticamente.
            </p>

            <div>
              <div className={styles.table_container}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Valor</th>
                      <th>Impuestos (%)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Precio principal</td>
                      <td>
                        <Input
                          type="text"
                          name="price"
                          value={product.price}
                          onChange={handleChange}
                        />{' '}
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="tax"
                          value={product.tax}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          readOnly
                          value={DivisaFormater({
                            value:
                              product.price || product.tax
                                ? Number(product.price) +
                                  Number(product.price) *
                                    (Number(product.tax || 0) / 100)
                                : 0,
                                country: account?.country
                          })}
                        />
                      </td>
                    </tr>
                    {product.rates?.map((rate) => (
                      <tr key={rate.id}>
                        <td>{rate.name}</td>
                        <td>
                          <Input
                            type="number"
                            name="price"
                            value={rate.price}
                            onChange={(event) => editRate(rate.id, event)}
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            name="tax"
                            value={rate.tax}
                            onChange={(event) => editRate(rate.id, event)}
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            readOnly
                            value={DivisaFormater({
                              value:
                                rate.price || rate.tax
                                  ? Number(rate.price) +
                                    Number(rate.price) *
                                      (Number(rate.tax || 0) / 100)
                                  : 0,
                                  country: account?.country
                            })}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Rates set={setFormState} product={product} />
            </div>
          </div>

          <div className={styles.box}>
            <h4>Compras</h4>
            <p>
              Establezca el costo promedio y el precio de compra que se
              utilizará en los informes y documentos de compra.
            </p>

            <Field label="Proveedor predeterminado">
              <select
                value={JSON.stringify({
                  name: product.contactName,
                  id: product.contactId,
                })}
                style={{
                  color:
                    product.contactName && product?.contactName?.length > 0
                      ? 'rgba(0,0,0,0.8)'
                      : 'rgba(0,0,0,0.5)',
                }}
                onChange={changeSupplier}
                id="">
                <option value="" style={{ color: 'rgba(0,0,0,0.5)' }}>
                  Busca y selecciona proveedores
                </option>
                {contacts?.items
                  ?.filter((contact: Contact) => contact.type == 'supplier')
                  .map((contact: Contact) => (
                    <option
                      value={JSON.stringify({
                        name: contact.name,
                        id: contact.id,
                      })}>
                      {contact.name}
                    </option>
                  ))}
              </select>
            </Field>

            <div>
              <div className={styles.table_container}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Valor</th>
                      <th>Impuestos (%)</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Precio de compra</td>
                      <td>
                        <Input
                          type="text"
                          name="purchasePrice"
                          value={product.purchasePrice}
                          onChange={handleChange}
                        />{' '}
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="purchaseTax"
                          value={product.purchaseTax}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                
<Input
                            type="text"
                            readOnly
                            value={DivisaFormater({
                              value:
                              product.purchasePrice || product.purchaseTax
                                  ? Number(product.purchasePrice) +
                                    Number(product.purchasePrice) *
                                      (Number(product.purchaseTax || 0) / 100)
                                  : 0,
                                  country: account?.country
                            })}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <h4>Seguimiento</h4>
            <p>
              Ingrese la información que identifica el producto y su origen para
              efectos de etiquetado.
            </p>

            <div className={styles.grid}>
              <Field label="SKU">
                <Input name="sku" value={product.sku} onChange={handleChange} />
              </Field>

              <Field label="Código de barras">
                <Input
                  name="barcode"
                  value={product.barcode}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Código de fábrica">
                <Input
                  name="factoryCode"
                  value={product.factoryCode}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Peso">
                <Input
                  name="weight"
                  value={product.weight}
                  onChange={handleChange}
                  placeholder="0"
                />
              </Field>
            </div>
          </div>

          <div className={styles.box}>
            <h4>Gestión de Stocks</h4>
            <p>
              Ingrese la información que identifica el producto y su origen para
              efectos de etiquetado.
            </p>

            <div className={styles.grid}>
              <Field label="Almacén predeterminado">
                <select
                  value={product.warehouseId}
                  name="warehouseId"
                  onChange={handleChange}>
                  <option value="Seleccionar almacén"></option>
                  {warehouses?.map((warehouse: Warehouse) => (
                    <option value={warehouse.id}>{warehouse.name}</option>
                  ))}
                </select>
              </Field>

              <Field label="Cantidad">
                <Input
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                />
              </Field>
            </div>
          </div>

          <div className={styles.box}>
            <h4>Opciones</h4>
            <p>
              Agregue variantes al producto o active lotes y números de serie.
              No se pueden incluir lotes o números de serie en un producto con
              variantes.
            </p>

            <div
              style={{
                marginTop: 20,
              }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: '1.3rem',
                }}
                htmlFor="variants">
                {' '}
                <input
                  style={{
                    width: 20,
                    height: 20,
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                  checked={hasVariants}
                  type="checkbox"
                  name="variants"
                  id="variants"
                  onChange={({ target }) => setHasVariants(target.checked)}
                />{' '}
                Agregar variantes{' '}
              </label>
            </div>
          </div>
          {hasVariants && (
            <div className={styles.box}>
              <h4>Variantes</h4>
              <p>Edita información de variantes, precios de venta y compra.</p>
              <div>
                <div className={styles.table_container}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Nombre</th>
                        <th>Color</th>
                        <th>Talla</th>
                        <th>Precio de venta</th>
                        <th>Precio de compra</th>
                        <th>Peso</th>
                        <th>Existencias</th>
                        <th>Código de barras</th>
                        <th>Código de fábrica</th>
                        <th className={styles.remove_button}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {elements.map((element) => (
                        <tr key={element.id}>
                          <td>
                            <Input
                              type="text"
                              value={element.sku}
                              onChange={({ target }) =>
                                editElement(element.id!, target.value, 'sku')
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.name}
                              onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'name',
                                )
                              }
                            />{' '}
                          </td>
                          <td>
                            <ColorSelect name='color' value={element.color} onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'color',
                                )} />
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.size}
                              onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'size',
                                )
                              }
                            />
                          </td>
                         
                          <td>
                            <Input
                              type="text"
                              value={element.price}
                              onChange={({ target }) =>
                                editElement(element.id!, target.value, 'price')
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.purchasePrice}
                              onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'purchasePrice',
                                )
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.weight}
                              onChange={({ target }) =>
                                editElement(element.id!, target.value, 'weight')
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.stock}
                              onChange={({ target }) =>
                                editElement(element.id!, target.value, 'stock')
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.barcode}
                              onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'barcode',
                                )
                              }
                            />{' '}
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={element.factoryCode}
                              onChange={({ target }) =>
                                editElement(
                                  element.id!,
                                  target.value,
                                  'factoryCode',
                                )
                              }
                            />
                          </td>
                          <td>
                            <Button
                              type="button"
                              variant="third"
                              onClick={() => removeElement(element.id!)}>
                              <Trash size={18} color="rgba(0,0,0,0.5)" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button
                  className={styles.variant_btn}
                  type="button"
                  onClick={addElement}>
                  <Plus /> Nueva variante
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className={styles.box}>
            <h4>Categorización</h4>
            <p>
              Incluye información adicional para completar tu ficha de producto.
            </p>

            <Field
              label="Marca">
              <Input
                          type="text"
                          name="brand"
                          value={product.brand}
                          onChange={handleChange}
                        />
            </Field>

            <Field
              label="Etiquetas"
              tip="Presiona la barra espaciadora para agregar una etiqueta">
              <TagsInput title="Etiquetas" onChanged={handleTagsChanged} />
            </Field>

            <Field label='Categorias' >
              <div>
                {categoriesInput.map((category) => (
                  <Field label={category.name} >
                    <div className={styles.option} >
                      {category.type !== "text" ? (

                      <select onChange={handleChange} name="categoryOption">
                      <option style={{
                        color: "rgba(0,0,0,0.5)"
                      }} value="">Seleccionar</option>
                        {category.options.map((option) => (
                          <option value={option}>{option}</option>
                        ))}
                      </select>
                      ) : (
                          <p style={{ fontSize: 13, color: "rgba(0,0,0.8)" }} >Categoria { category.name }</p>
                      )}
                        
                      <Button onClick={() => onRemoveCategory(category.id)} variant="third" type='button' > <Trash size={16} /> </Button>
                      </div>

                  </Field>
                ))}
              </div>
              <CategorySelector categories={categories?.items} onSelectCategory={onSelectCategory} />
            </Field>
          </div>
          <div className={styles.box}>
            <h4>Imagen del producto</h4>
            <p>
              Sube una imagen de tu producto. Podrás utilizarla en documentos y
              en el Catálogo de Helebba.
            </p>

            <ImageInput
              uploadImage={uploadImage}
              isLoading={isLoading}
              urls={product.images || []}
              removeImage={removeImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button onClick={() => onCloseModal?.()} type="button" variant="third">
          Descartar
        </Button>
        <Button loading={isWorking} type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default ProductFrom;

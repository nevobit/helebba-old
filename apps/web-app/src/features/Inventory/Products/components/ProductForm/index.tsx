import { Button, Field, Input, Modal, Textarea, useForm } from '@helebba/design-system/web'
import { UpdateProductDto } from '@helebba/entities'
import { FormEvent, useEffect } from 'react'
import styles from './Form.module.css';
import { useCreateProduct, useEditProduct } from '../../hooks';
import { useAccountStore } from '@/state-manager';
import { ImageInput } from '@/components';
import { useUploadImage } from '@/hooks';
import { DivisaFormater } from '@/utilities';

interface Props {
    contactToEdit?: UpdateProductDto
    onCloseModal?: () => void
}

const ProductForm = ({ contactToEdit = {}, onCloseModal }: Props) => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, uploadImage, urls } = useUploadImage();

    const { isCreating, createProduct } = useCreateProduct();
    const { isEditing, editProduct } = useEditProduct();
    const isWorking = isCreating || isEditing;

    const { id: issueId, ...editValues } = contactToEdit;
    const isEditSession = Boolean(issueId);

    const { formState: product, setFormState, handleChange } = useForm(
        isEditSession ? editValues : {},
    );

    const removeImage = (image: string) => {
        const images = product?.images?.filter((img) => img !== image);
        setFormState((prev) => ({ ...prev, images: images }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditSession) {
            editProduct(
                {
                    id: contactToEdit.id,
                    ...product,
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
                    product: { ...product },
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                    },
                },
            );
        }
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

    return (
        <form onSubmit={onSubmit} className={styles.form} >
            <Modal.Body className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.stack}>
                        <div className={styles.card} >
                            <h4 className={styles.title}>Información básica</h4>
                            <p className={styles.desc}>Describe tu producto. Puedes utilizar esta información en los documentos que generes en Helebba.</p>

                            <div className={styles.inputs}>
                                <Field label='Nombre del producto *' >
                                    <Input name='name' placeholder='Añade un nombre a tu producto' onChange={handleChange} />
                                </Field>
                                <Field label='Descripción del producto *' >
                                    <Textarea placeholder='Especifica las características del artículo' />
                                </Field>
                            </div>
                        </div>

                        <div className={styles.card} >
                            <h4 className={styles.title} >Ventas</h4>
                            <p className={styles.desc}>Indica el subtotal y el impuesto aplicable. El importe total se calculará de forma automática.</p>
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
                                            {/* {product.rates?.map((rate) => (
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
                                            ))} */}
                                        </tbody>
                                    </table>
                                </div>

                                {/* <Rates set={setFormState} product={product} /> */}
                            </div>
                        </div>

                        <div className={styles.card} >
                            <h4 className={styles.title}>Seguimiento</h4>
                            <p className={styles.desc}>Introduce la información que identifique el producto</p>

                            <div className={styles.col}>
                                <Field label='SKU' >
                                    <Input />
                                </Field>
                                <Field label='Código de barras' >
                                    <Input />
                                </Field>
                                <Field label='Código de frabricación' >
                                    <Input />
                                </Field>
                                <Field label='Peso' >
                                    <Input />
                                </Field>

                            </div>
                        </div>

                        <div className={styles.card} >
                            <h4 className={styles.title}>Gestión de Stocks</h4>
                            <p className={styles.desc}>Elige si deseas hacer seguimiento del stock y define tu almacén predeterminado.</p>

                            <div className={styles.col}>
                                <Field label='Almacén predeterminado' >
                                    <Input />
                                </Field>
                                <Field label='Cantidad' >
                                    <Input />
                                </Field>

                            </div>
                        </div>



                    </div>
                    <div className={styles.stack}>
                        <div className={styles.card} >
                            <h4 className={styles.title} >Categorización</h4>
                            <p className={styles.desc} >Incluye información adicional para completar tu ficha de producto</p>
                            <div className={styles.inputs} >
                                <Field label='Marca' >
                                    <Input />
                                </Field>

                                <Field label='Etiquetas' tip='Presiona la barra espaciadora para agregar una etiqueta' >
                                    <Input />
                                </Field>

                            </div>
                        </div>
                        <div className={styles.card} >
                            <h4 className={styles.title} >Imagen del producto</h4>
                            <p className={styles.desc} >Sube una imagen de tu producto. Podrás utilizarla en documentos y en el Catálogo de Helebba.</p>
                            <ImageInput
                                uploadImage={uploadImage}
                                isLoading={isLoading}
                                urls={product.images || []}
                                removeImage={removeImage}
                            />
                        </div>
                    </div>



                </div>
            </Modal.Body>
            <Modal.Footer className={styles.footer} >
                <div><Button loading={isWorking} type='submit' variant='primary'> {'Guardar'}</Button></div>
            </Modal.Footer>
        </form>

    )
}

export default ProductForm;
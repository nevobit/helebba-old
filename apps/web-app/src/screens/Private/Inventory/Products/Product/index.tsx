import styles from './Product.module.css';
import LineScaleLoader from '@/containers/Loader';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { PrivateRoutes } from '@/constant-definitions';
import { useProduct } from '@/hooks/products/useProduct';
import { DivisaFormater } from '@/utilities';
import { Modal } from '@/containers';
import ProductFrom from '../CreateProduct/ProductFrom';
import { Switch } from '@/components';
import { useEditProduct } from '@/hooks';
import { useState } from 'react';
import { useAccountStore } from '@/state-manager';

const Product = () => {
  const { isLoading, product } = useProduct();
  const account = useAccountStore((state) => state.account);

  const { editProduct } = useEditProduct();
  const [inCatalog, setInCatalog] = useState(product?.inCatalog);

  const handleCatalogChange = () => {
    const updatedProduct = { ...product, inCatalog: !inCatalog }; 
    editProduct(updatedProduct); 
    setInCatalog(!inCatalog); 
  }

  if (isLoading) return <LineScaleLoader />;

  return (
    <Modal>

    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Link to={PrivateRoutes.PRODUCTS}>
            <ArrowLeft size={18} color="rgba(0,0,0,0.6)" />
          </Link>
          <span>
            {product?.name?.substring(0, 1).toUpperCase()}
            {product?.name?.substring(1, 2).toUpperCase()}
          </span>

          <h3>{product.name}</h3>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tables}>
          <div className={styles.information}>
            <div className={styles.element}>
              {product?.images?.length <= 0 ? (
                <button>
                  <Plus size={18} /> Subir imagen
                </button>
              ) : (
                <img src={product?.images[0]}  style={{
                  width: "100%"
                }} alt={product.name} />
              )}
            </div>

            <div className={styles.line} />

            <div className={styles.element}>
              <span className={styles.span_price}>Precio</span>
              <p>{DivisaFormater({ value: product.price || 0, country: account?.country })}</p>
            </div>
            <div className={styles.line} />

            <div className={styles.element}>
              <span className={styles.span_price}>Impuestos</span>
              <p>{product.tax || 0}</p>
            </div>
            <div className={styles.line} />

            <div className={styles.element_cat}>
              <div>
                <span className={styles.span_price}>Catalogo</span>
                <p>Activa esta opción para mostrar este producto en tu catálogo online.</p>
              </div>
              <Switch onChange={handleCatalogChange} checked={product.inCatalog} />
            </div>

            <div className={styles.line} />

            <div className={styles.element}>
              <span className={styles.span_price}>Imágenes</span>

                <div className={styles.images} >

              {product.images.slice(1, product.images.length).map((img) => (
                <img src={img} style={{
                  width: "6rem",
                  height: "6rem"
                }}  />
              ))}

              <Modal.Open opens="edit">
              <button className={styles.btn_img}>
                <Plus size={30} />{' '}
              </button>
              </Modal.Open>
              </div>
             
            </div>
          </div>

          <div className={styles.notes}>
            <h4>Notas</h4>

            <div className={styles.element}>
              <button className={styles.btn} >
                <Plus size={18} /> Nueva nota
              </button>
            </div>
          </div>
        </div>

        <div className={styles.tables}>
          {product.variants.length > 0 && (
            <div className={styles.table_container}>
              <h4>Variantes</h4>
              <table>
                <thead>
                  <tr className={styles.table_grid}>
                    <th>SKU</th>
                    <th>Código de barras</th>
                    <th>Precio pincipal</th>
                    <th>Precio de compra</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((variant) => (
                    <tr key={variant.variantId} className={styles.table_grid}>
                      <td>{variant.sku}</td>
                      <td>{variant.barcode}</td>
                      <td>{DivisaFormater({ value: variant.price, country: account?.country })}</td>
                      <td>{variant.purchasePrice}</td>
                      <td>{variant.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className={styles.table_container}>
            <h4>Lista de precios de venta</h4>
            <table>
              <thead>
                <tr className={styles.table_grid}>
                  <th>Tarifa</th>
                  <th>Subtotal</th>
                  <th>Impuestos</th>
                  <th>Total</th>
                  <th>Margen</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={styles.table_grid}
                  style={{
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                  }}>
                  <td>Precio Principal</td>
                  <td>{DivisaFormater({ value: product.price || 0, country: account?.country })}</td>
                  <td>{DivisaFormater({ value: product.tax || 0, country: account?.country })}</td>
                  <td>{0}</td>
                  <td>{100}</td>
                </tr>
                {product?.rates?.map((rate) => (
                  <tr
                    key={rate.id}
                    className={styles.table_grid}
                    style={{
                      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    }}>
                    <td>{rate.name}</td>
                    <td>{DivisaFormater({ value: rate.price || 0, country: account?.country })}</td>
                    <td>{DivisaFormater({ value: rate.tax || 0, country: account?.country })}</td>
                    <td>{0}</td>
                    <td>{100}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal.Window 
          width={1250} styleHeader={{
            padding: 20,
            paddingBottom: 0
        }} style={{
            padding: 0,
        }}
          title="Editar Producto" name="edit">
            <ProductFrom productToEdit={product} />
          </Modal.Window>
    </div>
    </Modal>

  );
};

export default Product;

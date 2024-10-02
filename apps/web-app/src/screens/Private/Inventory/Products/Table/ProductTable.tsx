import Menus from '@/components/Shared/Menus';
import { Empty, Table } from '@/containers';
import { useProducts, useTableSelection } from '@/hooks';
import { Product } from '@helebba/entities';
import ProductRow from './ProductRow';
import { Check } from 'lucide-react';
import Image from '/images/empty/contacts.png';
import CreateProduct from '../CreateProduct';

const ProductTable = () => {
  const { products } = useProducts();
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: products.items });

  return (
    <Menus>
      <Table columns="3rem 1fr 1fr 1fr 1fr 1fr 1fr 5rem">
        {products.items.length > 0 && (

        <Table.Header>
        <div style={{
            position: "relative"
          }}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              style={{
                border: '1px solid rgba(0,0,0,0.3)',
                width: 20,
                height: 20,
                backgroundColor: selectAll ? "var(--main-color)" : "transparent",
                transition: "all .3s",
                zIndex: 9999
              }}
            />
             {selectAll && (
          <Check color="#fff" size={18} style={{
            position: "absolute",
            left: 2,
            top: 2,
            zIndex: 1,
            pointerEvents: "none"
          }} />
        )}
          </div>
          <div>Nombre</div>
          <div>SKU</div>
          <div style={{ textAlign: 'right' }}>Stock</div>
          <div style={{ textAlign: 'right' }}>Costo</div>
          <div style={{ textAlign: 'right' }}>Impuestos</div>
          <div style={{ textAlign: 'right' }}>Precio</div>
          <div></div>
        </Table.Header>
        )}

        <Table.Body<Product>
          data={products.items}
          empty={    <Empty
            button={<CreateProduct text={<>Añade tu primer Producto </>} />}
            title="Productos"
            copy="Aquí es donde puede administrar a sus clientes o proveedores y toda su información."
            image={Image}
          />}
          render={(product, index) => (
            <ProductRow
              product={product}
              index={index}
              key={product.id}
              selected={selectedRows.includes(product.id)}
              onSelect={() => toggleRowSelect(product.id)}
            />
          )}
        />
      </Table>
    </Menus>
  );
};

export default ProductTable;

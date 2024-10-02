import Menus from '@/components/Shared/Menus';
import { Empty, Table } from '@/containers';
import { useStores, useTableSelection } from '@/hooks';
import { Product } from '@helebba/entities';
import ProductRow from './PosRow';
import { Check } from 'lucide-react';
import NoSells from '../NoSells';

const PosTable = () => {
  const { stores } = useStores();
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: stores?.items });

  return (
    <Menus>
      <Table columns="3rem 1fr 1fr 1fr 1fr 1fr 1fr 5rem">
        {stores?.items.length > 0 && (

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
          data={[]}
          empty={    <Empty
            title="Aún no has vendido ningún producto"
            copy=""
            image={<NoSells />}
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

export default PosTable;

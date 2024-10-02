import { Modal, Table } from '@/containers';
import { Product } from '@helebba/entities';
import Menus from '@/components/Shared/Menus';
import { DivisaFormater } from '@/utilities';
import ProductFrom from '../CreateProduct/ProductFrom';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useDeleteProduct } from '@/hooks';
import ConfirmDelete from '@/components/Shared/ConfirmDelete';
import { useAccountStore } from '@/state-manager';

const colors = [
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#900C3F',
  '#FF5733',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
];

interface Props {
  product: Product;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

const ProductRow = ({ product, index, selected, onSelect }: Props) => {
  const {isDeleting, deleteProduct  } = useDeleteProduct();
  const account = useAccountStore((state) => state.account);
  // const { id: contactId, name } = contact;
  return (
    <Table.Row>
      <div 
        onClick={onSelect}
        style={{
            backgroundColor: selected ? 'rgba(0,0,0,0.1)' : colors[index],
            borderRadius: 3,
            height: 22,
            width: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 500,
            transition: "all .3s"
          }}
        >
   {selected ? (
          <Check color="#000" size={18} />
        ) : (
          <>
            {product.name.charAt(0).toUpperCase()}
            {product.name.charAt(1).toUpperCase()}
          </>
        )}
        </div>
      <div>{product?.name}</div>
      <div>{product.sku}</div>
      <div style={{ textAlign: 'right', fontWeight: 600 }}>{product.stock}</div>
      <div style={{ textAlign: 'right' }}>
        {DivisaFormater({ value: product.cost || 0, country: account?.country })}
      </div>
      <div style={{ textAlign: 'right' }}>
        {DivisaFormater({ value: product.tax || 0, country: account?.country })}
      </div>
      <div style={{ textAlign: 'right' }}>
        {DivisaFormater({ value: product.price, country: account?.country })}
      </div>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={product.id} />

            <Menus.List id={product.id}>
              <Menus.Button>
                <Link style={{width: "100%"}} to={'/products/' + product.id}>Ver</Link>
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button>Editar</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button>Eliminar</Menus.Button>
                </Modal.Open>

            </Menus.List>
          </Menus.Menu>

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

          <ConfirmDelete isLoading={isDeleting} name='delete' handler={() => deleteProduct(product.id)} />
         
        </Modal>
      </div>
    </Table.Row>
  );
};

export default ProductRow;

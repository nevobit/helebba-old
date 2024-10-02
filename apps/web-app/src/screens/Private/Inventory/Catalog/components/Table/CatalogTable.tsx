import { Empty, Table } from '@/containers'
import { CatalogRow } from './CatalogRow';
import CreateContact from '@/screens/Private/Contacts/CreateContact';
import Image from "/images/empty/contacts.png";

interface Props {
  catalogo: Articulo[]
}

interface Ropa {
  tipo: string;
  id: string;
  nombre: string;
  precio: number;
  codigo_barra: string;
  talla: string;
  color: string;
}

interface Bebida {
  tipo: string;
  id: string;
  nombre: string;
  precio: number;
  codigo_barra: string;
  volumen: string;
  sabor: string;
}

export type Articulo = Ropa | Bebida;

const title = 'Catálogo'

export const CatalogTable: React.FC<Props> = ({ catalogo }) => {
  return (
    <Table columns="3rem 1fr 1fr 1fr 1fr 1fr 5rem">
      <Table.Header>
        <div style={{ textAlign: 'left' }}>Nombre</div>
        <div style={{ textAlign: 'right' }}>SKU</div>
        <div style={{ textAlign: 'right' }}>Codigo de barra</div>
        <div style={{ textAlign: 'right' }}>tipo</div>
        <div style={{ textAlign: 'right' }}>tipo</div>
        <div style={{ textAlign: 'right' }}>Subtotal</div>
        <div></div>
      </Table.Header>
      {catalogo?.length > 0 ? (
        <Table.Body<Articulo>
        data={catalogo}
        render={(catalogo) => (
          <CatalogRow product={catalogo} key={catalogo.id} />
        )}
      />
      ) : (
        <div>
          <Empty
            button={<CreateContact text={<>Añade tu primer contacto </>} />}
            title={title}
            copy="Aquí es donde puede administrar a sus clientes o proveedores y toda su información."
            image={Image}
          />
        </div>
      )}
    </Table>
  );
}

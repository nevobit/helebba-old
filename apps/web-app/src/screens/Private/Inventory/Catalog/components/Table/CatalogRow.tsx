import styles from './catalogRow.module.css'
import { Table } from "@/containers"
import { Articulo } from "./CatalogTable";

interface Props {
  product: Articulo
}

export const CatalogRow: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.rowContainer}>
      <Table.Row>
        <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.3rem' }}>{product.nombre}</div>
        <div style={{ textAlign: 'right' }}>{product.id}</div>
        <div style={{ textAlign: 'right' }}>{product.codigo_barra}</div>
        <div style={{ textAlign: 'right' }}>{product.tipo}</div>
        <div style={{ textAlign: 'right' }}>{product.tipo}</div>
        <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.3rem' }}>{`${product.precio} $`}</div>
      </Table.Row>
    </div>
  );
}

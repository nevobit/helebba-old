import { Button, Input, Menus } from '@helebba/design-system/web';
import { CloudDownload, Search } from 'lucide-react';
import styles from './Toolbar.module.css';
import { exportTable } from '@helebba/design-system/utilities';
import { Product } from '@helebba/entities';
import { useProducts } from '../../hooks';
import { columns } from '../ProductsTable';

export const Toolbar = ({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
    const { products } = useProducts();
    return (
        <div className={styles.toolbar}>
            <div className={styles.buttons}>
                <select name="" id="">
                    <option value="">Todos</option>
                    <option value="">Producto simple</option>
                    <option value="">Producto con variantes</option>
                    <option value="">Pack de productos</option>
                    <option value="">Producto con lotes</option>
                    <option value="">Número de serie</option>
                    <option value="">Archivado</option>
                </select>

            </div>

            <div className={styles.right}>
                <Input icon={<Search />} onChange={({ target }) => setSearch(target.value)} />
                <Menus.Menu>
                    <Menus.Toggle id={'open-export-menu'}>
                        <span className={styles.download}> <CloudDownload size={16} /> </span>
                    </Menus.Toggle>
                    <Menus.List id='open-export-menu' >
                        <Menus.Button onClick={() => exportTable<Product>({ data: products.items, columns: columns, fileName: 'Facturas', format: 'excel' })}>
                            <Button className={styles.btn}> Exportar Excel </Button>
                        </Menus.Button>
                        <Menus.Button onClick={() => exportTable<Product>({ data: products.items, columns: columns, fileName: 'Facturas', format: 'pdf' })}>
                            <Button className={styles.btn}> Exportar PDF </Button>
                        </Menus.Button>
                    </Menus.List>
                </Menus.Menu>
            </div>
        </div>
    )
}
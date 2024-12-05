import { useState } from 'react';
import { ProductsTable } from '../../components/ProductsTable';
import styles from './Home.module.css';
import { useProducts } from '../../hooks';
import { LineScaleLoader, Menus, ScreenHeader } from '@helebba/design-system/web';
import { Toolbar } from '../../components';
import { ChevronDown, CloudUpload } from 'lucide-react';
import { CreateProduct } from '../../components/CreateProduct';

const Home = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');

    console.log(selectedRows)
    const { isLoading } = useProducts();

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader title='Productos' tip='Crea y adapta los productos a tus ventas, aplica tarifas, establece costes, comprueba stock y mucho más.'>
                <div className={styles.flex}>
                    <Menus.Menu>
                        <Menus.Toggle id='actions-menu' >
                            <span className={styles.actionsBtn}>Acciones <ChevronDown size={18} /> </span>
                        </Menus.Toggle>
                        <Menus.List id='actions-menu' >
                            <Menus.Button>
                                <span className={styles.option}><CloudUpload size={16} /> Importar contactos</span>
                            </Menus.Button>
                        </Menus.List>
                    </Menus.Menu>
                    <div className={styles.button}>
                        <CreateProduct />
                        <Menus.Menu>
                            <Menus.Toggle id='pack-menu' >
                                <span className={styles.btn} > <ChevronDown size={14} /> </span>
                            </Menus.Toggle>
                            <Menus.List id='pack-menu' >
                                <Menus.Button>
                                    <span className={styles.option}>Paquete de productos </span>
                                </Menus.Button>
                            </Menus.List>
                        </Menus.Menu>
                    </div>
                    {/* <CreateContact /> */}

                </div>
            </ScreenHeader>
            <Toolbar setSearch={setSearch} />
            <ProductsTable search={search} setSelectedRows={setSelectedRows} />
        </div>
    )
}

export default Home
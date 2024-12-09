import { LineScaleLoader, Menus, ScreenHeader } from '@helebba/design-system/web';
import styles from './Home.module.css';
import { ChevronDown, CloudUpload } from 'lucide-react';
import { useState } from 'react';
import { useServices } from '../../hooks';
import { Toolbar, ServicesTable, CreateService } from '../../components';

const Home = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [search, setSearch] = useState('');

    console.log(selectedRows)
    const { isLoading } = useServices();

    if (isLoading) return <LineScaleLoader />

    return (
        <div className={styles.container}>
            <ScreenHeader title='Servicios' tip='Crea servicios, define sus precios y costes manteniendo el registro de todas tus actividades o prestaciones.'>
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
                    <CreateService />
                </div>
            </ScreenHeader>
            <Toolbar setSearch={setSearch} />
            <ServicesTable search={search} setSelectedRows={setSelectedRows} />
        </div>
    )
}

export default Home
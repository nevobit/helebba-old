import { Modal } from '@/containers';
import styles from "./Search.module.css";
import { Search } from 'lucide-react';

const GlobalSearch = () => {
  return (
    <Modal defaultOpen="defaultModal" >
      <Modal.Window
      width={600}
        styleHeader={{
          padding: 20,
          paddingBottom: 0,
        }}
        style={{
          padding: 0,
        }}
        header
        title={'Nuevo Producto'}
        name="defaultModal">
        <div className={styles.container} >
            <div className={styles.input} >
            <input type="text" placeholder='Buscar' />
            <Search size={30} color='rgba(0,0,0,0.6)' />
            </div>
        </div>
      </Modal.Window>
    </Modal>
  );
};

export default GlobalSearch;

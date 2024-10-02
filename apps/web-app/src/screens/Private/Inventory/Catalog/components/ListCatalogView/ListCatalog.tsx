import styles from './ListCatalogView.module.css'
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Grid, List, Search } from 'lucide-react'
import { useSearchCatalog } from '../../hook/useSearchCatalog';
import { Input } from '@/components';

const ListCatalogView: React.FC = (): JSX.Element => {

  const [view, setView] = useState<boolean>(false)
  const { handleSubmit, onSearch } = useSearchCatalog();

  const onClick = (): void => {
    setView(!view)
  }

  return (
    <section className={styles.contianerListCatalog}>
      <div className={styles.contianerListCatalog__header}>
        <h2>Catálogo</h2>
        <div className={styles.catalogButtonContainer}>
          <Link
            to={view ? '' : 'viewtags'}
            className={styles.catalogView}
            onClick={onClick}>
            {view ? (
              <Grid size={20} color="#333" />
            ) : (
              <List size={20} color="#333" />
            )}
            <p>{view ? 'Ver en cuadricula' : 'Lista'}</p>
          </Link>
          <form onSubmit={handleSubmit} className={styles.catalogInput}>
            <Input onChange={onSearch} icon={<Search color="#333" size={32} />} />
          </form>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default ListCatalogView
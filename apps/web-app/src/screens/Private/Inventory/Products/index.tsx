import { ScreenHeader } from '@/containers';
import ScreenContainer from '@/containers/ScreenContainer';
import { useState } from 'react';
import { useProducts } from '@/hooks';
import CreateContact from './CreateProduct';
import LineScaleLoader from '@/containers/Loader';
import styles from './Products.module.css';
import ProductTable from './Table/ProductTable';
const title = 'Productos';

const Products = () => {
  const { isLoading } = useProducts();
  const [option, setOption] = useState('all');

  const [search, setSearch] = useState('');
  console.log(search);
  if (isLoading) return <LineScaleLoader />;

  return (
    <>
      <ScreenHeader defaultOptions title={title}>
        <CreateContact
          text={
            <>
              Nuevo producto{' '}
              <span
                className={styles.shortcut}
                title="Acceso directo, presiona N">
                N
              </span>
            </>
          }
        />
      </ScreenHeader>
      <ScreenContainer
        option={option}
        setOption={setOption}
        setSearch={setSearch}>
        <ProductTable />
      </ScreenContainer>
    </>
  );
};

export default Products;

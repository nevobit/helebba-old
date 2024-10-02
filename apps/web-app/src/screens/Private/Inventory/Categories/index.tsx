import { useState } from 'react';
import LineScaleLoader from '@/containers/Loader';
import EmployeeTable from './Table/CategoryTable';
import CreateEmployee from './CreateCategory';
import { ScreenContainer, ScreenHeader } from '@/containers';
import { useCategories } from './hooks';

const title = 'Categoria';

const Categories = () => {
  const { isLoading } = useCategories();
  const [option, setOption] = useState('all');

  const [search, setSearch] = useState('');
  console.log(search);
  if (isLoading) return <LineScaleLoader />;

  return (
    <>
      <ScreenHeader defaultOptions title={title}>
        <CreateEmployee 
          text={
            <>
            Nueva categoria
          </>
          }
        />
        
      </ScreenHeader>
      <ScreenContainer
        option={option}
        setOption={setOption}
        setSearch={setSearch}>
        <EmployeeTable />
      </ScreenContainer>
    </>
  );
};

export default Categories;

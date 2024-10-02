import { ScreenHeader } from '@/containers';
import ScreenContainer from '@/containers/ScreenContainer';
import { useState } from 'react';
import { useEmployees } from '@/hooks';
import LineScaleLoader from '@/containers/Loader';
import EmployeeTable from './Table/EmployeeTable';
import CreateEmployee from './CreateEmployee';
const title = 'Empleado';

const Employees = () => {
  const { isLoading } = useEmployees();
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
            Nuevo empleado
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

export default Employees;

import Menus from '@/components/Shared/Menus';
import { Empty, Table } from '@/containers';
import { useEmployees, useTableSelection } from '@/hooks';
import { Employee } from '@helebba/entities';
import EmployeeRow from './EmployeeRow';
import { Check } from 'lucide-react';
import Image from '/images/empty/tables_employees.png';
import CreateEmployee from '../CreateEmployee';

const EmployeeTable = () => {
  const { employees } = useEmployees();
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: employees?.items });

  return (
    <Menus>
      <Table columns="3rem 1fr 1fr 1fr 1fr 1fr 1fr 5rem">
        {employees?.items.length > 0 && (

        <Table.Header>
        <div style={{
            position: "relative"
          }}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              style={{
                border: '1px solid rgba(0,0,0,0.3)',
                width: 20,
                height: 20,
                backgroundColor: selectAll ? "var(--main-color)" : "transparent",
                transition: "all .3s",
                zIndex: 9999
              }}
            />
             {selectAll && (
          <Check color="#fff" size={18} style={{
            position: "absolute",
            left: 2,
            top: 2,
            zIndex: 1,
            pointerEvents: "none"
          }} />
        )}
          </div>
          <div>Nombre</div>
          <div>Puesto</div>
          <div>Correo electrónico</div>
          <div>Lugar de trabajo</div>
          <div>Contrato</div>
          <div>Usuario</div>
          <div></div>
        </Table.Header>
        )}

        <Table.Body<Employee>
          data={employees?.items}
          empty={    <Empty
            button={<CreateEmployee text={<>Añade tu primer Empleado </>} />}
            title="Empleado"
            copy="Desde aquí puedes administrar a todos tus empleados. Desde crear y añadir información a los contratos, hasta distribuir tu fuerza laboral por equipos o centros de trabajo."
            image={Image}
          />}
          render={(employee, index) => (
            <EmployeeRow
              employee={employee}
              index={index}
              key={employee.id}
              selected={selectedRows.includes(employee.id)}
              onSelect={() => toggleRowSelect(employee.id)}
            />
          )}
        />
      </Table>
    </Menus>
  );
};

export default EmployeeTable;

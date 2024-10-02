import Menus from '@/components/Shared/Menus';
import { Empty, Table } from '@/containers';
import { useTableSelection } from '@/hooks';
import { Category } from '@helebba/entities';
import EmployeeRow from './EmployeeRow';
import { Check } from 'lucide-react';
import Image from '/images/empty/tables_employees.png';
import CreateEmployee from '../CreateCategory';
import { useCategories } from '../hooks';

const CategoryTable = () => {
  const { categories } = useCategories();
  console.log(categories)
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: categories?.items });

  return (
    <Menus>
      <Table columns="3rem 1fr 5rem">
        {categories?.items?.length > 0 && (

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
          <div></div>
        </Table.Header>
        )}

        <Table.Body<Category>
          data={categories?.items}
          empty={    <Empty
            button={<CreateEmployee text={<>Añade tu primer Categoria </>} />}
            title="Categoria"
            copy="Desde aquí puedes administrar a todos tus categorias. Desde crear y añadir información, hasta distribuirlas o centralizarlas."
            image={Image}
          />}
          render={(category, index) => (
            <EmployeeRow
              category={category}
              index={index}
              key={category.id}
              selected={selectedRows.includes(category.id)}
              onSelect={() => toggleRowSelect(category.id)}
            />
          )}
        />
      </Table>
    </Menus>
  );
};

export default CategoryTable;

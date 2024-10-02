import { Modal, Table } from '@/containers';
import { Employee } from '@helebba/entities';
import Menus from '@/components/Shared/Menus';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useDeleteEmployee } from '@/hooks';
import ConfirmDelete from '@/components/Shared/ConfirmDelete';

const colors = [
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#900C3F',
  '#FF5733',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#FFC300',
  '#FF5733',
  '#900C3F',
  '#1B1464',
  '#FF5733',
  '#6A1B9A',
  '#FF5733',
  '#1B1464',
  '#FFC300',
];

interface Props {
  employee: Employee;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

const EmployeeRow = ({ employee, index, selected, onSelect }: Props) => {
  const {isDeleting, deleteEmployee  } = useDeleteEmployee();

  // const { id: contactId, name } = contact;
  return (
    <Table.Row>
      <div 
        onClick={onSelect}
        style={{
            backgroundColor: selected ? 'rgba(0,0,0,0.1)' : colors[index],
            borderRadius: 3,
            height: 22,
            width: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 500,
            transition: "all .3s"
          }}
        >
   {selected ? (
          <Check color="#000" size={18} />
        ) : (
          <>
            {employee.name.charAt(0).toUpperCase()}
            {employee.name.charAt(1).toUpperCase()}
          </>
        )}
        </div>
      <div>{employee?.name}</div>
      <div>{employee.position}</div>
      <div>{employee.email}</div>

      <div>{employee.workplace}</div>
      <div>
        {employee.currentContract ? "Si" : "No"}
      </div>
      <div>
        {employee.helebbaUserId}
      </div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={employee.id} />

            <Menus.List id={employee.id}>
              <Menus.Button>
                <Link style={{width: "100%"}} to={'employees/' + employee.id}>Ver</Link>
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button>Editar</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button>Eliminar</Menus.Button>
                </Modal.Open>

            </Menus.List>
          </Menus.Menu>

          {/* <Modal.Window 
          width={1250} styleHeader={{
            padding: 20,
            paddingBottom: 0
        }} style={{
            padding: 0,
        }}
          title="Editar Contacto" name="edit">
            <ProductFrom productToEdit={product} />
          </Modal.Window> */}

          <ConfirmDelete isLoading={isDeleting} name='delete' handler={() => deleteEmployee(employee.id)} />
         
        </Modal>
      </div>
    </Table.Row>
  );
};

export default EmployeeRow;

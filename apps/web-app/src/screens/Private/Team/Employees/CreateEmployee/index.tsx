import { Button } from '@/components';
import { Modal } from '@/containers';
import { ReactNode } from 'react';
import EmployeeFrom from './EmployeeFrom';

const CreateEmployee = ({ text }: { text: ReactNode }) => {
  return (
    <Modal>
      <Modal.Open opens="employee-form">
        <Button>{text}</Button>
      </Modal.Open>
      <Modal.Window title={'Nuevo Empleado'} name="employee-form">
        <EmployeeFrom />
      </Modal.Window>
    </Modal>
  );
};

export default CreateEmployee;

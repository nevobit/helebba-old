import { Button } from '@/components';
import { Modal } from '@/containers';
import { ReactNode } from 'react';
import EmployeeFrom from './EmployeeFrom';

const CreateCategory = ({ text }: { text: ReactNode }) => {
  return (
    <Modal>
      <Modal.Open opens="category-form">
        <Button>{text}</Button>
      </Modal.Open>
      <Modal.Window width={600} title={'Nueva Categoria'} name="category-form">
        <EmployeeFrom />
      </Modal.Window>
    </Modal>
  );
};

export default CreateCategory;

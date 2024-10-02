import { Button } from '@/components';
import { Modal } from '@/containers';
// import styles from "./Create.module.css";
import WarehouseForm from './WarehouseForm';
import { ReactNode } from 'react';

const CreateWarehouse = ({ text }: { text: ReactNode }) => {
    return (
        <Modal>
            <Modal.Open opens="warehouse-form">
                <Button>{text}</Button>
            </Modal.Open>
            <Modal.Window title={"Nuevo Almácen"} name='warehouse-form'>
                <WarehouseForm />
            </Modal.Window>
        </Modal>
    )
}

export default CreateWarehouse;
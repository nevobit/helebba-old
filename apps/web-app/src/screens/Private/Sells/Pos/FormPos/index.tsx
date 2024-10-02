import { Button } from '@/components';
import { Modal } from '@/containers';
import ProductFrom from './Form';
import { ReactNode } from 'react';

const FormPos = ({ text }: { text: ReactNode }) => {
    return (
        <Modal>
            <Modal.Open opens="pos-form">
                <Button variant="third" >{text}</Button>
            </Modal.Open>
            <Modal.Window width={500} styleHeader={{
                padding: 20,
                paddingBottom: 0
            }} style={{
                padding: 0,
                        }} title={"Crear tienda"} name='pos-form'>
                <ProductFrom />
            </Modal.Window>
        </Modal>
    )
}

export default FormPos;
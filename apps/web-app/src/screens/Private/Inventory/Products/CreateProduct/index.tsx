import { Button } from '@/components';
import { Modal } from '@/containers';
import ProductFrom from './ProductFrom';
import { ReactNode } from 'react';

const CreateProduct = ({ text }: { text: ReactNode }) => {
    return (
        <Modal>
            <Modal.Open opens="product-form">
                <Button>{text}</Button>
            </Modal.Open>
            <Modal.Window width={1250} styleHeader={{
                padding: 20,
                paddingBottom: 0
            }} style={{
                padding: 0,
            }} title={"Nuevo Producto"} name='product-form'>
                <ProductFrom />
            </Modal.Window>
        </Modal>
    )
}

export default CreateProduct;
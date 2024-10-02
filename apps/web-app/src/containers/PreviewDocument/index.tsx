import { Modal } from '..';
import { Button } from '@/components';
import { Element } from '@/hooks/documents/useHandleDocument';
import Form from './Form';

const PreviewDocument = ({ specs } : { specs: Element[] }) => {
  
  return (
    <>
      <Modal.Open opens="show-form">
        <Button variant="third" >Previsualizar</Button>
      </Modal.Open>
      <Modal.Window
      width={900}
        styleHeader={{
          padding: 20,
          paddingBottom: 0,
        }}
        style={{
          padding: 0,
        }}
        title={'Vista previa'}
        name="show-form">

         <Form specs={specs} />
        </Modal.Window>
    </>
  );
};

export default PreviewDocument;

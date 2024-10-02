import { Button } from '@/components';
import { Modal } from '@/containers';
// import styles from "./Create.module.css";
import ContactFrom from './ContactFrom';
import { ReactNode } from 'react';

const CreateContact = ({ text }: { text: ReactNode }) => {
  return (
    <Modal>
      <Modal.Open opens="contact-form">
        <Button>{text}</Button>
      </Modal.Open>
      <Modal.Window title={'Nuevo Contacto'} name="contact-form">
        <ContactFrom />
      </Modal.Window>
    </Modal>
  );
};

export default CreateContact;

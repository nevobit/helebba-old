// import styles from "./Create.module.css";
import InvitationFrom from './InvitationFrom';
import { Button, Modal, useModal } from '@helebba/design-system/web';
import styles from './Create.module.css';
import { X } from 'lucide-react';

const CreateInvitation = () => {
  const { openModal, closeModal, requestCloseModal } = useModal();
  const open = () => {

    openModal(
      <Modal.Window isOpen={true} className={styles.window} onClose={closeModal}>
        <Modal.Header className={styles.header} >
          <h2>Invitar usuarios</h2>
          <button onClick={() => requestCloseModal({
            confirm: true,
            onConfirm: () => {
              console.log('Modal cerrado.');
            },
          })}><X width={20} /></button>
        </Modal.Header>
        <InvitationFrom />
      </Modal.Window>
    )
  }
  return (
    <Button variant="monochrome" onClick={open} >Invitar usuarios</Button>
  );
};

export default CreateInvitation;

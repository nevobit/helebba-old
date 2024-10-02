// import styles from "./Create.module.css";
import InvitationFrom from './InvitationFrom';
import { Button, Modal, useModal } from '@helebba/design-system/web';

const CreateInvitation = () => {
    const { openModal, closeModal } = useModal();
  const open = () => {

    openModal(
<Modal.Window isOpen={true} onClose={closeModal}>
        <InvitationFrom />
      </Modal.Window>
    )
  }
  return (
        <Button variant="tertiary" onClick={open} >Invitar usuarios</Button>
  );
};

export default CreateInvitation;

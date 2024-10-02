import { Button } from '@/components';
import { Modal } from '@/containers';
// import styles from "./Create.module.css";
import InvitationFrom from './InvitationFrom';

const CreateInvitation = () => {
  return (
    <Modal>
      <Modal.Open opens="invitation-form">
        <Button variant="third" >Invitar usuarios</Button>
      </Modal.Open>
      <Modal.Window width={460} title={'Invitar usuarios'} name="invitation-form">
        <InvitationFrom />
      </Modal.Window>
    </Modal>
  );
};

export default CreateInvitation;

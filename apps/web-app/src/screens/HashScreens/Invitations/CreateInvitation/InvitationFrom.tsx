import { useEditContact, useUser } from '@/hooks';
import styles from './Create.module.css';
import { FormEvent } from 'react';
import { useAccountStore } from '@/state-manager';
import { Invitation } from '@helebba/entities';
import { useCreateInvitation } from '@/hooks/invitations';
import { Button, Field, Input, useForm } from '@helebba/design-system/web';

const roles = [
  {
    value: "admin",
    name: "Administrador",
    description: "Acceso total a toda la cuenta"
  }
]
interface Props {
  contactToEdit?: Partial<Invitation>;
  onCloseModal?: () => void;
}

const InvitationFrom = ({ contactToEdit = {}, onCloseModal }: Props) => {
  const account = useAccountStore((state) => state.account);
  const { isCreating, createInvitation } = useCreateInvitation();
  const { user } = useUser();
  const { isEditing, editContact } = useEditContact();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = contactToEdit;
  const isEditSession = Boolean(editId);

  const { formState: invitation, handleChange, setFormState } = useForm(
    isEditSession ? editValues : { isInvited: false },
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditSession) {
      editContact(
        {
          id: contactToEdit.id,
          ...invitation,
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    } else {
      createInvitation(
        {
          invitation: { 
            account: account.id,
            email: invitation.email,
            accountName: account.name,
            accountOwnerName: user?.name + " " + user?.lastname,
            role: "admin"
          }
        },
        {
          onSuccess() {
            onCloseModal?.();
          },
        },
      );
    }
  };

  console.log(invitation)
  return (
    <form onSubmit={onSubmit} className={styles.container}>
          <Field label="Correo electrónico *">
            <Input
              disabled={isWorking}
              name="email"
              value={invitation.email}
              onChange={handleChange}
              required
              placeholder='Escribe una correo electrónico'
            />
          </Field>

          <div className={styles.role} >
            <div className={styles.roles} >
              <h3>Rol de usuario</h3>
              <div className={styles.actions}>
                <p>Invitado</p>
                <button type='button' onClick={() => setFormState((prev) => ({ ...prev, isInvited: !invitation.isInvited  }))} className={ !invitation.isInvited ? styles.switch : `${styles.switch} ${styles.active}`} >
                  <span></span>
                </button>
              </div>
            </div>
            <select name="role" onChange={handleChange} >
              {roles.map((role) => (
                <option value={role.value}>{role.name}</option>
              ))}
            </select>
          </div>

       

      <div className={styles.footer}>
        <Button loading={isWorking} type="submit">
          Invitar
        </Button>
      </div>
    </form>
  );
};

export default InvitationFrom;

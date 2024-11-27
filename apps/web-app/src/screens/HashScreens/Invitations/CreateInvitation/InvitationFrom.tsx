import { useEditContact, useUser } from '@/hooks';
import styles from './Create.module.css';
import { FormEvent, useState } from 'react';
import { useAccountStore } from '@/state-manager';
import { Invitation } from '@helebba/entities';
import { useCreateInvitation } from '@/hooks/invitations';
import { Button, Field, Input, Modal, useForm } from '@helebba/design-system/web';

const roles = [
  {
    value: "admin",
    name: "Administrador",
    description: "Acceso total a toda la cuenta"
  },
  {
    value: "finance",
    name: "Finanzas",
    description: "Acceso completo a la parte de facturación y contabilidad"
  },
  {
    value: "sells",
    name: "Ventas",
    description: "Acceso completo a la parte de ventas"
  },
  {
    value: "inventary",
    name: "Acceso completo a inventario",
    description: "Pedidos de compra y venta, remisiones, productos, stock, ajustes, etc."
  },
  {
    value: "rrhh",
    name: "Recursos Humanos",
    description: "Acceso completo a la administración de equipo y nóminas"
  },
  {
    value: "projects",
    name: "Miembro de proyectos",
    description: "Acceso solo a trabajar en proyectos"
  },
  {
    value: "crm",
    name: "Miebro de CRM",
    description: "Acceso solo a trabajar en CRM"
  },
  {
    value: "sellsAgent",
    name: "Agente de ventas",
    description: "Acceso solo a sus documentos y contactos"
  },
  {
    value: "posd",
    name: "Dependiente POS",
    description: "Acceso completo a la aplicación TPV y Contactos"
  },
  {
    value: "poss",
    name: "Supervisor POS",
    description: "Acceso completo a la aplicación TPV, la sección Punto de Venta, Inventario y Contactos"
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

  const [roleDescription, setRoleDescription] = useState(roles[0].description);
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = roles.find((role) => role.value === e.target.value);
    if (selectedRole) {
      setRoleDescription(selectedRole.description);
      setFormState((prev) => ({ ...prev, role: selectedRole.value }));
    }
  };

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
      <Modal.Body>

        <Field label="Dirección de correo electrónico">
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
              <button type='button' onClick={() => setFormState((prev) => ({ ...prev, isInvited: !invitation.isInvited }))} className={`${styles.switch} ${!invitation.isInvited ? "" : styles.active}`} >
                  <span></span>
                </button>
              </div>
            </div>
          <select name="role" onChange={handleRoleChange} >
              {roles.map((role) => (
                <option value={role.value}>{role.name}</option>
              ))}
          </select>
          <p className={styles.desc} > <span>Descripción del rol: </span>{roleDescription}</p>
        </div>
      </Modal.Body>



      <Modal.Footer className={styles.footer}>

        <Button variant='primary' loading={isWorking} type="submit">
          Invitar
        </Button>
      </Modal.Footer>

    </form>
  );
};

export default InvitationFrom;

import { Table } from "@/containers";
// import { useCreateContact, useDeleteContact } from "@/hooks";
import { Contact } from "@helebba/entities"
// import ContactFrom from "../CreateContact/ContactFrom";
import { Check } from "lucide-react";
import { types } from "./Types";

const colors = [
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#900C3F',
    '#FF5733',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#FFC300',
    '#FF5733',
    '#900C3F',
    '#1B1464',
    '#FF5733',
    '#6A1B9A',
    '#FF5733',
    '#1B1464',
    '#FFC300',
  ];
interface Props {
    contact: Contact
    index: number;
    selected: boolean;
    onSelect: () => void;
    handler: (id: string) => void 
}

const ContactRow = ({ contact, index, handler, selected, onSelect  }: Props) => {
    // const {isDeleting, deleteContact  } = useDeleteContact();
    // const {isCreating, createContact  } = useCreateContact();

    // const { id: contactId, name } = contact;

    // const handleDuplicate = () => {
    //     createContact({
    //         name: `Copia de ${name}`
    //     });
    // }
   return (
    <div onClick={() => handler(contact.id)}>

    <Table.Row >

        <div 
        onClick={onSelect}
        style={{
            backgroundColor: selected ? 'rgba(0,0,0,0.1)' : colors[index],
            borderRadius: 3,
            height: 22,
            width: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 500,
            transition: "all .3s"
          }}
        >
   {selected ? (
          <Check color="#000" size={18} />
        ) : (
          <>
            {contact?.name?.charAt(0).toUpperCase()}
            {contact?.name?.charAt(1).toUpperCase()}
          </>
        )}
        </div>
        <div>{contact.name}</div>
        <div>{contact?.email}</div>
        <div>{contact?.phone}</div>
        <div>{contact?.mobile}</div>
        <div>{contact?.billAddress?.address}</div>
        <div>{contact?.billAddress?.city}</div>
        <div style={{
          backgroundColor: types[contact?.type]?.color,
          borderRadius: 3,
          padding: 2,
          maxWidth: 80,
          textAlign: "center",
          fontWeight: "500",
          fontSize: 12,
          color: "#fff"
        }} >{types[contact?.type]?.name}</div>
        {/* <div>

        <Modal>
            
            <Modal.Window title="Editar Contacto" name="edit" >
                <ContactFrom contactToEdit={contact} />
            </Modal.Window>

            <Modal.Window title="" name="delete">
                <div></div>
            </Modal.Window>
        </Modal>
        </div> */}

    </Table.Row>
    </div>
  )
}

export default ContactRow
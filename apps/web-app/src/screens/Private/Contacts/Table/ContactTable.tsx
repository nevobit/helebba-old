import Menus from '@/components/Shared/Menus';
import { Table } from '@/containers';
import { useContacts, useTableSelection } from '@/hooks';
import { Contact } from '@helebba/entities';
import ContactRow from './ContactRow';
import { Check } from 'lucide-react';

const ContactTable = ({ search, option, handler }: { option: string, search: string, handler: (id: string) => void }) => {
  const { contacts } = useContacts();
  const [{ selectedRows, selectAll }, toggleRowSelect, toggleSelectAll] =
    useTableSelection({ data: contacts.items });

  return (
    <Menus>
      <Table columns="2.5rem 1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div style={{
            position: "relative"
          }}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              style={{
                border: '1px solid rgba(0,0,0,0.3)',
                width: 20,
                height: 20,
                backgroundColor: selectAll ? "var(--main-color)" : "transparent",
                transition: "all .3s",
                zIndex: 9999
              }}
            />
             {selectAll && (
          <Check color="#fff" size={18} style={{
            position: "absolute",
            left: 2,
            top: 2,
            zIndex: 1,
            pointerEvents: "none"
          }} />
        )}
          </div>
          <div>Nombre</div>
          <div>Correo electrónico</div>
          <div>Teléfono</div>
          <div>Celular</div>
          <div>Dirección</div>
          <div>Ciudad</div>
          <div>Tipo</div>
        </Table.Header>
        <Table.Body<Contact>
          data={contacts.items.filter((contact: Contact) => contact?.name?.includes(search) && option == "" ? contact : option == "client" ?  contact.isPerson : !contact.isPerson )}
          render={(contact, index) => (
            <ContactRow
              contact={contact}
              index={index}
              key={contact.id}
              handler={handler}
              selected={selectedRows?.includes(contact.id)}
              onSelect={() => toggleRowSelect(contact.id)}
            />
          )}
        />
      </Table>
    </Menus>
  );
};

export default ContactTable;

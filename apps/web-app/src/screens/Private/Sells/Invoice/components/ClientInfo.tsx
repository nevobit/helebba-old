import React from 'react';
import Field from '@/components/Shared/Field';
import Input from '@/components/Shared/Input';
import { SelectWithSearch } from '@/components';
import { useContacts } from '@/hooks';
import { Contact, Document } from '@helebba/entities';
import styles from '../Create/CreateInvoice.module.css';

interface ClientInfoProps {
  invoice: Partial<Document>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleChangeContact: (uuid: string, contactName: string) => void;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ invoice, handleChange, handleChangeContact }) => {
  const { contacts } = useContacts();

  return (
    <div className={styles.client_info}>
      <Field label="Cliente">
        <SelectWithSearch
          value={invoice.contact}
          options={contacts?.items}
          onChange={(id: string) => {
            const selectedContact = contacts?.items.find(
              (contact: Contact) => contact.id === id,
            );
            if (selectedContact) {
              handleChangeContact(id, selectedContact.name);
            }
          }}
        />
      </Field>
      <Field label="Número de factura">
        <Input
          name="docNumber"
          value={invoice.docNumber}
          onChange={handleChange}
        />
      </Field>
      <Field label="Fecha">
        <Input
          name="date"
          value={invoice.date}
          type="date"
          onChange={handleChange}
        />
      </Field>
      <Field label="Vencimiento">
        <Input
          name="dueDate"
          value={invoice.dueDate}
          type="date"
          onChange={handleChange}
        />
      </Field>
      <Field label="Nombre cliente">
        <Input
          name="contactName"
          value={invoice.contactName}
          onChange={handleChange}
          disabled={invoice.contact !== ''}
        />
      </Field>
    </div>
  );
};

export default ClientInfo;
import { useContacts } from '@/hooks';
import styles from './Email.module.css';
import { Contact } from '@helebba/entities';
import { Check, Plus, X } from 'lucide-react';
import { Button, Field, Input } from '@/components';
import { useState } from 'react';

const SelectEmails = ({
  emails,
  onEmailChange,
  onClose,
}: {
  onClose: () => void;
  emails: string[];
  onEmailChange: (email: string, action: 'add' | 'remove') => void;
}) => {
  const { contacts } = useContacts();
  const contactEmails = contacts?.items.map((contact: Contact) => contact.email) || [];

  const [emailH, setEmialH] = useState('');

  console.log({ emailH });
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Destinatarios</h3>
          <button onClick={onClose} className={styles.close}>
            <X size={18} />
          </button>
        </div>

        <div className={styles.inputs}>
          <Field label="Nuevo correo">
            <Input
              onChange={({ target }) => setEmialH(target.value)}
              placeholder="jose@jose.com"
            />
          </Field>
          <Button onClick={() => onEmailChange(emailH, 'add')}>
            <Plus size={18} />
          </Button>
        </div>

        <div className={styles.list}>
          {emails
            ?.filter((email) => !contactEmails.includes(email))
            .map((email: string) => (
              <div
                className={styles.selector}
                onClick={() => onEmailChange(email, 'remove')}>
                <h4>{email}</h4>
                <div
                  className={
                    emails.includes(email) ? styles.check_active : styles.check
                  }>
                  {emails.includes(email) && (
                    <Check
                      size={18}
                      color="#fff"
                      className={styles.check_icon}
                    />
                  )}
                </div>
              </div>
            ))}
          {contacts?.items.map((contact: Contact) => (
            <div
              className={styles.selector}
              onClick={() =>
                onEmailChange(
                  contact.email,
                  emails.includes(contact.email) ? 'remove' : 'add',
                )
              }>
                <div  className={styles.namemail}>
                  <h4 className={styles.title} >{contact.name}:</h4>
                  <h4>{contact.email}</h4>
                </div>
              <div
                className={
                  emails.includes(contact.email)
                    ? styles.check_active
                    : styles.check
                }>
                {emails.includes(contact.email) && (
                  <Check size={18} color="#fff" className={styles.check_icon} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectEmails;

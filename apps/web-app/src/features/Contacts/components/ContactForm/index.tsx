import { Button, Field, Input, Modal, useForm } from '@helebba/design-system/web'
import { Bank, UpdateContactDto } from '@helebba/entities'
import { ChangeEvent, FormEvent, useState } from 'react'
import BasicSection from './BasicSection'
import styles from './Form.module.css';
import BanksSection from './BanksSection';
import PreferencesSection from './PreferenceSection';
import AccountingSection from './AccountingSection';
import { useCreateContact, useEditContact } from '../../hooks';
import { useAccountStore } from '@/state-manager';

interface Props {
    contactToEdit?: UpdateContactDto
    onCloseModal?: () => void
}

const ContactForm = ({ contactToEdit = {}, onCloseModal }: Props) => {
    const account = useAccountStore((state) => state.account);

    const { isCreating, createContact } = useCreateContact();
    const { isEditing, editContact } = useEditContact();
    const isWorking = isCreating || isEditing;

    const { id: issueId, ...editValues } = contactToEdit;
    const isEditSession = Boolean(issueId);

    const { formState: contact, handleChange } = useForm(
        isEditSession ? editValues : {},
    );

    const [activeTab, setActiveTab] = useState('basic');

    const [banks, setBanks] = useState<Bank[]>([])

    const addBank = () => {
        setBanks([...banks, {
            id: (Math.random() * 132).toString(),
            name: '',
            accountNumber: '',
            code: '',
            accountType: '',
            holderName: '',
            currency: '',
            reference: ''
        }])
    }

    const deleteBank = (id: string) => {
        setBanks((prevItems) => prevItems.filter((bank) => bank.id !== id));
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditSession) {
            editContact(
                {
                    id: contactToEdit.id,
                    ...contact,
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                    },
                },
            );
        } else {
            createContact(
                {
                    account: account.id!,
                    contact: { ...contact },
                },
                {
                    onSuccess() {
                        onCloseModal?.();
                    },
                },
            );
        }
    };

    const renderSection = () => {
        switch (activeTab) {
            case 'basic':
                return <BasicSection contact={contact} handleChange={handleChange} />;
            case 'banks':
                return <BanksSection banks={banks} addBank={addBank} deleteBank={deleteBank} />;
            case 'preferences':
                return <PreferencesSection />;
            case 'accounting':
                return <AccountingSection />;
            default:
                return <BasicSection contact={contact} handleChange={handleChange} />;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Modal.Body>
                <div className={styles.mainInfo}>
                    <Field label='Nombre' >
                        <Input value={contact.name} name='name' onChange={handleChange} />
                    </Field>
                    <Field label='Número de identificación' >
                        <Input name='identification' onChange={handleChange} />
                    </Field>
                    <div className={styles.contact_type}>
                        <p>Este contacto es...</p>
                        <div className={styles.combo_button}>
                            <button
                                type="button"
                                onClick={() =>
                                    handleChange({
                                        target: { name: 'isPerson', value: false },
                                    } as unknown as ChangeEvent<HTMLInputElement>)
                                } className={!contact.isPerson ? styles.active : ''}>
                                Empresa
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    handleChange({
                                        target: { name: 'isPerson', value: true },
                                    } as unknown as ChangeEvent<HTMLInputElement>)
                                } className={contact.isPerson ? styles.active : ''}>
                                Persona
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.tabs}>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
                        onClick={() => setActiveTab('basic')}
                    >
                        Básico
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'banks' ? styles.active : ''}`}
                        onClick={() => setActiveTab('banks')}
                    >
                        Bancos
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'preferences' ? styles.active : ''}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        Preferencias
                    </button>
                    <button
                        type='button'
                        className={`${styles.tab} ${activeTab === 'accounting' ? styles.active : ''}`}
                        onClick={() => setActiveTab('accounting')}
                    >
                        Contabilidad
                    </button>
                </div>
                <div className={styles.content}>{renderSection()}</div>

            </Modal.Body>
            <Modal.Footer className={styles.footer} >
                <div><Button loading={isWorking} type='submit' variant='primary'> {isEditSession ? 'Guardar' : 'Crear'}</Button></div>
            </Modal.Footer>
        </form>

    )
}

export default ContactForm
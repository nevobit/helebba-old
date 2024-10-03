import { PrivateRoutes } from '@/constant-definitions';
import ScreenHeader from '@/containers/ScreenHeader';
import styles from './CreateInvoice.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import Field from '@/components/Shared/Field';
import {
  useContacts,
  useCreateDocument,
  useDocument,
  useEditDocument,
  useHandleDocument,
} from '@/hooks';
import { MouseEvent, useEffect, useState } from 'react';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { SelectWithSearch } from '@/components';
import { useAccountStore } from '@/state-manager';
import {
  Contact,
  Document,
  DocumentType,
  ProductDocument,
} from '@helebba/entities';
import { Search, X } from 'lucide-react';
import PreviewDocument from '@/containers/PreviewDocument';

const CreateSalesOrder = () => {
  const account = useAccountStore((state) => state.account);
  const { contacts } = useContacts();

  const {
    elements,
    addElement,
    editElement,
    removeElement,
    subtotal,
    taxesTotal,
    total,
    initialElements,
  } = useHandleDocument();

  const { isEditing, editDocument } = useEditDocument();


  const { document, isLoading: isLoadingDocumentToEdit } = useDocument();

  const { id: editId, ...editValues } = document || { id: '' };
  const isEditSession = Boolean(editId.length > 1 ?? false);

  const [order, setOrder] = useState<Partial<Document>>(
    isEditSession
      ? editValues
      : {
          account: '',
          contact: '',
          contactName: '',
          desc: '',
          date: new Date().toDateString(),
          dueDate: new Date().toDateString(),
          notes: '',
          products: [
            {
              id: '',
              concept: '',
              description: '',
              amount: 0,
              price: 0,
              tax: 0,
              costPrice: 0,
              weight: 0,
              sku: '',
              discount: 0,
              total: 0,
            },
          ],
          tax: 0,
          subtotal: 0,
          discount: 0,
          total: 0,
          language: '',
          statusDocument: 0,
          warehouseId: '',
          paymentMethod: isEditSession ? document.paymentMethod : '',
          designId: '',
          docType: DocumentType.SALES_ORDER,
          customFields: [],
          docNumber: '',
          currency: '',
          currencyChange: 0,
          paymentsTotal: 0,
          paymentsPending: 0,
          paymentsRefunds: 0,
          salesChannelId: '',
        },
  );

  const { isCreating, createDocument } = useCreateDocument(order.docType);

  const isWorking = isCreating || isEditing;

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setOrder((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeContact = (uuid: string, contactName: string) => {
    setOrder((prev) => ({
      ...prev,
      contact: uuid,
      contactName: contactName,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    if (isEditSession) {
      editDocument({
        ...order,
        id: document.id,
        docType: DocumentType.SALES_ORDER,
        account: account.id,
        products: elements,
        total,
        subtotal
      });
    } else {
      createDocument({
        account: account.id!,
        document: {
          ...order,
          docType: DocumentType.SALES_ORDER,
          account: account.id,
          products: elements,
          total,
          subtotal
        },
      });
    }
    navigate("/sales-order")
  };

  useEffect(() => {
    if (document) {
      setOrder((prevorder) => ({
        ...prevorder,
        payment: document.paymentMethod,
      }));
    }
  }, [isLoadingDocumentToEdit]);

  useEffect(() => {
    if (isEditSession) {
      const newElements = document.products.map((product: ProductDocument) => ({
        ...product,
      }));
      initialElements(newElements);
    }
  }, []);

  return (
    <>
      <ScreenHeader
        setOpen={() => navigate(PrivateRoutes.NEW_INVOICE, { replace: true })}
        title={isEditSession ? 'Editar Pedido' : 'Nuevo Pedido'}>
        {/* <Button variant="third">Opciones</Button> */}
        <PreviewDocument specs={elements} />

        <Button onClick={onSubmit} loading={isWorking} variant="primary">
          Guardar
        </Button>
      </ScreenHeader>

      <div className={styles.client_info}>
        <Field label="Cliente">
          <SelectWithSearch
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
        <Field label="Número de documento">
          <Input
            name="docNumber"
            value={order.docNumber}
            onChange={handleChange}
          />
        </Field>
        <Field label="Fecha">
          <Input
            name="date"
            value={order.date}
            type="date"
            onChange={handleChange}
          />
        </Field>
        <Field label="Vencimiento">
          <Input
            name="dueDate"
            value={order.dueDate}
            type="date"
            onChange={handleChange}
          />
        </Field>
        {order.contactName != '' ? (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={order.contactName}
              onChange={handleChange}
              disabled
            />
          </Field>
        ) : (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={order.contactName}
              onChange={handleChange}
            />
          </Field>
        )}
      </div>

      <div className={styles.items_table}>
        <div className={styles.head}>
          <h4>Concepto</h4>
          <h4>Descripción</h4>
          <h4 className={styles.head_amount}>Cantidad</h4>
          <h4>Precio</h4>
          <h4>Impuesto(%)</h4>
          <h4>Total</h4>
        </div>
        {elements.map((element) => (
          <div className={styles.body} key={element.id}>
            <div className={styles.body_option}>
              <Search size={16} color="var(--main-color)" />
            </div>
            <div>
              {' '}
              <Input
                value={element.concept}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'concept')
                }
                placeholder="Escribe el concepto o usa @ para buscar"
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                value={element.description}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'description')
                }
                placeholder="Desc"
              />{' '}
            </div>
            <div className={styles.body_amount}>
              {' '}
              <Input
                value={element.amount}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'amount')
                }
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                value={element.price}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'price')
                }
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'tax')
                }
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                readOnly
                value={DivisaFormater({
                  value:
                    Number(element.price * element.amount) +
                    Number(
                      element.price * element.amount * (element.tax / 100),
                    ),
                    country: account?.country
                })}
              />{' '}
            </div>
            <div
              className={styles.body_option}
              onClick={() => removeElement(element.id)}>
              <X size={16} color="var(--main-color)" />
            </div>
          </div>
        ))}

        <div className={styles.table_footer}>
          <Button onClick={addElement} variant="third">
            Añadir línea
          </Button>
        </div>
      </div>

      <div className={styles.last_card}>
        <div className={styles.invoice_payment}>
          <Field label="Información de pago">
            <select
              name="paymentMethod"
              value={order.paymentMethod}
              id=""
              onChange={handleChange}>
              <option value="">No seleccionada</option>
              <option value="bank">Transferencia Bancaria</option>
              <option value="cash">Efectivo</option>
            </select>
          </Field>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <h3>{DivisaFormater({ value: subtotal, country: account?.country })}</h3>
          <p>Subtotal</p>
        </div>

        <div className={styles.tax_sell}>
          <h3>{DivisaFormater({ value: taxesTotal, country: account?.country })}</h3>
          <p>Impuesto de venta</p>
        </div>
        <div>
          <h3>{DivisaFormater({ value: total, country: account?.country })}</h3>
          <p>Total</p>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default CreateSalesOrder;

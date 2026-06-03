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
  useProducts,
} from '@/hooks';
import { MouseEvent, useEffect, useState } from 'react';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { SelectWithSearch } from '@/components';
import { useAccountStore } from '@/state-manager';
import {
  Contact,
  Document,
  DocumentType,
  Product,
  ProductDocument,
} from '@helebba/entities';
import { Search, Trash, X } from 'lucide-react';
import { Modal } from '@/containers';
import PreviewDocument from '@/containers/PreviewDocument';
import { useQueryClient } from '@tanstack/react-query';

const INSTALLMENT_PAYMENT_METHODS = ['addi', 'sistecredito'];

const CreateInvoice = () => {
  const account = useAccountStore((state) => state.account);
  const { contacts } = useContacts();
  const queryClient = useQueryClient();

  const {
    elements,
    addElement,
    editElement,
    removeElement,
    subtotal,
    taxesTotal,
    total,
    initialElements,
    editComplexElement
  } = useHandleDocument();

  const { isEditing, editDocument } = useEditDocument();


  const { document, isLoading: isLoadingDocumentToEdit } = useDocument();

  const { id: editId, ...editValues } = document || { id: '' };
  const isEditSession = Boolean(editId.length > 1 ?? false);

  const [invoice, setInvoice] = useState<Partial<Document>>(
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
          docType: DocumentType.INVOICE,
          customFields: [],
          docNumber: '',
          currency: '',
          currencyChange: 0,
          paymentsTotal: 0,
          paymentsPending: 0,
          paymentsRefunds: 0,
          paymentInstallments: 1,
          paymentInstallmentValue: 0,
          paymentReference: '',
          paymentFee: 0,
          paymentNetAmount: 0,
          paymentDisbursementDate: '',
          paymentCollectionStatus: 'pending',
          salesChannelId: '',
        },
  );

  const { isCreating, createDocument } = useCreateDocument(invoice.docType);
  const isWorking = isCreating || isEditing;


  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    const numberFields = ['paymentInstallments', 'paymentFee'];
    const nextValue = numberFields.includes(name) ? Number(value) : value;

    setInvoice((prev) => ({
      ...prev,
      [name]: nextValue,
      ...(name === 'paymentMethod' &&
      !INSTALLMENT_PAYMENT_METHODS.includes(value)
        ? {
            paymentInstallments: 1,
            paymentInstallmentValue: 0,
            paymentReference: '',
            paymentFee: 0,
            paymentNetAmount: 0,
            paymentDisbursementDate: '',
            paymentCollectionStatus: 'received',
          }
        : {}),
      ...(name === 'paymentMethod' && INSTALLMENT_PAYMENT_METHODS.includes(value)
        ? {
            paymentInstallments: prev.paymentInstallments || 1,
            paymentCollectionStatus: prev.paymentCollectionStatus || 'pending',
          }
        : {}),
    }));
  };

  const handleChangeContact = (uuid: string, contactName: string) => {
    setInvoice((prev) => ({
      ...prev,
      contact: uuid,
      contactName: contactName,
    }));
  };


  const [searchResults, setSearchResults] = useState<Product[] | undefined>([]); 

  const { products } = useProducts(); 

  useEffect(() => {
    const handleConceptChange = () => {
      elements.forEach((element) => {
        if (element.concept.includes('@')) {
          const searchTerm = element.concept.replace('@', '').trim().toLowerCase();
          const filteredProducts = products?.items.filter((product: Product) =>
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          );
          setSearchResults(filteredProducts);
        }
      });
    };

      handleConceptChange();

  }, [elements, products]);
  
  const handleChangeConcept = (productId: string, concept: string) => {
    editElement(productId, concept, 'concept');
  };
  const navigate = useNavigate();
  const isInstallmentPayment = INSTALLMENT_PAYMENT_METHODS.includes(
    invoice.paymentMethod || '',
  );

  useEffect(() => {
    if (!isInstallmentPayment) {
      return;
    }

    const installments = Number(invoice.paymentInstallments) || 1;
    const paymentInstallmentValue = Number((total / installments).toFixed(2));
    const paymentFee = Number(invoice.paymentFee) || 0;
    const paymentNetAmount = Math.max(total - paymentFee, 0);

    setInvoice((prev) => ({
      ...prev,
      paymentInstallmentValue,
      paymentNetAmount,
      paymentsPending: total,
    }));
  }, [
    invoice.paymentFee,
    invoice.paymentInstallments,
    invoice.paymentMethod,
    isInstallmentPayment,
    total,
  ]);

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    if (isEditSession) {
      editDocument({
        ...invoice,
        id: document.id,
        docType: DocumentType.INVOICE,
        account: account.id,
        products: elements,
        total,
        subtotal
      }, {
        onSuccess(data){
          queryClient.invalidateQueries({
            queryKey: ['documents', invoice.docType],
          });
          queryClient.invalidateQueries({
            queryKey: ['document', data.id, invoice.docType, account.id],
          });
          navigate("/sales/revenue")
        }
      });
    } else {
      createDocument({
        account: account.id!,
        document: {
          ...invoice,
          docType: DocumentType.INVOICE,
          account: account.id,
          products: elements,
          total,
          subtotal
        },
      }, {
        onSuccess(){
          navigate("/sales/revenue")
        }
      });
    }
  };

  useEffect(() => {
    if (document) {
      setInvoice((previnvoice) => ({
        ...previnvoice,
        payment: document.paymentMethod,
      }));
    }
  }, [isLoadingDocumentToEdit, document]);

  useEffect(() => {
    if (isEditSession) {
      const newElements = document.products.map((product: ProductDocument) => ({
        ...product,
      }));
      initialElements(newElements);
    }
  }, [isEditSession]);

  return (
    <Modal>
      <ScreenHeader
        setOpen={() => navigate(PrivateRoutes.NEW_INVOICE, { replace: true })}
        title={isEditSession ? 'Editar Factura' : 'Nueva Factura'}>
        {/* <Button variant="third">Opciones</Button> */}
        <PreviewDocument specs={elements} />
  
        <Button onClick={onSubmit} loading={isWorking} variant="primary">
          Guardar
        </Button>
      </ScreenHeader>

      <div className={styles.invoice_info}> 

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
        {invoice.contact != '' ? (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={invoice.contactName}
              onChange={handleChange}
              disabled
            />
          </Field>
        ) : (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={invoice.contactName}
              onChange={handleChange}
            />
          </Field>
        )}
      </div>

      <div className={styles.items_table}>
        <div className={styles.head}>
          <div></div>
          <h4>Concepto</h4>
          <h4>Descripción</h4>
          <h4 className={styles.head_amount}>Cantidad</h4>
          <h4>Precio</h4>
          <h4>Impuesto(%)</h4>
          <h4>Total</h4>
          <div></div>
        </div>
        {elements.map((element) => (
          <div className={styles.body} key={element.id}>
            <div className={styles.body_option}>
              <Search size={16} color="var(--main-color)" />
            </div>
            <div className={styles.list} >
              {' '}
              <Input
                value={element.concept}
                onChange={({ target }) =>
                handleChangeConcept(element.id, target.value)
              }
                placeholder="Escribe el concepto o usa @ para buscar"
              />
               {element.concept.includes('@') && (
       < div className={styles.products_list} >
                {searchResults?.map((product) => (
                  <div onClick={() => editComplexElement(element.id, product.name, product.price, product.id)} className={styles.items_list} >{product.name}</div>
                ))}
              </div>
      )}
              
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
            <div                 className={styles.total} >
              {' '}
              <Input
                readOnly
                value={DivisaFormater({
                  value:
                    Number(element.price * element.amount) +
                    Number(
                      element.price * element.amount * Number((element.tax / 100)),
                    ),
                    country: account?.country
                })}
              />{' '}
            </div>
            <div
              className={styles.body_option}
              onClick={() => removeElement(element.id)}>
              <Trash size={14} strokeWidth={"1.5px"} />
              {/* <X size={16} color="var(--main-color)" /> */}
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
          <div className={styles.payment_method}>

            <h3 className={styles.title} >Método de pago</h3>
        <div className={styles.invoice_payment}>
              <Field label="Seleccione un método de pago">
            <select
              name="paymentMethod"
              value={invoice.paymentMethod}
              id=""
              onChange={handleChange}>
              <option value="">No seleccionada</option>
              <option value="bank">Transferencia Bancaria</option>
              <option value="cash">Efectivo</option>
              <option value="addi">Addi</option>
              <option value="sistecredito">Sistecrédito</option>
            </select>
          </Field>
          {isInstallmentPayment && (
            <div className={styles.installment_fields}>
              <Field label="Número de cuotas">
                <Input
                  min={1}
                  name="paymentInstallments"
                  type="number"
                  value={invoice.paymentInstallments || 1}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Valor por cuota">
                <Input
                  readOnly
                  value={DivisaFormater({
                    value: invoice.paymentInstallmentValue || 0,
                    country: account?.country,
                  })}
                />
              </Field>
              <Field label="Referencia/aprobación">
                <Input
                  name="paymentReference"
                  value={invoice.paymentReference || ''}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Comisión financiera">
                <Input
                  min={0}
                  name="paymentFee"
                  type="number"
                  value={invoice.paymentFee || 0}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Neto a recibir">
                <Input
                  readOnly
                  value={DivisaFormater({
                    value: invoice.paymentNetAmount || 0,
                    country: account?.country,
                  })}
                />
              </Field>
              <Field label="Fecha de desembolso">
                <Input
                  name="paymentDisbursementDate"
                  type="date"
                  value={invoice.paymentDisbursementDate || ''}
                  onChange={handleChange}
                />
              </Field>
              <Field label="Estado del cobro">
                <select
                  name="paymentCollectionStatus"
                  value={invoice.paymentCollectionStatus || 'pending'}
                  onChange={handleChange}>
                  <option value="pending">Pendiente</option>
                  <option value="scheduled">Programado</option>
                  <option value="received">Recibido</option>
                </select>
              </Field>
            </div>
          )}
            </div>
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
      </div>

      <div></div>

    
    </Modal>
  );
};

export default CreateInvoice;

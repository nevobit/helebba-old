import { useState, useEffect } from 'react';
import { useDocument, useCreateDocument, useEditDocument, useHandleDocument } from '@/hooks';
import { Document, DocumentType, ProductDocument } from '@helebba/entities';

export const useInvoiceForm = () => {
  const { document, isLoading: isLoadingDocumentToEdit } = useDocument();
  const { isCreating, createDocument } = useCreateDocument(DocumentType.INVOICE);
  const { isEditing, editDocument } = useEditDocument();
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
          paymentMethod: isEditSession ? document?.paymentMethod : '',
          designId: '',
          docType: DocumentType.INVOICE,
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setInvoice((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeContact = (uuid: string, contactName: string) => {
    setInvoice((prev) => ({
      ...prev,
      contact: uuid,
      contactName: contactName,
    }));
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
  }, [isEditSession, document]);

  return {
    invoice,
    setInvoice,
    elements,
    handleChange,
    handleChangeContact,
    addElement,
    editElement,
    removeElement,
    editComplexElement,
    subtotal,
    taxesTotal,
    total,
    isEditing,
    isCreating,
    createDocument,
    editDocument,
    isEditSession,
    document,
  };
};
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { PrivateRoutes } from '@/constant-definitions';
import { useAccountStore } from '@/state-manager';
import { DocumentType } from '@helebba/entities';
import ScreenHeader from '@/containers/ScreenHeader';
import Modal from '@/containers/Modal';
import PreviewDocument from '@/containers/PreviewDocument';
import Button from '@/components/Shared/Button';
import { useInvoiceForm } from '../hooks/useInvoiceForm';
import ClientInfo from '../components/ClientInfo';
import ItemsTable from '../components/ItemsTable';
import PaymentInfo from '../components/PaymentInfo';
import InvoiceSummary from '../components/InvoiceSummary';

const CreateInvoice: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const account = useAccountStore((state) => state.account);
  
  const {
    invoice,
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
  } = useInvoiceForm();

  const isWorking = isCreating || isEditing;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const documentData = {
      ...invoice,
      docType: DocumentType.INVOICE,
      account: account.id,
      products: elements,
      total,
      subtotal,
    };

    const onSuccess = () => {
      queryClient.invalidateQueries({ queryKey: ['documents', invoice.docType]});
      if (isEditSession) {
        queryClient.invalidateQueries({ queryKey: ['document', document.id, invoice.docType, account.id]});
      }
      navigate("/sales/revenue");
    };

    if (isEditSession) {
      await editDocument({ ...documentData, id: document.id }, { onSuccess });
    } else {
      await createDocument({ account: account.id!, document: documentData }, { onSuccess });
    }
  };

  return (
    <Modal>
      <ScreenHeader
        setOpen={() => navigate(PrivateRoutes.NEW_INVOICE, { replace: true })}
        title={isEditSession ? 'Editar Factura' : 'Nueva Factura'}
      >
        <PreviewDocument specs={elements} />
        <Button onClick={handleSubmit} loading={isWorking} variant="primary">
          Guardar
        </Button>
      </ScreenHeader>

      <ClientInfo
        invoice={invoice}
        handleChange={handleChange}
        handleChangeContact={handleChangeContact}
      />

      <ItemsTable
        elements={elements}
        addElement={addElement}
        editElement={editElement}
        removeElement={removeElement}
        editComplexElement={editComplexElement}
        account={account}
      />

      <PaymentInfo
        paymentMethod={invoice.paymentMethod || ""}
        handleChange={handleChange}
      />

      <InvoiceSummary
        subtotal={subtotal}
        taxesTotal={taxesTotal}
        total={total}
        account={account}
      />
    </Modal>
  );
};

export default CreateInvoice;
import { Collection, getModel } from '@helebba/constant-definitions';
import { Document, DocumentSchemaMongo } from '@helebba/entities';

interface PaymentDetails {
  date: string;
  description: string;
  amount: number;
}

export const payDocument = async (
  documentId: string,
  paymentDetails: PaymentDetails,
) => {
  const { date, description, amount } = paymentDetails;

  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new Error('La cantidad recibida debe ser un número válido');
  }

  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const document = await model.findById(documentId);

  if (!document) {
    throw new Error('Documento no encontrado');
  }

  if (amount <= document.paymentsPending) {
    document.paymentsTotal += amount;

    document.paymentsPending -= amount;

    document.desc = description;
    document.date = date;

    await document.save();

    return document;
  } else {
    throw new Error('La cantidad recibida es mayor que el pago pendiente');
  }
};

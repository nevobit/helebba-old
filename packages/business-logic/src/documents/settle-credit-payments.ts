import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Document,
  DocumentSchemaMongo,
  DocumentType,
  StatusDocument,
  StatusType,
} from '@helebba/entities';

const CREDIT_PAYMENT_METHODS = ['addi', 'sistecredito'];

const getToday = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

export const settleDueCreditDocuments = async (account?: string) => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const today = getToday();
  const accountQuery = account ? { account } : {};

  const documents = await model.find({
    ...accountQuery,
    status: StatusType.ACTIVE,
    docType: DocumentType.INVOICE,
    paymentMethod: { $in: CREDIT_PAYMENT_METHODS },
    statusDocument: { $ne: StatusDocument.Paid },
    paymentCollectionStatus: { $in: ['pending', 'scheduled', null] },
    paymentDisbursementDate: { $exists: true, $ne: '', $lte: today },
  });

  await Promise.all(
    documents.map((document) => {
      const paymentFee = Number(document.paymentFee || 0);
      const paymentNetAmount =
        Number(document.paymentNetAmount) || Math.max(Number(document.total || 0) - paymentFee, 0);

      return model.updateOne(
        { _id: document._id },
        {
          $set: {
            statusDocument: StatusDocument.Paid,
            paymentCollectionStatus: 'received',
            paymentNetAmount,
            paymentsTotal: paymentNetAmount,
            paymentsPending: 0,
            updatedAt: new Date().toISOString(),
          },
        },
      );
    }),
  );
};

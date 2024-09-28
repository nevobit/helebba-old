import { verifyToken, payDocument } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { group } from 'console';

interface PaymentDetails {
  date: string;
  description: string;
  amount: number;
}

export const payDocumentRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/documents/:docType/:documentId/pay',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;

    const { docType, documentId } = params as {
      docType: string;
      documentId: string;
    };

    const { date, description, amount } = body as PaymentDetails;

    console.log(docType);
    const document = await payDocument(documentId, {
      date,
      description,
      amount,
    });
    if (!group) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(document);
  },
);

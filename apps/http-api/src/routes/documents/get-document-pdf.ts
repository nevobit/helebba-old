import { verifyToken, getDocumentPDF } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { group } from 'console';

export const getDocumentPDFRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/documents/:docType/:documentId/pdf',
  verifyToken,
  async (request, reply) => {
    const { params, headers } = request;
    const { docType, documentId } = params as {
      docType: string;
      documentId: string;
    };
    const account = headers['account'] as string;
    const document = await getDocumentPDF(account, documentId, docType);
    if (!group) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(document);
  },
);

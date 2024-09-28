import { verifyToken, deleteDocument } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const deleteDocumentRoutes = makeFastifyRoute(
  RouteMethod.GET,
  '/documents/:docType/:documentId/delete',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { docType, documentId } = params as {
      docType: string;
      documentId: string;
    };

    const document = await deleteDocument(documentId, docType);
    return reply.send(document);
  },
);

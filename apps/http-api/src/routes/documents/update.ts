import { verifyToken, updateDocument } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { UpdateDocumentDto } from '@helebba/entities';

export const updateDocumentRoutes = makeFastifyRoute(
  RouteMethod.PATCH,
  '/documents/:docType/:documentId',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const { docType, documentId } = params as {
      docType: string;
      documentId: string;
    };
    const data = body as UpdateDocumentDto;
    const document = await updateDocument(documentId, docType, data);
    return reply.send(document);
  },
);

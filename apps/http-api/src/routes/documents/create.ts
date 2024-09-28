import { verifyToken, createDocument } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { CreateDocumentDto, DocumentType } from '@helebba/entities';

export const createDocumentRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/documents/:docType',
  verifyToken,
  async (request, reply) => {
    const { headers, params } = request;
    const account = headers['account'] as string;
    const { body } = request as { body: CreateDocumentDto };
    const { docType } = params as { docType: string | DocumentType };
    const document = await createDocument(account, body, docType);
    return reply.status(201).send(document);
  },
);

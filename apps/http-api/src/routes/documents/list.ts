import { verifyToken, getAllDocuments } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { DocumentType } from '@helebba/entities';

export const getAllDocumentsRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/documents/:docType',
  verifyToken,
  async (request, reply) => {
    const { params, query, headers } = request;
    const { page, limit, search } = query as {
      page: number;
      limit: number;
      search: string;
    };
    const account = headers['account'] as string;
    const { docType } = params as { docType: string | DocumentType };

    const document = await getAllDocuments({
      page: Number(page),
      limit: Number(limit),
      search,
      account,
      docType,
    });

    return reply.status(200).send(document);
  },
);

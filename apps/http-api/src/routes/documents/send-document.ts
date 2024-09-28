import { verifyToken, SendDocumentEmail } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

interface emailProps {
  mailTemplateId?: string;
  emails: string[];
  subject: string; // minimo 10 caracteres
  message: string; //minimo 20 caracteres,
}

export const SendDocumentEmailRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/documents/:docType/:documentId/send',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const account = request.headers['account'] as string;

    const { docType, documentId } = params as {
      docType: string;
      documentId: string;
    };

    console.log(docType)

    const { emails, subject, message, mailTemplateId } = body as emailProps;

    const document = await SendDocumentEmail({
      emails,
      subject,
      message,
      mailTemplateId,
      documentId,
      account
    });
    return reply.header('x-data-source', 'HIT').send(document);
  },
);

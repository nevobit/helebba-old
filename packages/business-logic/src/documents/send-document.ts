import { Document, DocumentSchemaMongo, StatusType } from '@helebba/entities';
import { Resend } from 'resend';
import { getDocumentPDF } from './get-document-pdf';
import { getAccountById } from '../accounts';
import { Collection, getModel } from '@helebba/constant-definitions';



interface emailProps {
  mailTemplateId?: string;
  emails: string[];
  subject: string;
  message: string;
  documentId: string;
  account: string;
}

export const SendDocumentEmail = async ({
  emails,
  subject,
  message,
  documentId,
  account,
}: emailProps) => {
  const { RESEND_KEY } = process.env;
  const resend = new Resend(RESEND_KEY!);

  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const query = { status: StatusType.ACTIVE };
  const document = await model.findOne({ ...query, _id: documentId });
  const existAccount = await getAccountById(account);
  try {

    if (!document) {
      throw new Error(`Documento con ID ${documentId} no encontrado`);
    }

    const documentPDF = await getDocumentPDF(account, documentId);

    const htmlMessage = `
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; font-family: Arial, sans-serif;">
      <p> ${message} <p>
    </div>`;

    await resend.emails.send({
      from: `${existAccount.name} <info@lytos.com>`,
      to: emails,
      subject: subject,
      html: htmlMessage,
      attachments: [
        {
          filename: 'documento.pdf',
          content: documentPDF,
        },
      ],
    });

    return 'Send';
  } catch (error: unknown) {
    console.log(error);
    throw new Error(String(error));
  }
};

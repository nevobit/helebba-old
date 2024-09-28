import {
  DocumentSchemaMongo,
  CreateDocumentDto,
  Document,
} from '@helebba/entities';
import { Collection, getModel } from '@helebba/constant-definitions';

export const createDocument = async (
  account: string,
  document: Partial<CreateDocumentDto>,
  docType: string,
) => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const createdDocument = new model({ account, ...document, docType });
  await createdDocument.save();
  return createDocument;
};

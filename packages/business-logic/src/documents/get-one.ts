import { Collection, getModel } from '@helebba/constant-definitions';
import { Document, DocumentSchemaMongo, DocumentType, StatusType } from '@helebba/entities';

interface Query {
  status: StatusType;
  account: string;
  docType: DocumentType | string;
}

interface Params {
  account: string;
  docType: DocumentType | string;
  documentId?: string;
}

export const getDocumentById = async ({
  documentId,
  docType,
  account,
}: Params): Promise<Document> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  const query: Query = { status: StatusType.ACTIVE, account, docType };
  const document = await model.findOne({ ...query, _id: documentId, docType }) as Document;
  return document;
};

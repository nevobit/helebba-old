import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Document,
  DocumentSchemaMongo,
  UpdateDocumentDto,
} from '@helebba/entities';

export const updateDocument = async (
  id: string,
  docType: string,
  data: UpdateDocumentDto,
): Promise<Partial<Document> | null> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);

  const existingDocument = await model.findOne({ _id: id, docType });
  if (!existingDocument) {
    throw new Error('Document not found');
  }

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  const result = await model.updateOne(
    { _id: id },
    { $set: {...datatToUpdate, products: datatToUpdate.products} },
  );
  if (!result.acknowledged && result.matchedCount < 1) {
    throw new Error('Could not update document');
  }

  const updatedDocument = await model.findById(id);
  return updatedDocument;
};

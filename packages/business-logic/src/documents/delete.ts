import { Collection, getModel } from '@helebba/constant-definitions';
import { StatusType, DocumentSchemaMongo, Document } from '@helebba/entities';

export const deleteDocument = async (id: string, docType: string) => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);

  console.log(id, docType);
  const document = await model.findOne({ _id: id, docType });
  if (!document) {
    throw new Error('Document not found');
  }
  const result = await model.updateOne(
    { _id: id },
    { $set: { status: StatusType.DELETED } },
  );
  if (!result.acknowledged) {
    throw new Error('Could not delete document');
  }
  const updatedDocument = await model.findById(id);
  return updatedDocument;
};

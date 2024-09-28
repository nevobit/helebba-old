import { Document } from './schemas';

export interface CreateDocumentDto
  extends Omit<Document, '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateDocumentDto extends Partial<CreateDocumentDto> {}

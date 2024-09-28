import { Contact } from './schemas';
  
export interface CreateContactDto extends Omit<Contact,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateContactDto extends Partial<CreateContactDto> {}

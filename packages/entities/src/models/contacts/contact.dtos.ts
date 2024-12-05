import { Contact } from './schemas';
  
export interface CreateContactDto extends Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'status'> { }
export interface UpdateContactDto extends Partial<Contact> { }

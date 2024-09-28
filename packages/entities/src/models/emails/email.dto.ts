import { Email } from "./schemas";

export interface CreateEmailDto extends Omit<Email, '_id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateEmailDto extends Partial<Email> {}

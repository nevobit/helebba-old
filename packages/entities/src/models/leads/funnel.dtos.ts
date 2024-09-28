import { Lead } from './schemas';
  
export interface CreateLeadDto extends Omit<Lead,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateLeadDto extends Partial<CreateLeadDto> {}
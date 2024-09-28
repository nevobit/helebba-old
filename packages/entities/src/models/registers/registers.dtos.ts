import { Register } from './schemas';
  
export interface CreateRegisterDto extends Omit<Register,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateRegistereDto extends Partial<CreateRegisterDto> {}
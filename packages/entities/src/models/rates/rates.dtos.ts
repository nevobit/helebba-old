import { Rate } from './schemas';
  
export interface CreateRateDto extends Omit<Rate,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateRateDto extends Partial<CreateRateDto> {}
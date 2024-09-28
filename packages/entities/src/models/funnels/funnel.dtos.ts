import { Funnel } from './schemas';
  
export interface CreateFunnelDto extends Omit<Funnel,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateFunnelDto extends Partial<CreateFunnelDto> {}
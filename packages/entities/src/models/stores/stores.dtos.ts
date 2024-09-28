import { Store } from './schemas';
  
export interface CreateStoreDto extends Omit<Store,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateStoreDto extends Partial<CreateStoreDto> {}
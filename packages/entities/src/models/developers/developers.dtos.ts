import { Developer } from './schemas';
  
export interface CreateDeveloperDto extends Omit<Developer,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateDeveloperDto extends Partial<CreateDeveloperDto> {}
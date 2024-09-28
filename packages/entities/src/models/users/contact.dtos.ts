import { User } from './schemas';
  
export interface CreateUserDto extends Omit<User,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateUserDto extends Partial<CreateUserDto> {}

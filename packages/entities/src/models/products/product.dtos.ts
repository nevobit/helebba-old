import { Product } from './schemas';
  
export interface CreateProductDto extends Omit<Product,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateProductDto extends Partial<CreateProductDto> {}
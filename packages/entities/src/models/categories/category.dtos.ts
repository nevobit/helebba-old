import { Category } from './schemas';

export type CreateCategoryDto = Omit<Category, '_id' | "id" | "createdAt" | "updatedAt">;
export type UpdateCategoryDto = Partial<CreateCategoryDto>;
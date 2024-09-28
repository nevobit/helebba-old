import { Warehouse } from './schemas';

export type CreateWarehouseDto = Omit<Warehouse, '_id' | "id" | "createdAt" | "updatedAt">;
export type UpdateWarehouseDto = Partial<CreateWarehouseDto>;
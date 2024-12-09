import { Service } from "./schemas";

export interface CreateServiceDto extends Omit<Service, 'id' | 'createdAt' | 'updatedAt' | 'status'> { }
export interface UpdateServiceDto extends Partial<Service> { }
import { Employee } from './schemas';
  
export interface CreateEmployeetDto extends Omit<Employee,  '_id' | 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateEmployeeDto extends Partial<Employee> { }

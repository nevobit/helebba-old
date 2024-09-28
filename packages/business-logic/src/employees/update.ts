import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Employee, EmployeeSchemaMongo, UpdateEmployeeDto,
} from '@helebba/entities';

export const updateEmployee = async (
  id: string,
  data: UpdateEmployeeDto,
): Promise<Partial<Employee> | null> => {
  const model = getModel<Employee>(Collection.CONTACTS, EmployeeSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update contact');

  const contact = await model.findById(id);

  return contact;
};

import { Collection, getModel } from '@helebba/constant-definitions';
import { Warehouse, UpdateWarehouseDto, WarehouseSchemaMongo } from '@helebba/entities';

export const updateWarehouses = async (id: string,data: UpdateWarehouseDto,): Promise<Partial<Warehouse> | null> => {
  const model = getModel<Warehouse>(Collection.WAREHOUSES, WarehouseSchemaMongo);
  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });
  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update warehouse');
  const warehouse = await model.findById(id);
  return warehouse;
};

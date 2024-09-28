import { WarehouseSchemaMongo, CreateWarehouseDto, Warehouse } from "@helebba/entities";
import { Collection, getModel } from "@helebba/constant-definitions";

export const createWarehouse = async (
  account: string,
  data: Partial<CreateWarehouseDto>
): Promise<Warehouse | Error> => {
  const model = getModel<Warehouse>(Collection.WAREHOUSES, WarehouseSchemaMongo);

  if (data.isPrincipal === true) {
    const ware = await model.findOne({ account, isPrincipal: true });
    ware!.isPrincipal = false;
    await ware!.save();
  }

  const warehouse = new model({ account, ...data });
  await warehouse.save();

  return warehouse;
};

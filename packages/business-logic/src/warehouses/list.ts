import { Collection, getModel } from "@helebba/constant-definitions"
import { WarehouseSchemaMongo, Warehouse } from "@helebba/entities"

export const getAllWarehouses = async (id: string): Promise<Warehouse[]> => {
 const model = getModel<Warehouse>(Collection.WAREHOUSES, WarehouseSchemaMongo);
 const warehouses = await model.find({account: id, status: "active"});
 return warehouses;
}
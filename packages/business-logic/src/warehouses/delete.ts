import { Collection, getModel } from "@helebba/constant-definitions"
import { Warehouse, WarehouseSchemaMongo, StatusType } from "@helebba/entities"

export const deleteWarehouse = async(id: string) => {
    const model = getModel<Warehouse>(Collection.WAREHOUSES, WarehouseSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete warehouse');
    const warehouse = await model.findById(id);
    return warehouse;
}

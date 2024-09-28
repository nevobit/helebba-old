import { Collection, getModel } from "@helebba/constant-definitions"
import { Product, ProductSchemaMongo, StatusType, Warehouse, WarehouseSchemaMongo } from "@helebba/entities"

export const getWarehouseById = async (id: string): Promise<Warehouse | null> => {
  const model = getModel<Warehouse>(Collection.WAREHOUSES, WarehouseSchemaMongo)
  const warehouse = await model.findById(id);

  const productModel = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
  const aggregationResult = await productModel.aggregate([
    { $match: { warehouseId: id, status: StatusType.ACTIVE } },
    {
      $group: {
        _id: null, totalStock: {
          $sum: {
            $cond: [
              { $gt: [{ $size: "$variants" }, 0] },
              { $sum: "$variants.stock" },
              "$stock"
            ]
          }
        }
      }
    }
  ]).exec();

  const totalStock = aggregationResult.length > 0 ? aggregationResult[0].totalStock : 0;

  const productsCount = await productModel.countDocuments({ warehouseId: id, status: StatusType.ACTIVE });

  if (!warehouse) {
    return null
  }

  const result = {
    name: warehouse.name,
    email: warehouse.email,
    phone: warehouse.phone,
    mobile: warehouse.mobile,
    address: warehouse.address,
    color: warehouse.color,
    postalCode: warehouse.postalCode,
    icon: warehouse.icon,
    isPrincipal: warehouse.isPrincipal,
    account: warehouse.account,
    id: warehouse.id,
    createdAt: warehouse.createdAt,
    updatedAt: warehouse.updatedAt,
    status: warehouse.status,
    productsCount,
    totalStock
  }

  return result;
}
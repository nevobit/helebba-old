import { Collection, getModel } from '@helebba/constant-definitions';
import { StatusType, Warehouse, WarehouseSchemaMongo } from '@helebba/entities';

// Definición de la interfaz para la información de almacén
interface WarehouseInfo {
  warehouse: Warehouse; // Información del almacén
  units: number; // Número de unidades en el almacén
}

// Función principal para obtener una visión general de los almacenes
export const getWarehousesOverview = async (
  account: string,
): Promise<WarehouseInfo[]> => {
  // Obtiene el modelo del almacén
  const model = getModel<Warehouse>(
    Collection.WAREHOUSES,
    WarehouseSchemaMongo,
  );

  // Realiza una agregación en la base de datos para obtener la información requerida
  const result = await model.aggregate([
    {
      $match: { account, status: StatusType.ACTIVE }, // Filtra por la cuenta especificada
    },
    {
      $lookup: {
        from: 'products',
        let: { warehouseId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$warehouseId', '$$warehouseId'] },
                  { $eq: ['$status', StatusType.ACTIVE] }
                ]
              }
            }
          }
        ],
        as: 'products',
      },
    },
    {
      $unwind: '$products', // Descompone los documentos del almacén en múltiples documentos, uno por cada producto
    },
    {
      $group: {
        _id: '$_id', // Agrupa por ID de almacén
        warehouse: { $first: '$$ROOT' }, // Obtiene la información del almacén (el primer documento de cada grupo)
        units: {
          $sum: {
            $cond: [
              { $gt: [{ $size: "$products.variants" }, 0] },
              { $sum: "$products.variants.stock" },
              "$products.stock"
            ]
          }
        }, // Suma la cantidad de stock de todos los productos en el almacén
      },
    },
    {
      $project: {
        _id: 0, // No incluir el ID en el resultado final
        warehouse: 1, // Incluir la información del almacén
        units: 1, // Incluir la cantidad total de unidades
      },
    },
  ]);

  // Mapea el resultado para ajustar el formato de la respuesta
  return result.map((item: WarehouseInfo) => ({
    warehouse: { ...item.warehouse, id: item.warehouse.id }, // Agrega el ID del almacén al objeto del almacén
    units: item.units, // Unidades totales en el almacén
  }));
};

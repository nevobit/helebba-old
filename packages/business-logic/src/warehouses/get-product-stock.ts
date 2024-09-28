import { Collection, getModel } from '@helebba/constant-definitions';
import { StatusType, Warehouse, WarehouseSchemaMongo } from '@helebba/entities';

interface ProductInfo {
  _id: string;
  stock: number;
  variants: { [key: string]: number };
}

// Definición de la interfaz para la información del almacén en el nuevo formato
interface WarehouseInfoNew {
  warehouse: {
    id: string;
    name: string;
    color: string;
    products: ProductInfo[];
  };
}

export const getProductStock = async (
  warehouseId: string,
): Promise<WarehouseInfoNew[]> => {
  const model = getModel<Warehouse>(
    Collection.WAREHOUSES,
    WarehouseSchemaMongo,
  );

  // Realiza una agregación en la base de datos para obtener la información requerida
  const result = await model.aggregate([
    {
      $match: { _id: warehouseId, status: StatusType.ACTIVE }, // Filtra por la cuenta especificada
    },
    {
      $lookup: {
        from: 'products', // Colección de productos
        localField: '_id', // Campo local: ID del almacén
        foreignField: 'warehouseId', // Campo externo: ID del almacén del producto
        as: 'products', // Alias para los productos encontrados
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        color: 1,
        email: 1,
        phone: 1,
        mobile: 1,
        address: 1,
        postalCode: 1,
        isPrincipal: 1,
        products: {
          $map: {
            input: '$products',
            as: 'product',
            in: {
              _id: "$$product._id", // ID del producto
              stock: "$$product.stock", // Stock del producto
              kind: "$$product.kind", // Tipo del producto
              name: "$$product.name", // Nombre del producto
              desc: "$$product.desc", // Descripción del producto
              typeId: "$$product.typeId", // ID del tipo de producto
              contactId: "$$product.contactId", // ID del contacto asociado al producto
              account: "$$product.account", // Cuenta asociada al producto
              contactName: "$$product.contactName", // Nombre del contacto asociado al producto
              price: "$$product.price", // Precio del producto
              tax: "$$product.tax", // Impuesto del producto
              total: "$$product.total", // Total del producto
              hasStock: "$$product.hasStock", // Indicador de si el producto tiene stock
              barcode: "$$product.barcode", // Código de barras del producto
              sku: "$$product.sku", // SKU del producto
              cost: "$$product.cost", // Costo del producto
              purchasePrice: "$$product.purchasePrice", // Precio de compra del producto
              weight: "$$product.weight", // Peso del producto
              tags: "$$product.tags", // Etiquetas del producto
              categoryId: "$$product.categoryId", // ID de la categoría del producto
              factoryCode: "$$product.factoryCode", // Código de fábrica del producto
              forSale: "$$product.forSale", // Indicador de si el producto está a la venta
              forPurchase: "$$product.forPurchase", // Indicador de si el producto está para compra
              salesChannelId: "$$product.salesChannelId", // ID del canal de ventas asociado al producto
              expAccountId: "$$product.expAccountId", // ID de la cuenta de gastos asociada al producto
              warehouseId: "$$product.warehouseId", // ID del almacén asociado al producto
              variants: "$$product.variants" // Variantes del producto
            }
          },
        },
      },
    },
  ]);

  return result[0]
};

import { Base } from "../../../common";
import { Category } from "../../categories";

export enum ProductStockState {
    OutOfStock = 0,
    InStock = 1,
    Reserved = 2,
    LowStock = 3,
    MediumStock = 4,
    HighStock = 5,
    CriticalStock = 6,
    InTransit = 7,
    TemporarilyOutOfStock = 8,
    DefectiveStock = 9,
    PendingReview = 10
  }
  
  // Function to retrieve the descriptive text of the product stock state
  export function getStockStateText(state: ProductStockState): string {
    switch (state) {
      case ProductStockState.OutOfStock:
        return "Sin stock";
      case ProductStockState.InStock:
        return "Con stock";
      case ProductStockState.Reserved:
        return "Reservedo";
      case ProductStockState.LowStock:
        return "Stock bajo";
      case ProductStockState.MediumStock:
        return "Stock medio";
      case ProductStockState.HighStock:
        return "Stock alto";
      case ProductStockState.CriticalStock:
        return "Stock critico";
      case ProductStockState.InTransit:
        return "En transito";
      case ProductStockState.TemporarilyOutOfStock:
        return "Temporalmente fuera de stock";
      case ProductStockState.DefectiveStock:
        return "Stock defectuoso";
      case ProductStockState.PendingReview:
        return "Pendiente de revisión";
      default:
        throw new Error("Invalid product stock state");
    }
  }

export interface ProductVariant {
    id?: string;
    barcode: string;
    name: string;
    sku: string;
    factoryCode: string;
    price: number;
    color: string;
    size: string;
    cost: number;
    weight: number,
    purchasePrice: number;
    stock: number;
    variantId?: string;
}

interface Note {
    title: string
color: string
content: string
}

export interface ProductRate {
    id: string;
    name: string;
    price?: number;
    tax?: number;
}

interface CustomField {
  field: string;
  value: string;
}

export interface Product extends Base {
    kind: string;
    name: string;
    slug: string;
  brand: string;
    desc: string;
    typeId: string;
    contactId: string;
    account: string;
    contactName: string;
    price: number;
    tax: number;
    total: number;
    rates: ProductRate[];
    hasStock: number;
    stock: number;
    barcode: string;
    sku: string;
    inCatalog: boolean;
    cost: number;
    notes: Note[];
    purchasePrice: number;
    purchaseTax: number;
    weight: number;
    tags: string[];
    images: string[];
    categoryId: string;
    categories: Category[];
    categoryOption: string;
    factoryCode: string;
    forSale: number;
    forPurchase: number;
    salesChannelId: string;
    expAccountId: string;
    warehouseId: string;
    variants: ProductVariant[];
    customFields: CustomField[];
}

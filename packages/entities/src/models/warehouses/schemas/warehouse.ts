import { Base } from "../../../common";

export interface WarehouseAddress {
    address: string;
    city: string;
    postalCode: number;
    province: string;
    country: string;
    countryCode: string;
}
export interface Warehouse extends Base{
 name: string;
 email: string;
 phone: string;
 mobile: string;
 address: WarehouseAddress;
 postalCode: string;
 color: string;
 icon: string;
 isPrincipal: boolean;
 account: string;
 productsCount: number;
 totalStock: number;
}
import { Base } from "../../../common";
import { Register } from "../../registers";

export interface Store extends Base {
    name: string;
    address: {
        street: string;
        city: string;
        province: string;
        country: string;
    },
    location: {
        latitude: string;
        longitude: string;
    },
    currency: string;
    warehouse: string;
    phone: string;
    account: string;
    registers?: Register[]
}

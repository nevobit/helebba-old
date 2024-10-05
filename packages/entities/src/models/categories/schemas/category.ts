import { Base } from "../../../common";

export interface Category extends Base{
    name: string;
    slug: string;
    type: string;
    color: string;
    image: string;
    options: string[];
    showInCatalog: boolean;
    account: string;
}
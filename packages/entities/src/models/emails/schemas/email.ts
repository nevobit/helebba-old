import { Base } from "../../../common";

export interface Email extends Base{
    title: string;
    content: string;
    account: string;
}

import { Base } from "../../../common";

interface Preferences {
  language: string;
  currency: string;
  timezone: string;
  dateFormat: string;
  decimalSeparator: string;
  thousendsSeparator: string;
  decimalsPrecision: number;

}
export interface Account extends Base{
  name: string;
  type: string;
  country: string;
  structure: string;
  employees: string;
  phone: string;
  isPrincipal: boolean;
  website: string;
  identification: string;
  address: string;
  city: string;
  department: string;
  lastLogin: string;
  users: string[];
  logo: string;
  postalCode: string;
  invoiceTemplate: string;
  conditions: string;
  ownerId: string;
  preferences: Preferences;
}

import { Base } from "../../../common";

export enum ContactType {
    Supplier = 'supplier',
    Debtor = 'debtor',
    Creditor = 'creditor',
    Client = 'client',
    Lead = 'lead'
}

export interface BillAddress {
    address?: string;
    city?: string;
    postalCode?: number;
    province?: string;
    country?: string;
    countryCode?: string;
    info?: string;
}

export interface Note {
    noteId: string;
    name: string;
    description: string;
    color: string;
    updatedAt: number;
    userId: string;
}

export interface ContactPerson {
    personId: string;
    name: string;
    job: string;
    phone: string;
    email: string;
    sendDocumentsByDefault: boolean;
    linkedin: string;
}

export interface ShippingAddress {
    shippingId: string;
    name: string;
    address: string;
    city: string;
    postalCode: number;
    province: string;
    country: string;
    countryCode: string;
    notes?: string;
    privateNotes?: string;
}

export interface CustomField {
    field: string;
    value: string;
}

export interface Defaults {
    salesChannel: number;
    expensesAccount: number;
    dueDays: number;
    paymentMethod: number;
    discount: number;
    language: string;
    currency: string;
    tax: string;
    retention: string;
}

export interface SocialNetworks {
    website: string;
}

export interface Contact extends Base {
    customId: string;
    account: string;
    name: string;
    code: string;
    tradeName: string;
    email: string;
    mobile: string;
    isPerson: boolean;
    phone: string;
    type: ContactType;
    iban: string;
    swift?: string;
    clientRecord: number;
    supplierRecord: number;
    billAddress?: BillAddress;
    defaults: Defaults;
    socialNetworks: SocialNetworks;
    tags: string[];
    notes: Note[];
    contactPersons: ContactPerson[];
    shippingAddresses: ShippingAddress[];
    customFields: CustomField[];
}

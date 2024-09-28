import { Base } from "../../../common";

interface Address {
    address: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
  }
  
  interface Contract {
    id: string;
    type: string;
    startDate: number;
    endDate: number | null;
    jobTitle: string;
    scheduleHours: number;
    scheduleMode: string;
    workingDays: string[];
    salary: number;
    salaryInterval: string;
    salaryPayments: number;
    salaryExtra: unknown[];
  }
  
  interface FiscalAddress {
    idNum: string;
    address: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    deadLine: boolean;
    cityOfBirth: string;
    countryOfBirth: string;
  }
  
  interface PayrollAccounts {
    global_payroll: {
      salary: number | null;
      tax: number | null;
      companytax: number | null;
      retention: number | null;
      result: number | null;
    };
  }
  
export interface Employee extends Base {
    id: string;
    helebbaUserId: string;
    name: string;
    position: string;
    lastname: string;
    dateOfBirth: string;
    nationality: string;
    socialSecurityNum: string;
    academicLevel: string;
    account: string;
    languages: string[];
    mainLanguage: string;
    code: string;
    gender: string;
    mainEmail: string;
    email: string;
    identification: string;
    phone: string;
    mobile: string;
    address: Address;
    teamIds: string[];
    workplace: string;
    iban: string;
    files: string[];
    notes: string;
    currentContract: Contract;
    reportingTo: string;
    timeOffSupervisors: string[];
    timeOffPolicyId: string;
    terminated: number | null;
    terminatedType: string | null;
    terminatedReason: string;
    fiscalResidence: unknown;
    fiscalAddress: FiscalAddress;
    title: string;
    tags: string[];
    companyPhone: string;
    customFields: unknown[];
    payrollAccounts: PayrollAccounts;
  }
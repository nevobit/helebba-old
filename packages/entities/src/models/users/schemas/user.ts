import { Base } from "../../../common";

export interface User extends Base{
    name: string;
    lastname: string;
    phone: number;
    email: string;
    password: string;
    newsletter: boolean;
    plan: string;
    photo: string;
    method: string;
    username: string;
    lastLogin: string;
    code: number;
    loginAttempts: number;
    twoFactorAuth: boolean;
    locked: boolean;
    identification: string;
    trialStartDate: Date;
    trialEndDate: Date;
    subscription: string;
    language: string;
  }
  
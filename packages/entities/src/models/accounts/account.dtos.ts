import { Account } from './schemas/account';

export type CreateAccountDto = Account;
export type UpdateAccountDto = Partial<CreateAccountDto>;
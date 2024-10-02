import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Account } from '@helebba/entities';

interface State {
    account: Partial<Account>;
    selectAccount: (account: Account) => void;
}

export const useAccountStore = create<State>()(
    persist((set) => ({
        account: {},
        selectAccount: (currentAccount: Account) => set(() => ({ account: currentAccount }))
        ,
    }), { name: "account" })
);
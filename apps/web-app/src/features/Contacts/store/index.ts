import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    contact: string;
    selectContact: (contactId: string) => void;
    getContact: () => void;

}

export const useContactStore = create<State>()(
    persist((set, get) => ({
        contact: "",
        getContact: () => {
            const { contact } = get();
            return contact;
        },
        selectContact: (contactId: string) => {
            set({ contact: contactId })
            return contactId
        },
    }), { name: "contact" })
);
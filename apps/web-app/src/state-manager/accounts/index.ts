import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    contact: string;
    selectContact: (contactId: string) => void;
}

export const useContactStore = create<State>()(
    persist((set) => ({
        contact: "",
        selectContact: (contactId: string) => {
            set({ contact: contactId })
        },
    }), { name: "contact" })
);
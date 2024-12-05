import { getContacts } from "../services"
import { useAccountStore } from "@/state-manager";
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useContacts = (page: number = 1) => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: contacts } = useQuery({
        queryKey: ["contacts", page],
        queryFn: () => getContacts({ id: account.id!, page }),
        placeholderData: keepPreviousData,

    });

    return { isLoading, contacts }
}
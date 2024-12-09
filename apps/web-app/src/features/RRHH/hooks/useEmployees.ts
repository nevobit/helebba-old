import { useAccountStore } from "@/state-manager";
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getEmployees } from "../services";

export const useContacts = (page: number = 1) => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: contacts } = useQuery({
        queryKey: ["employees", page],
        queryFn: () => getEmployees({ id: account.id!, page }),
        placeholderData: keepPreviousData,

    });

    return { isLoading, contacts }
}
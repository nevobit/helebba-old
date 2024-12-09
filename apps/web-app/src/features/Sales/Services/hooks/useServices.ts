import { useAccountStore } from "@/state-manager";
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getServices } from "../services";

export const useServices = (page: number = 1) => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: services } = useQuery({
        queryKey: ["services", page],
        queryFn: () => getServices({ id: account.id!, page }),
        placeholderData: keepPreviousData,
    });

    return { isLoading, services }
}
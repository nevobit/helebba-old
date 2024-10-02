import { getLeads } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useLeads = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: leads } = useQuery({
        queryKey: ["leads"],
        queryFn: () => getLeads(account.id!)
    });

    return { isLoading, leads }
}
import { getProductsSummary } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useProductsSummary = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: summary } = useQuery({
        queryKey: ["products/summary"],
        queryFn: () => getProductsSummary(account.id!)
    });

    return { isLoading, summary }
}
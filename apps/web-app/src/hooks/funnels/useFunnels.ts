import { getFunnels } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useFunnels = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: funnels } = useQuery({
        queryKey: ["funnels", account.id],
        queryFn: () => getFunnels(account.id!)
    });

    return { isLoading, funnels }
}
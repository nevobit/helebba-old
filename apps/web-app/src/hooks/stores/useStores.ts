import { getStores } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useStores = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: stores } = useQuery({
        queryKey: ["stores", account.id],
        queryFn: () => getStores(account.id!)
    });

    return { isLoading, stores }
}
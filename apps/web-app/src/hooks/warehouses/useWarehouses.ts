import { getWarehouses } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useWarehouses = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: warehouses } = useQuery({
        queryKey: ["warehouses"],
        queryFn: () => getWarehouses(account.id!)
    });

    return { isLoading,  warehouses }
}
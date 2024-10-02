import { getWarehousesOverview } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query";

export const useWarehousesOverview = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: overview } = useQuery({
        queryKey: ["warehouses/overview"],
        queryFn: () => getWarehousesOverview(account.id!)
    });

    return { isLoading, overview }
}
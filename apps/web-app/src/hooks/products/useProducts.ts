import { getProducts } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
    const accountId = useAccountStore((state) => state.account?.id);
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(accountId!),
    });

    return { isLoading, products }
}
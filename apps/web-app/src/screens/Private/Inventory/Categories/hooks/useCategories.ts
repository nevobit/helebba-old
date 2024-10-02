import { getCategories } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useCategories = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(account.id!)
    });

    return { isLoading, categories }
}
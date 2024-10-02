import { getExpenses } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query";

export const useExpenses = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: expenses } = useQuery({
        queryKey: ["expenses"],
        queryFn: () => getExpenses(account.id!)
    });

    return { isLoading, expenses }
}
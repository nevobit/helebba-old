import { getIncome } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query";

export const useIncome = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: income } = useQuery({
        queryKey: ["income"],
        queryFn: () => getIncome(account.id!)
    });

    return { isLoading, income }
}
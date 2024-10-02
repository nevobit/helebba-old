import { getAccounts } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const useAccounts = () => {
    const { isLoading, data: accounts } = useQuery({
        queryKey: ["accounts"],
        queryFn: getAccounts
    });

    return { isLoading, accounts }
}
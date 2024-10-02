import { Account } from "@helebba/entities";
import { useQuery } from "@tanstack/react-query"
import { getAccounts } from "../services";

export const useAccounts = () => {
    const { isLoading, data: accounts } = useQuery<Account[]>({
        queryKey: ["accounts"],
        queryFn: getAccounts
    });

    console.log(accounts)
    return { isLoading, accounts }
}
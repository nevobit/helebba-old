import { getEmployees } from "@/services/employees";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useEmployees = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: employees } = useQuery({
        queryKey: ["employees"],
        queryFn: () => getEmployees(account.id!)
    });

    return { isLoading, employees }
}
import { Employee } from "@helebba/entities";
import { getEmployeeMe } from "../services"
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"

interface Result {
    isLoading: boolean,
    isPending: boolean,
    employee: Employee,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useEmployeeMe = (): Result => {
    const { isLoading, isPending, data: employee, refetch } = useQuery({
        queryKey: ["employee/me"],
        queryFn: () => getEmployeeMe()
    });

    return { isLoading, isPending, employee, refetch }
}
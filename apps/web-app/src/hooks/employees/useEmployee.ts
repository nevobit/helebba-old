import { getEmployee } from "@/services"
import { Employee } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    employee: Employee,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useEmployee = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: employee, refetch } = useQuery({
        queryKey: ["employee", id],
        queryFn: () => getEmployee(id!)
    });

    return { isLoading, isPending, employee, refetch }
}
import { getWarehouse } from "@/services"
import { Warehouse } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    warehouse: Warehouse,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useWarehouse = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: warehouse, refetch } = useQuery({
        queryKey: ["warehouse", id],
        queryFn: () => getWarehouse(id!)
    });

    useEffect(() => {
        refetch()
    }, [refetch])

    return { isLoading, isPending, warehouse, refetch }
}
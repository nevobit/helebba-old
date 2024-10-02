import { getFunnel } from "@/services"
import { Funnel } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    funnel: Funnel,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useFunnel = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: funnel, refetch } = useQuery({
        queryKey: ["funnel", id],
        queryFn: () => getFunnel(id!)
    });

    return { isLoading, isPending, funnel, refetch }
}
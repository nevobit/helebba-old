import { getStore } from "@/services"
import { Store } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    store: Store,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useStore = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: store, refetch } = useQuery({
        queryKey: ["store", id],
        queryFn: () => getStore(id!)
    });

    return { isLoading, isPending, store, refetch }
}
import { getSubscription } from "@/services/subscriptions";
import { Subscription } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"

interface Result {
    isLoading: boolean,
    isPending: boolean,
    subscription: Subscription,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useSubscription = (): Result => {
    const { isLoading, isPending, data: subscription, refetch } = useQuery({
        queryKey: ["subscriptions"],
        queryFn: getSubscription
    });

    return { isLoading, isPending, subscription, refetch }
}
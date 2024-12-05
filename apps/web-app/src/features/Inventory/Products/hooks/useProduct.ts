import { getProduct } from "@/services"
import { Product } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    product: Product,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useProduct = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: product, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id!)
    });

    return { isLoading, isPending, product, refetch }
}
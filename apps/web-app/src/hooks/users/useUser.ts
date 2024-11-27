import { getCurrentUser } from "@/services";
import { User } from "@helebba/entities";
import { useSuspenseQuery } from "@tanstack/react-query"

export const useUser = () => {
    const { isLoading, data: user } = useSuspenseQuery<User>({
        queryKey: ["users"],
        queryFn: getCurrentUser
    });

    return { isLoading, user }
}
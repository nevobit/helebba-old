import { getCurrentUser } from "@/services";
import { User } from "@helebba/entities";
import { useQuery } from "@tanstack/react-query"

export const useUser = () => {
    const { isLoading, data: user } = useQuery<User>({
        queryKey: ["users"],
        queryFn: getCurrentUser
    });

    return { isLoading, user }
}
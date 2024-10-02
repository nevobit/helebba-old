import { getInvitations } from "@/services/invitations";
import { useQuery } from "@tanstack/react-query"

export const useInvitations = (email: string) => {
    const { isLoading, data: invitations } = useQuery({
        queryKey: ["invitations", email],
        queryFn: () => getInvitations(email)
    });

    return { isLoading, invitations }
}
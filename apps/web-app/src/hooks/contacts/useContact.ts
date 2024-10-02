import { getContact } from "@/services"
import { useContactStore } from "@/state-manager";
import { Contact } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"

interface Result {
    isLoading: boolean,
    isPending: boolean,
    contact: Contact,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useContact = (): Result => {
    const contactId = useContactStore((state) => state.contact);
    const { isLoading, isPending, data: contact, refetch } = useQuery({
        queryKey: ["contact"],
        queryFn: () => getContact(contactId!)
    });

    return { isLoading, isPending, contact, refetch }
}
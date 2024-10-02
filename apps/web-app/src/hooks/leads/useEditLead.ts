import { updateLead } from "@/services"
import { Lead, Result } from "@helebba/entities";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useEditLead = () => {

    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateLead,
        onMutate: async (card) => {
            await queryClient.cancelQueries({ queryKey: ['leads']});

            const data = queryClient.getQueryData<Result<Lead>>(['leads'])
            if(!data) return;

            const newCards = data.items.map((item: Lead) => {
              console.log(card)
              console.log(item)
              return item.id === card.id ? card : item
          });

            const newPreviousData: Result<Partial<Lead>> = {
                ...data,
                items: newCards
            }
            queryClient.setQueryData(['leads'], newPreviousData);
            
            return { data: newPreviousData }
        },
        
        onError: (__, _, context) => {
            if (context?.data) {
              queryClient.setQueryData(
                ["leads"],
                context.data
              );
            }
          },
          onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['leads']})
          },
    })

    return { isEditing: isPending, editLead: mutate }
}
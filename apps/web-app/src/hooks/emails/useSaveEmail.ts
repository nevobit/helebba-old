import { saveEmailApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveEmail = () => {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: saveEmail } = useMutation({
    mutationFn: saveEmailApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["emails"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, saveEmail };
};
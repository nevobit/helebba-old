import { sendEmailApi } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendmail = () => {
  const queryClient = useQueryClient();
  
  const { isPending: isSending, mutate: sendEmail } = useMutation({
    mutationFn: sendEmailApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["emails/send"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isSending, sendEmail };
};

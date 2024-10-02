import { updateDocument } from '@/services';
import { useMutation } from '@tanstack/react-query';

export const useEditDocument = () => {
  const { isPending, mutate } = useMutation({
    mutationFn: updateDocument,
    onError: (err) => console.log(err),
  });

  return { isEditing: isPending, editDocument: mutate };
};

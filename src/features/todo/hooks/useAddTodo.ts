import { addTodo } from "../services/addTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    // onSuccess: () => {
    //   if (queryKeys) {
    //     queryClient.invalidateQueries({ queryKey: [queryKeys.todos.list] });
    //   }
    // },
  });
};

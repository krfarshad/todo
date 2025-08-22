import { queryKeys } from "@/config";
import { editTodo } from "../services/editTodo";
import usePostAPI from "@/hooks/usePost";

export const useEditTodo = () => {
  return usePostAPI({
    callback: editTodo,
    // queryKeys: [queryKeys.todos.list],
  });
};

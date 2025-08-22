import usePostAPI from "@/hooks/usePost";
import { deleteTodo as removeTodo } from "../services/deleteTodo";

type Props = {
  id: number;
};

export const useDeleteTodo = (props: Props) => {
  const { id } = props;
  return usePostAPI({
    callback: removeTodo,
    // queryKeys: [queryKeys.todos.list],
  });
};

import { queryKeys } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../services/getTodos";

export const useTodos = () => {
  return useQuery({
    queryKey: [queryKeys.todos.list],
    queryFn: getTodos,
  });
};

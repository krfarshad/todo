import { apiUrls } from "@/config";
import { apiModel, ApiResponse } from "@/utils";
import { TodoResponse } from "../types";

type Props = {
  id: number;
  values: Partial<TodoResponse>;
};

export const editTodo = async (
  props: Props
): Promise<ApiResponse<TodoResponse>> => {
  const { id, values } = props;

  return await apiModel.put(apiUrls.todos.todo(id), { ...values });
};

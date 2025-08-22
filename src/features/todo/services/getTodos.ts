import { apiUrls } from "@/config";
import { apiModel, ApiResponse } from "@/utils";
import { TodoResponse } from "../types";

export const getTodos = async (): Promise<ApiResponse<TodoResponse>> => {
  return await apiModel.get(apiUrls.todos.list);
};

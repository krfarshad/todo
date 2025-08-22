import { apiUrls } from "@/config";
import { apiModel } from "@/utils";
import { TodoResponse } from "../types";

type Props = {
  values: { userId: number; todo: string };
};

export const addTodo = async (props: Props): Promise<TodoResponse> => {
  const { values } = props;

  return await apiModel.post(apiUrls.todos.add, { ...values });
};

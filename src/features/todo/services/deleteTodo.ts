import { apiUrls } from "@/config";
import { apiModel, ApiResponse } from "@/utils";

type Props = {
  id: number;
};

type DeleteResponse = {
  completed: boolean;
  deletedOn: string;
  id: number;
  isDeleted: boolean;
  todo: string;
  userId: number;
};
export const deleteTodo = async (
  props: Props
): Promise<ApiResponse<DeleteResponse>> => {
  const { id } = props;

  return await apiModel.delete(apiUrls.todos.todo(id));
};

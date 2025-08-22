import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ConfirmDelete from "./ConfirmDelete";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteTodo } from "../../store/todoSlice";
import { useAppDispatch } from "@/store";

type Props = {
  id: number | string;
};

export const DeleteTodo = (props: Props) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const handleDelete = async () => {
    dispatch(deleteTodo(id));
    toast.success("Todo item deleted successfully");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ConfirmDelete onConfirm={handleDelete}>
            <Button className="cursor-pointer" variant="ghost" size="icon">
              <Trash2 className="h-3 w-3 text-red-600" />
            </Button>
          </ConfirmDelete>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete Todo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

import { Checkbox } from "@/components/ui/checkbox";
import { TodoResponse } from "../../types";
import { useEditTodo } from "../../hooks/useEditTodo";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store";
import { updateTodo } from "../../store/todoSlice";
import { toast } from "sonner";

type Props = {
  todo: TodoResponse;
};

export const ToggleTodo = (props: Props) => {
  const { todo } = props;

  const { mutateAsync } = useEditTodo();
  const dispatch = useAppDispatch();
  const toggleTodoItem = async (checked: boolean | string) => {
    // mutateAsync({ id: todo.id, values: { completed: !!checked } });
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    toast.info("Todo updated sucessfully");
  };

  return (
    <>
      <Checkbox
        className="cursor-pointer hover:border-gray-600 transition-all mt-[3px] "
        id={`cb-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={(checked) => toggleTodoItem(checked)}
      />
      <span
        onClick={() => toggleTodoItem(!todo.completed)}
        className={cn(
          "font-medium cursor-pointer text-sm",
          todo.completed && "line-through text-muted-foreground"
        )}
      >
        {todo.todo}
      </span>
    </>
  );
};

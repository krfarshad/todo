"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { DeleteTodo } from "../Actions/DeleteTodo";
import { ToggleTodo } from "../Actions/ToggleTodo";
import { TodoResponse } from "../../types";
import { ListRestart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TodoItemProps {
  todo: TodoResponse;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      style={style}
      {...attributes}
      className={cn(
        "p-3 mb-3.5 rounded-sm transition-all hover:shadow-md",
        isDragging && "opacity-50"
      )}
    >
      <CardContent className="flex items-center justify-between gap-2 px-0">
        <div className="flex-1">
          <div className="flex gap-1">
            <ToggleTodo todo={todo} />
          </div>
          <span className="text-xs text-muted-foreground">
            User #{todo.userId ?? 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <DeleteTodo id={todo.id} />
          <Button
            variant="ghost"
            size="icon"
            ref={setNodeRef}
            {...listeners}
            className=" cursor-grabbing"
          >
            <ListRestart />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

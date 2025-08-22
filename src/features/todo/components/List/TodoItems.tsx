"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { reorder, setTodos } from "../../store/todoSlice";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../TodoItem";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TodoSearch from "../Actions/TodoSearch";
import { TabsTriggers } from "./TabsTriggers";

export default function TodoList() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector((s) => s.todos.items);
  const { data, isLoading, isError } = useTodos();
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
    "all"
  );

  useEffect(() => {
    if (data?.todos && todos.length === 0) dispatch(setTodos(data.todos));
  }, [data?.todos, todos.length, dispatch]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = todos.findIndex((t) => t.id === active.id);
    const newIndex = todos.findIndex((t) => t.id === over.id);

    dispatch(reorder({ from: oldIndex, to: newIndex }));
  };

  const filteredTodos = todos.filter((t) => {
    const matchesFilter =
      filter === "completed"
        ? t.completed
        : filter === "uncompleted"
          ? !t.completed
          : true;

    const matchesSearch = t.todo
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (isLoading)
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-sm" />
        ))}
      </div>
    );

  if (isError) return <div>Failed to load todos.</div>;

  return (
    <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
      <TabsTriggers />
      <TabsContent value={filter}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <ScrollArea className="h-[600px] rounded-md border p-4 max-h-[60vh]">
            <TodoSearch onSearch={setSearchQuery} />
            <SortableContext
              items={filteredTodos.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              {filteredTodos.map((t) => (
                <TodoItem key={t.id} todo={t} />
              ))}
            </SortableContext>
          </ScrollArea>
        </DndContext>
      </TabsContent>
    </Tabs>
  );
}

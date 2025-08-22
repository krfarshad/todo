"use client";
import TodoForm from "../components/Actions/TodoForm";
import TodoList from "../components/List/TodoItems";

export const TaskBoardPage = () => {
  return (
    <main className="max-w-full w-xl mx-auto p-6 bg-white rounded-sm">
      <h1 className="text-xl md:text-3xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
};

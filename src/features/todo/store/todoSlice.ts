import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoResponse } from "../types";

export type TodosState = {
  items: TodoResponse[];
};

const initialState: TodosState = { items: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TodoResponse[]>) {
      state.items = action.payload;
    },
    addTodo(state, action: PayloadAction<TodoResponse>) {
      state.items.unshift(action.payload);
    },
    deleteTodo(state, action: PayloadAction<number | string>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<TodoResponse>) {
      const i = state.items.findIndex((t) => t.id === action.payload.id);
      if (i !== -1) state.items[i] = action.payload;
    },
    toggleTodo(state, action: PayloadAction<number | string>) {
      const t = state.items.find((x) => x.id === action.payload);
      if (t) t.completed = !t.completed;
    },
    reorder(state, action: PayloadAction<{ from: number; to: number }>) {
      const { from, to } = action.payload;
      const arr = state.items;
      const [moved] = arr.splice(from, 1);
      arr.splice(to, 0, moved);
    },
  },
});

export const {
  setTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
  reorder,
} = todosSlice.actions;
export default todosSlice.reducer;

import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Todo } from "@/types";

const initialState: {
  todos: Todo[];
} = {
  todos: [],
};

const useTodosStore = create(
  immer(
    combine(initialState, (set) => ({
      actions: {
        crateTodo: (content: string) => {
          set((state) => {
            state.todos.push({
              id: new Date().getTime(),
              content: content,
            });
          });
        },
        deleteTodo: (targetId: number) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== targetId);
          });
        },
      },
    })),
  ),
);

// 커스텀훅
export const useTodos = () => {
  const todos = useTodosStore((store) => store.todos);
  return todos;
};

export const useCreateTodo = () => {
  const createTodo = useTodosStore((store) => store.actions.crateTodo);
  return createTodo;
};

export const useDeleteTodo = () => {
  const deleteTodo = useTodosStore((store) => store.actions.deleteTodo);
  return deleteTodo;
};

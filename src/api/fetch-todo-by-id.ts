import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function fetchTodoById(id: string) {
  const responses = await fetch(`${API_URL}/todos/${id}`);
  if (!responses.ok) throw new Error("Fetch Failed");

  const data:Todo = await responses.json();
  return data;
}

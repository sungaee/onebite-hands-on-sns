import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST"|"DETAIL") {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todo.detail(id),
    enabled:type==='DETAIL',
    staleTime: 1000, // 데이터가 frash 상태일때만 유효
    gcTime: 5000, // 데이터가 inactive 일때만 동작

  });
}

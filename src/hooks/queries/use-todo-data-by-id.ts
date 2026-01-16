import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
    
    staleTime: 300000, // 데이터가 frash 상태일때만 유효
    gcTime: 5000, // 데이터가 inactive 일때만 동작

    // refetchOnMount: false, //Mount시점에는 데이터가 스테일 상태가 되도 리패칭이 되지 않음.
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
    // refetchInterval: 1000, //1초마다 리패칭
  });
}

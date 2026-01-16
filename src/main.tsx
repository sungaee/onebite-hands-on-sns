import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0, // 기본적으로 캐시를 최소화하여 동작하는게 편하다. 기본적으로 모든 cash데이터가 서버로부터 불러와지자마자 바로 stale상태로 전환되게 만들어서 언제나 다시 리패칭되도록 설정
      gcTime: 5 * 60 * 1000, // 5분 설정. 캐시데이터를 메모리에서 제거하는 시간을 의미. 

      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);

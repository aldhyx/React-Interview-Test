import QueryClientProvider from "@/components/provider/query-client.provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider>
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderDefault,
} from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider = (props: PropsWithChildren) => {
  return (
    <QueryClientProviderDefault client={queryClient}>
      {props.children}
    </QueryClientProviderDefault>
  );
};

export default QueryClientProvider;

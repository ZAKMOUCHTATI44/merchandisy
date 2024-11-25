"use client";
import React from "react";
import store from "@/redux/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default LayoutProvider;

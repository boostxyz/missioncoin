"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { cookieToInitialState, WagmiProvider } from "wagmi";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { getConfig } from "@/app/config";

type Props = {
  children: ReactNode;
  cookie: string | null;
};

export function Providers({ children, cookie }: Props) {
  const initialState = cookieToInitialState(getConfig(), cookie);
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

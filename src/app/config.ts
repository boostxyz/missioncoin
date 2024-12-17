"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { cookieStorage, createStorage, http } from "wagmi";

import { sepolia } from "wagmi/chains";

export const getConfig = () =>
  getDefaultConfig({
    appName: "missioncoin",
    projectId: "5d53ba0c67b51acd824643146cd59a45",
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(
        `https://eth-sepolia.g.alchemy.com/v2/KEmYz2mYn3K6mKRLxL5m3fJk8M1Sa2yL`
      ),
    },
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
  });

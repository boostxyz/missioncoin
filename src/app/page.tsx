"use client";

import { useCreateCoin } from "@/app/create-coin";
import { Button } from "@boostxyz/boost-ui/components/Button";

export default function Home() {
  const { mutate: createCoin } = useCreateCoin();

  const onClick = () => {
    createCoin({
      tokenName: "Mission Coin",
      tokenSymbol: "MC",
      initialSupply: 1000000,
    });
  };

  return (
    <main className="py-4 h-full">
      <Button onClick={onClick}>Create Coin</Button>
    </main>
  );
}

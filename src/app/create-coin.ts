import { useMutation } from "@tanstack/react-query";
import { useAccount, useDeployContract } from "wagmi";
import { z } from "zod";

export function useCreateCoin() {
  const { address } = useAccount();
  const { deployContractAsync } = useDeployContract();

  return useMutation({
    mutationFn: async ({
      tokenName,
      tokenSymbol,
      initialSupply,
    }: {
      tokenName: string;
      tokenSymbol: string;
      initialSupply: number;
    }) => {
      const response = await fetch("/api/compile", {
        method: "POST",
        body: JSON.stringify({
          tokenName,
          tokenSymbol,
          initialSupply,
        }),
      });

      const { abi, bytecode } = z
        .object({
          abi: z.array(z.any()),
          bytecode: z.string(),
          contractSource: z.string(),
        })
        .parse(await response.json());

      console.log({ abi, bytecode });
      const hash = await deployContractAsync({
        abi: abi,
        account: address,
        bytecode: bytecode as `0x${string}`,
        args: [tokenName, tokenSymbol, initialSupply],
      });

      return hash;
    },
  });
}

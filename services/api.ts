import * as React from "react";
import {
  type PublicClient,
  usePublicClient,
  type WalletClient,
  useWalletClient,
} from "wagmi";
import { providers } from "ethers";
import { type HttpTransport } from "viem";
import { EntryPoint, EntryPoint__factory } from "../typechain-types";

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network)
      )
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = usePublicClient({ chainId });
  return React.useMemo(
    () => publicClientToProvider(publicClient),
    [publicClient]
  );
}

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}

export const signUserOpVerifyingPaymaster = async (
  userOp: any,
  paymasterUrl: string
): Promise<any> => {
  try {
    const resp = await fetch(paymasterUrl, {
      method: "POST",
      body: JSON.stringify({
        userOp,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const paymasterResp = await resp.json();
    return paymasterResp;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const txnState = (
  state: string,
  stateFns: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  stateFns(state);
};

export const getUserOpReceipt = async (
  userOpHash: string,
  timeout = 30000,
  interval = 5000,
  entrypoint: any,
  fromBlock: number
): Promise<string | null> => {
  const endtime = Date.now() + timeout;
  while (Date.now() < endtime) {
    const events = await entrypoint.queryFilter(
      entrypoint.filters.UserOperationEvent(userOpHash),
      fromBlock,
      "latest"
    );
    console.log(events);
    if (events.length > 0) {
      return events[0].transactionHash;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  return null;
};

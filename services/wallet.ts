import {
  EntryPoint__factory,
} from "@zerodevapp/contracts";
import { ethers, Signer } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";
import { printOp } from "../utils/utils";
import { getHttpRpcClient } from "../utils/utils";
import { getPaymaster } from "./paymaster";
import { txnState, getUserOpReceipt } from "./api";

const paymasterURL = process.env.NEXT_PUBLIC_PAYMASTER_URL as string;
const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string;
const entryPointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string;
const factoryAddress = process.env.NEXT_PUBLIC_ACCOUNT_FACTORY as string;

export const getSmartAccount = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(paymasterURL);
  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress,
    factoryAddress,
    paymasterAPI,
  });
  return api;
};

export const getSmartAccountAPI = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(paymasterURL);
  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress,
    factoryAddress: factoryAddress,
    paymasterAPI,
  });
  return api;
};

export const sendNewTransaction = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer,
  stateFns: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  txnState("creating new userOp", stateFns);

  const paymasterAPI = await getPaymaster(paymasterURL);

  const entrypointView = EntryPoint__factory.connect(entryPointAddress, signer);

  txnState(
    "waiting for verifying paymaster to sponsor the transaction request...",
    stateFns
  );

  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress,
    factoryAddress,
    paymasterAPI,
  });

  // Send "Hello World" to a random address
  const op = await api.createSignedUserOp({
    target: "0x83fc020d7681513263042e6c2c93d0137318dc0d",
    data: "0x48656c6c6f20776f726c64",
    gasLimit: 3000000,
  });
  const userOp = await printOp(op);
  console.log("signed UserOp");
  console.log(userOp);
  const client = await getHttpRpcClient(
    provider,
    bundlerURL,
    entryPointAddress
  );

  txnState("Sending transaction to bundler...", stateFns);

  const uoHash = await client.sendUserOpToBundler(JSON.parse(userOp));
  txnState(`userOp hash: ${uoHash}`, stateFns);
  console.log(`userOp hash: ${uoHash}`);
  txnState("waiting for transaction confirmation", stateFns);
  const fromBlock = (await provider.getBlockNumber()) - 1000;
  const chainId = (await provider.getNetwork()).chainId;
  const queryFromBlock = chainId === 31337 ? 0 : fromBlock;
  let txnHash = (await getUserOpReceipt(
    uoHash,
    180000,
    3000,
    entrypointView,
    queryFromBlock
  )) as string;
  txnState(`Transaction successful✅, txnHash: ${txnHash}`, stateFns);
  return txnHash;
};

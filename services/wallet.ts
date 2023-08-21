import {
  UserOperationStruct,
  EntryPoint__factory,
} from "@zerodevapp/contracts";
import { ethers, Signer } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";
import { encodeERC20Approval, printOp } from "../utils/utils";
import { getHttpRpcClient } from "../utils/utils";
import { getPaymaster } from "./paymaster";
import { txnState, getUserOpReceipt } from "./api";
import { EntryPoint } from "../typechain-types";
import "dotenv/config";

const paymasterURL = process.env.NEXT_PUBLIC_PAYMASTER_URL as string;
const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string;
const entrypointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string;
const factoryAddress = process.env.NEXT_PUBLIC_ACCOUNT_FACTORY as string;

export const getSmartAccount = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(paymasterURL);
  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress: entrypointAddress,
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

  const entrypointView = EntryPoint__factory.connect(entrypointAddress, signer);

  txnState(
    "waiting for verifying paymaster to sponsor the transaction request...",
    stateFns
  );

  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress: entrypointAddress,
    factoryAddress: factoryAddress,
    paymasterAPI,
  });

  // Send "Hello World" to a random address
  const op = await api.createSignedUserOp({
    target: "0x59E1449De955CeF82e7D6D510257b7E12f425Fa7",
    data: "0x48656c6c6f20776f726c64",
    gasLimit: 3000000,
  });
  const userOp = await printOp(op);
  console.log("signed UserOp");
  console.log(userOp);
  const client = await getHttpRpcClient(
    provider,
    bundlerURL,
    entrypointAddress
  );

  txnState("Sending transaction to bundler...", stateFns);

  const uoHash = await client.sendUserOpToBundler(JSON.parse(userOp));
  txnState(`userOp hash: ${uoHash}`, stateFns);
  console.log(`userOp hash: ${uoHash}`);
  txnState("waiting for transaction confirmation", stateFns);
  const fromBlock = (await provider.getBlockNumber()) - 1000;
  let txnHash = (await getUserOpReceipt(
    uoHash,
    180000,
    3000,
    entrypointView,
    fromBlock
  )) as string;
  txnState(`Transaction successful✅, txnHash: ${txnHash}`, stateFns);
  return txnHash;
};

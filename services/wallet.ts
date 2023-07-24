import {
  UserOperationStruct,
  EntryPoint__factory,
} from "@zerodevapp/contracts";
import { ethers, Signer } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";
import { encodeERC20Approval, printOp } from "../utils/utils";
import { getHttpRpcClient } from "../utils/utils";
import { getPaymaster } from "./paymaster";
import "dotenv/config";
import { txnState, getUserOpReceipt } from "./api";
import { EntryPoint } from "../typechain-types";

export const getSmartAccount = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(process.env.PAYMASTER_URL as string);
  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
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

  const paymasterAPI = await getPaymaster("http://127.0.0.1:4000/api/sign/");

  const entrypointView = EntryPoint__factory.connect(
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    signer
  );

  txnState(
    "waiting for verifying paymaster to sponsor the transaction request...",
    stateFns
  );

  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
    paymasterAPI,
  });

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
    "http://localhost:3001/rpc",
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
  );

  txnState("Sending transaction to bundler...", stateFns);

  const uoHash = await client.sendUserOpToBundler(JSON.parse(userOp));
  txnState(`userOp hash: ${uoHash}`, stateFns);
  console.log(`userOp hash: ${uoHash}`);
  txnState("waiting for transaction confirmation", stateFns);
  const fromBlock = await provider.getBlockNumber() - 1000;
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

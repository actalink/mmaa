import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { usePublicClient, useWalletClient } from "wagmi";
import { useEthersProvider, useEthersSigner } from "../services/api";
import { useEffect, useState } from "react";
import { getSmartAccount, sendNewTransaction } from "../services/wallet";
import { ethers } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";

const Wallet = () => {
  const { address, isConnected } = useAccount();
  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const [smartAccount, setSmartAccount] = useState<
    SimpleAccountAPI | undefined
  >(undefined);
  const [smartAccountAddress, setSmartAccountAddress] = useState<
    string | undefined
  >(undefined);
  const [isDeployed, setIsDeployed] = useState<boolean>(false);
  const [txnState, setTxnState] = useState<string | undefined>(undefined);
  const getSmartAccountAddress = (api: SimpleAccountAPI) => {
    api.getAccountAddress().then((address) => {
      setSmartAccountAddress(address);
    });
  };

  const isAccountDeployed = (api: SimpleAccountAPI) => {
    api.getInitCode().then((initcode) => {
      if (initcode === "0x") {
        setIsDeployed(true);
      }
    });
  };

  const getWallet = () => {
    if (address !== undefined && isConnected) {
      getSmartAccount(
        provider as ethers.providers.JsonRpcProvider,
        signer as ethers.providers.JsonRpcSigner
      )
        .then((api) => {
          setSmartAccount(api);
          getSmartAccountAddress(api);
          isAccountDeployed(api);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getWallet();
  }, [address, isConnected, provider, signer]);

  const sendTransaction = () => {
    if (signer !== undefined) {
      sendNewTransaction(
        provider as ethers.providers.JsonRpcProvider,
        signer as ethers.providers.JsonRpcSigner,
        setTxnState
      )
        .then((txnHash) => {
          if (txnHash) {
            getWallet();
          }
        })
        .catch((err) => {
          setTxnState(JSON.stringify(err));
        });
    } else {
      setTxnState("Signer is undefined...");
    }
  };

  return (
    <div className=" w-full flex flex-col justify-start items-center">
      <div className="mx-8 my-8 flex flex-col gap-4 w-1/2">
        <div className="flex justify-between items-center gap-2 px-2 py-2 bg-red-400 rounded-lg">
          <span className="py-2 px-10 bg-slate-500 rounded-lg text-white">
            Owner
          </span>
          <span>{address}</span>
        </div>
        <div className="flex justify-between items-center gap-2 px-2 py-2 bg-red-400 rounded-lg wrap">
          <span className="py-2 px-10 bg-slate-500 rounded-lg text-white">
            Smart account
          </span>
          <span>{smartAccountAddress}</span>
        </div>
        <div className="flex justify-between items-center gap-2 px-2 py-2 bg-red-400 rounded-lg">
          <span className="py-2 px-10 bg-slate-500 rounded-lg text-white">
            Status
          </span>
          <span>{isDeployed ? "True" : "False"}</span>
        </div>
        <div className="flex justify-center items-center gap-2 px-2 py-2 rounded-lg">
          <button
            className="py-2 px-10 bg-slate-500 rounded-lg text-white"
            onClick={(e) => {
              sendTransaction();
            }}
          >
            Send transaction
          </button>
        </div>
        {txnState !== undefined && <span>{txnState}</span>}
      </div>
    </div>
  );
};

export default Wallet;

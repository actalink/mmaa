import Image from "next/image";
import { useAccount } from "wagmi";
import { useEthersProvider, useEthersSigner } from "../services/api";
import { useEffect, useState } from "react";
import {
  getSmartAccount,
  sendNewTransaction,
  getSmartAccountAPI,
} from "../services/wallet";
import { ethers } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";
import Cubes from "../assets/cubes.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
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
          isAccountDeployed(api);
          getSmartAccountAddress(api);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    // If not already deployed account
    getSmartAccountAPI(
      provider as ethers.providers.JsonRpcProvider,
      signer as ethers.providers.JsonRpcSigner
    ).then((api) => {
      api.getInitCode().then((initcode) => {
        if (initcode === "0x") {
          setIsDeployed(true);
          getWallet();
        } else {
          sendTransaction();
        }
      });
    });
    // Send Transaction
    // Else show account
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
            console.log("calling getWallet.");
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
    <>
      <Navbar
        smartWallet={
          isDeployed && smartAccountAddress && smartAccountAddress.length > 0
            ? smartAccountAddress
            : ""
        }
      />
      <div className="flex justify-center items-start">
        {/* <Main /> */}
        <div className="bg-violet-100 w-fit pb-12 px-28 rounded-3xl flex flex-col justify-start items-center text-center">
          <div>
            <Image src={Cubes} alt="cubes" height={300} width={300} />
          </div>
          <div className="flex flex-col items-center text-lg">
            <p className="mb-4 font-bold">
              Unlock the potential of Web3 payments with{" "}
              <span className="text-violet-500">
                Actalink Abstraction dApp.
              </span>
            </p>
            <ul className="list-disc text-left">
              <li>Use your trusted MetaMask Wallet as SSO</li>
              <li>Create new Smart Wallet</li>
              <li>Get unified experience with seamless integration</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;

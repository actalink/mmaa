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
import Welcomepage from "./Welcomepage";
import Successpage from "./Successpage";

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
      console.log("address =====>>>: ", address);
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
    if (signer !== undefined && isConnected) {
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
    if (isConnected && signer !== undefined) {
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
    }
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
          smartAccountAddress && smartAccountAddress.length > 0
            ? smartAccountAddress
            : ""
        }
      />
    </>
  );
};

export default Main;

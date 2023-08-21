import Image from "next/image";
import { useAccount } from "wagmi";
import { useEthersProvider, useEthersSigner } from "../services/api";
import { useEffect, useState } from "react";
import { getSmartAccount, sendNewTransaction, getSmartAccountAPI } from "../services/wallet";
import { ethers } from "ethers";
import { SimpleAccountAPI } from "@zerodevapp/sdk/dist/src/SimpleAccountAPI";
import Cubes from "../assets/cubes.png";
import Navbar from "./Navbar";

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
  console.log("SmartAccountAddress :: -----> ", smartAccountAddress);
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
    getWallet();
    // If not already deployed account
    getSmartAccountAPI(
      provider as ethers.providers.JsonRpcProvider,
      signer as ethers.providers.JsonRpcSigner
    ).then((api) => {
      api.getInitCode().then((initcode) => {
        if (initcode === "0x") {
          setIsDeployed(true);
        } else {
          sendTransaction();
        }
      });
    })
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
      <Navbar smartWallet={(isDeployed && smartAccountAddress && smartAccountAddress.length > 0) ? smartAccountAddress : ""} />
      <div className="flex justify-center items-start">
        {/* <Main /> */}
        <div className="bg-violet-100 w-fit pb-12 px-28 rounded-3xl flex flex-col justify-start items-center text-center">
          <div>
            <Image src={Cubes} alt="cubes" height={300} width={300} />
          </div>
          <div className="text-lg font-thin">
            <p className="mb-4">
              Unlock the potential of web3 payments with Actalink account
              abstraction protocol.
            </p>
            <p>Benefit from Smart Wallets in one unified experience.</p>
            <p>Log-in with MetaMask Wallet as SSO (private keys)</p>
            <p className="mb-4">and enjoy the seamless experience.</p>
            <p>
              Sign up/in the Abstraction Wallet with the guarantee of safety &
              security
            </p>
            <p className="mb-4">
              provided by MetaMask ecosystem. &quot;Create Smart Wallet &quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

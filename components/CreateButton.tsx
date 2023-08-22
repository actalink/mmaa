import React, { useEffect, useState } from "react";
import { sendNewTransaction } from "../services/wallet";
import { useEthersProvider, useEthersSigner } from "../services/api";
import { providers } from "ethers";


const CreateButton = () => {
  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const [txnState, setTxnState] = useState<string | undefined>(undefined);
  function handleCreateWallet() {
    console.log("Create Wallet");
    sendNewTransaction(
      provider as providers.JsonRpcProvider,
      signer as providers.JsonRpcSigner,
      setTxnState
    ).then((txnHash) => {
      console.log(txnHash);
      console.log(txnState)
    })
  }
  return (
    <button
      onClick={handleCreateWallet}
      className="bg-violet-500 py-1 px-4 font-normal text-xl rounded-full text-white">
        Create Smart Wallet
    </button>
  );
};

export default CreateButton;

import React from "react";
import Image from "next/image";
import Cubes from "../assets/cubes.png";
import Footer from "./Footer";

const Welcomepage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Main /> */}
      <div className="bg-violet-100 w-fit pb-12 px-28 rounded-3xl flex flex-col justify-start items-center text-center">
        <div>
          <Image src={Cubes} alt="cubes" height={300} width={300} />
        </div>
        <div className="flex flex-col items-center text-lg">
          <p className="mb-4 font-bold">
            Unlock the potential of Web3 payments with{" "}
            <span className="text-violet-500">Actalink Abstraction dApp.</span>
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
  );
};

export default Welcomepage;

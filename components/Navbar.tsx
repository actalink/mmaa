import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Connectbutton from "./Connectbutton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 my-6 outline-none border-0">
      <Image src={Logo} alt="logo" width={170} height={80} />
      <Connectbutton />
    </div>
  );
};

export default Navbar;

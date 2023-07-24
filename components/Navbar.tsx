import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 outline-none border-0">
      <h1 className="text-3xl font-medium">
        A<span className="text-acta-violet">c</span>talink MM
      </h1>
      <ConnectButton />
    </div>
  );
};

export default Navbar;

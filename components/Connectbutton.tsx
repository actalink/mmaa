import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Connectbutton = ({ smartWallet }: { smartWallet: string }) => {
  console.log(smartWallet);
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-violet-500 py-1 px-4 font-normal text-xl rounded-full text-white"
                  >
                    Create Smart Wallet using Metamask
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-red-500 py-1 px-4 font-bold text-xl rounded-full text-white"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    className="border order-solid border-violet-500 py-1 px-4 font-normal text-xl rounded-full text-violet-500"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 25,
                          height: 25,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 25, height: 25 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="border order-solid border-violet-500 py-1 px-4 font-normal text-xl rounded-full text-violet-500"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                  {smartWallet.length > 0 ? (
                    <div className="relative flex flex-col justify-start items-center">
                      <button
                        onClick={console.log} // copy address to clipboard
                        type="button"
                        className="border order-solid border-violet-500 py-1 px-4 font-normal text-xl rounded-full text-violet-500"
                      >
                        {`${smartWallet.slice(0, 4)}...${smartWallet.slice(
                          -4
                        )}`}
                      </button>
                      <div className="absolute -bottom-8 flex justify-center items-center gap-2">
                        <p>Smart wallet</p>
                        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={console.log} // copy address to clipboard
                      type="button"
                      className="flex justify-start items-center border border-solid border-violet-500 py-1 px-4 font-normal text-xl rounded-full text-violet-500"
                    >
                      <svg
                        aria-hidden="true"
                        className="animate-spin h-5 w-5 mr-3 text-white fill-violet-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span>Processing...</span>
                    </button>
                  )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Connectbutton;

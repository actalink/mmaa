import { HttpRpcClient } from "@account-abstraction/sdk/dist/src/HttpRpcClient";
import { SimpleAccount, UserOperationStruct } from "@zerodevapp/contracts";
import { ethers } from "ethers";
import { hexValue } from "ethers/lib/utils";
import { ERC20 } from "../typechain-types";

export function toJSON(op: Partial<UserOperationStruct>): any {
  return ethers.utils.resolveProperties(op).then((userOp) =>
    Object.keys(userOp)
      .map((key) => {
        let val = (userOp as any)[key];
        if (typeof val !== "string" || !val.startsWith("0x")) {
          val = ethers.utils.hexValue(val);
        }
        return [key, val];
      })
      .reduce(
        (set, [k, v]) => ({
          ...set,
          [k]: v,
        }),
        {}
      )
  );
}

export async function printOp(
  op: Partial<UserOperationStruct>
): Promise<string> {
  return toJSON(op).then((userOp: any) => JSON.stringify(userOp, null, 2));
}

export const hexifyUserOp = (resolvedUserOp: any) => {
  return Object.keys(resolvedUserOp)
    .map((key) => {
      let val = resolvedUserOp[key];
      if (typeof val !== "string" || !val.startsWith("0x")) {
        val = hexValue(val);
      }
      return [key, val];
    })
    .reduce(
      (set, [k, v]) => ({
        ...set,
        [k]: v,
      }),
      {}
    );
};

export async function getHttpRpcClient(
  provider: ethers.providers.JsonRpcProvider,
  bundlerUrl: string,
  entryPointAddress: string
): Promise<HttpRpcClient> {
  const chainId = await provider.getNetwork().then((net: any) => net.chainId);
  return new HttpRpcClient(bundlerUrl, entryPointAddress, chainId);
}

export const encodeERC20Approval = (
  account: SimpleAccount,
  token: ERC20,
  spender: string,
  amount: ethers.BigNumber
) => {
  return account.interface.encodeFunctionData("execute", [
    token.address,
    0,
    token.interface.encodeFunctionData("approve", [spender, amount]),
  ]);
};

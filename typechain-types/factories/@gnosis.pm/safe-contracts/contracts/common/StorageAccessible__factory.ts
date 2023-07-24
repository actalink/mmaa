/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  StorageAccessible,
  StorageAccessibleInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/common/StorageAccessible";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576102a7908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081635624b25b1461003e575063b4faba091461003657600080fd5b61000e6101a8565b346100e75760403660031901126100e757602435600581811b92602090600435908415858704841417156100da575b61007e6100798761017d565b61014a565b9580875261008e601f199161017d565b0136848801375b8481106100ae57604051806100aa88826100ea565b0390f35b8181015481851b870184015260019060001981146100cd575b01610095565b6100d5610235565b6100c7565b6100e2610235565b61006d565b80fd5b6020808252825181830181905290939260005b82811061011f57505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016100fd565b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f1916820167ffffffffffffffff81118382101761017057604052565b610178610133565b604052565b60209067ffffffffffffffff811161019b575b601f01601f19160190565b6101a3610133565b610190565b3461000e57604036600319011261000e5760043573ffffffffffffffffffffffffffffffffffffffff8116810361000e576024359067ffffffffffffffff821161000e573660238301121561000e578160040135906102096100798361017d565b91808352366024828601011161000e5760208160009260246102339701838701378401015261024c565b565b50634e487b7160e01b600052601160045260246000fd5b60009250908291602082519201905af46000523d6020523d600060403e60403d016000fdfea26469706673582212203fb20761d37ab733e8bcd7e02f817b25aacd0109e02602f367fff44690e7aa2964736f6c63430008110033";

type StorageAccessibleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageAccessibleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StorageAccessible__factory extends ContractFactory {
  constructor(...args: StorageAccessibleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StorageAccessible> {
    return super.deploy(overrides || {}) as Promise<StorageAccessible>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StorageAccessible {
    return super.attach(address) as StorageAccessible;
  }
  override connect(signer: Signer): StorageAccessible__factory {
    return super.connect(signer) as StorageAccessible__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageAccessibleInterface {
    return new utils.Interface(_abi) as StorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageAccessible {
    return new Contract(address, _abi, signerOrProvider) as StorageAccessible;
  }
}
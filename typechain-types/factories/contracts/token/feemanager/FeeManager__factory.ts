/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FeeManager,
  FeeManagerInterface,
} from "../../../../contracts/token/feemanager/FeeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007057601f61031738819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b60405161024490816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604052600436101561001257600080fd5b6000803560e01c8063715018a6146101505780638da5cb5b1461012a5763f2fde38b1461003e57600080fd5b34610127576020366003190112610127576004356001600160a01b038082168092036101235761006c6101b6565b81156100b85782548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608490fd5b8280fd5b80fd5b50346101275780600319360112610127576001600160a01b036020915416604051908152f35b50346101275780600319360112610127576101696101b6565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b6001600160a01b036000541633036101ca57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea26469706673582212204957ce202d32e8e2e31b01fbd65951e8e33e317998e7c3944f4db5058c46555c64736f6c63430008110033";

type FeeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeManager__factory extends ContractFactory {
  constructor(...args: FeeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeManager> {
    return super.deploy(_owner, overrides || {}) as Promise<FeeManager>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): FeeManager {
    return super.attach(address) as FeeManager;
  }
  override connect(signer: Signer): FeeManager__factory {
    return super.connect(signer) as FeeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeManagerInterface {
    return new utils.Interface(_abi) as FeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeManager {
    return new Contract(address, _abi, signerOrProvider) as FeeManager;
  }
}
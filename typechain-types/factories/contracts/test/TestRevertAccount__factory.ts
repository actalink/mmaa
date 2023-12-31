/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestRevertAccount,
  TestRevertAccountInterface,
} from "../../../contracts/test/TestRevertAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "revertLong",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080601f6101b538819003918201601f19168301916001600160401b038311848410176100745780849260209460405283398101031261006f57516001600160a01b0381169081900361006f57600080546001600160a01b03191691909117905560405161012a908161008b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405260043610156012575b600080fd5b6000803560e01c9081633a871cdd146039575063be76c6ef14603357600080fd5b600d60dd565b3460d25760031960603682011260d9576004359067ffffffffffffffff821160d557610160913603011260d2578073ffffffffffffffffffffffffffffffffffffffff815416803b1560cf5760246080809263b760faf960e01b825230608452604435905af190811560c3575060b6575b60405160008152602090f35b60bf6080604052565b60aa565b604051903d90823e3d90fd5b50fd5b80fd5b8280fd5b5080fd5b5034600d576020366003190112600d576004356000fdfea26469706673582212204da3257382fd506169122d5db51c99455baa022f786f4b68e04ab8f28e67884664736f6c63430008110033";

type TestRevertAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRevertAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRevertAccount__factory extends ContractFactory {
  constructor(...args: TestRevertAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TestRevertAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<TestRevertAccount>;
  }
  override getDeployTransaction(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override attach(address: string): TestRevertAccount {
    return super.attach(address) as TestRevertAccount;
  }
  override connect(signer: Signer): TestRevertAccount__factory {
    return super.connect(signer) as TestRevertAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRevertAccountInterface {
    return new utils.Interface(_abi) as TestRevertAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRevertAccount {
    return new Contract(address, _abi, signerOrProvider) as TestRevertAccount;
  }
}

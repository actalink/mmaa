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
  TestWarmColdAccount,
  TestWarmColdAccountInterface,
} from "../../../contracts/test/TestWarmColdAccount";

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
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
    ],
    name: "touchPaymaster",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "touchStorage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "userOp",
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
  "0x6080601f6103a938819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b038116908190036100735760018055600080546001600160a01b03191691909117905560405161031a908161008f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182633a871cdd146100d257508163c19d93fb146100b3578163f115d40d14610072575063fb0c24251461005157600080fd5b3461006e578160031936011261006e576020906001549051908152f35b5080fd5b9050346100af5760203660031901126100af573573ffffffffffffffffffffffffffffffffffffffff811681036100af57602092503b9051908152f35b8280fd5b50503461006e578160031936011261006e576020906001549051908152f35b90849250346100af5760031960603682011261026c57813567ffffffffffffffff938482116102a857610160823603938401126102a85773ffffffffffffffffffffffffffffffffffffffff865416803b156102a45781602481899363b760faf960e01b82523089830152604435905af1801561029a57610274575b506024810135600181036101c8575050845163fb0c242560e01b8152925060209183915081306103e8fa80156101be5761018e575b506020915b51908152f35b602090813d81116101b7575b6101a481836102ac565b810103126101b25782610183565b600080fd5b503d61019a565b83513d84823e3d90fd5b6002146101dc575b50505050602091610188565b610124810135916022190182121561027057018181013592831161026c5760240191803603831361026c576014116100af57835163f115d40d60e01b8152913560601c90820152602081602481306103e8fa80156101be57610241575b8080806101d0565b602090813d8111610265575b61025781836102ac565b810103126101b25782610239565b503d61024d565b8380fd5b8480fd5b848196929611610287578652938661014e565b634e487b7160e01b825260418452602482fd5b87513d88823e3d90fd5b8680fd5b8580fd5b90601f8019910116810190811067ffffffffffffffff8211176102ce57604052565b634e487b7160e01b600052604160045260246000fdfea264697066735822122089aafad455dbfe6c90cc669b00ecbe09c345e57230bb7c5c4d9e35ac2d415ca864736f6c63430008110033";

type TestWarmColdAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestWarmColdAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestWarmColdAccount__factory extends ContractFactory {
  constructor(...args: TestWarmColdAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TestWarmColdAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<TestWarmColdAccount>;
  }
  override getDeployTransaction(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override attach(address: string): TestWarmColdAccount {
    return super.attach(address) as TestWarmColdAccount;
  }
  override connect(signer: Signer): TestWarmColdAccount__factory {
    return super.connect(signer) as TestWarmColdAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestWarmColdAccountInterface {
    return new utils.Interface(_abi) as TestWarmColdAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestWarmColdAccount {
    return new Contract(address, _abi, signerOrProvider) as TestWarmColdAccount;
  }
}
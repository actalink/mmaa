/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TokenCallbackHandler,
  TokenCallbackHandlerInterface,
} from "../../../../contracts/samples/callback/TokenCallbackHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610369908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c90816223de291461020757816301ffc9a71461019b57508063150b7a0214610144578063bc197c81146100b65763f23a6e611461005857600080fd5b346100b25760a03660031901126100b257610071610289565b5061007a6102b1565b5060843567ffffffffffffffff81116100ae5761009a92503691016102d4565b505060405163f23a6e6160e01b8152602090f35b8280fd5b5080fd5b50346100b25760a03660031901126100b2576100d0610289565b506100d96102b1565b5067ffffffffffffffff604435818111610140576100fa9036908401610302565b5050606435818111610140576101139036908401610302565b50506084359081116100ae5761012c92503691016102d4565b505060405163bc197c8160e01b8152602090f35b8380fd5b50346100b25760803660031901126100b25761015e610289565b506101676102b1565b5060643567ffffffffffffffff81116100ae5761018792503691016102d4565b5050604051630a85bd0160e11b8152602090f35b919050346100ae5760203660031901126100ae573563ffffffff60e01b81168091036100ae5760209250630a85bd0160e11b81149081156101f6575b81156101e5575b5015158152f35b6301ffc9a760e01b149050386101de565b630271189760e51b811491506101d7565b5050346100b25760c03660031901126100b257610222610289565b5061022b6102b1565b5060443573ffffffffffffffffffffffffffffffffffffffff8116036100b25767ffffffffffffffff906084358281116101405761026c90369083016102d4565b505060a4359182116100ae57610284913691016102d4565b505080f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102ac57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036102ac57565b9181601f840112156102ac5782359167ffffffffffffffff83116102ac57602083818601950101116102ac57565b9181601f840112156102ac5782359167ffffffffffffffff83116102ac576020808501948460051b0101116102ac5756fea26469706673582212200db0a3ba20dfb1b8fd56a76c29bf2726ac5bd1bcb1aa03d3b66f116ea75d66dd64736f6c63430008110033";

type TokenCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenCallbackHandler__factory extends ContractFactory {
  constructor(...args: TokenCallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenCallbackHandler> {
    return super.deploy(overrides || {}) as Promise<TokenCallbackHandler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenCallbackHandler {
    return super.attach(address) as TokenCallbackHandler;
  }
  override connect(signer: Signer): TokenCallbackHandler__factory {
    return super.connect(signer) as TokenCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenCallbackHandlerInterface {
    return new utils.Interface(_abi) as TokenCallbackHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenCallbackHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenCallbackHandler;
  }
}
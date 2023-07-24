/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestOracle2,
  TestOracle2Interface,
} from "../../../contracts/test/TestOracle2";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461006d57601f6101e438819003918201601f19168301916001600160401b0383118484101761007257808492604094855283398101031261006d57602081519101519060ff821680920361006d5760005560ff19600154161760015560405161015b90816100898239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c908163313ce56714610106575080637a1395aa146100d4578063a035b1fe146100b7578063f7a308061461009d5763feaf968c1461005857600080fd5b3461009a578060031936011261009a5760a09054604051906804000000000000247a90818352602083015263642a887b60408301524260608301526080820152f35b80fd5b503461009a57602036600319011261009a57600435815580f35b503461009a578060031936011261009a5760209054604051908152f35b503461009a57602036600319011261009a5760043560ff81168091036101025760ff19600154161760015580f35b5080fd5b90503461010257816003193601126101025760209060ff600154168152f3fea2646970667358221220a748cee996a111164206454c5c9d231eea9d6d30f8714b42db7b69250c48114964736f6c63430008110033";

type TestOracle2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestOracle2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestOracle2__factory extends ContractFactory {
  constructor(...args: TestOracle2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestOracle2> {
    return super.deploy(
      _price,
      _decimals,
      overrides || {}
    ) as Promise<TestOracle2>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, _decimals, overrides || {});
  }
  override attach(address: string): TestOracle2 {
    return super.attach(address) as TestOracle2;
  }
  override connect(signer: Signer): TestOracle2__factory {
    return super.connect(signer) as TestOracle2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestOracle2Interface {
    return new utils.Interface(_abi) as TestOracle2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestOracle2 {
    return new Contract(address, _abi, signerOrProvider) as TestOracle2;
  }
}

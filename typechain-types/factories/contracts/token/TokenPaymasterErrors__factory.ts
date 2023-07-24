/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenPaymasterErrors,
  TokenPaymasterErrorsInterface,
} from "../../../contracts/token/TokenPaymasterErrors";

const _abi = [
  {
    inputs: [],
    name: "CanNotWithdrawToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotBeUnrealisticValue",
    type: "error",
  },
  {
    inputs: [],
    name: "DEXRouterCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositCanNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "EntryPointCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "FeeReceiverCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTokenBalanceZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTokensWithdrawalFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "TokensAndAmountsLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "VerifyingSignerCannotBeZero",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601357603a908160198239f35b600080fdfe600080fdfea26469706673582212203ac31fe3e61dff2408a853d4e54b7595a5c8d71d1eeea3effcec7e653132f53664736f6c63430008110033";

type TokenPaymasterErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymasterErrors__factory extends ContractFactory {
  constructor(...args: TokenPaymasterErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymasterErrors> {
    return super.deploy(overrides || {}) as Promise<TokenPaymasterErrors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenPaymasterErrors {
    return super.attach(address) as TokenPaymasterErrors;
  }
  override connect(signer: Signer): TokenPaymasterErrors__factory {
    return super.connect(signer) as TokenPaymasterErrors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterErrorsInterface {
    return new utils.Interface(_abi) as TokenPaymasterErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymasterErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenPaymasterErrors;
  }
}
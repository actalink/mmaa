/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ChainlinkOracleAggregator,
  ChainlinkOracleAggregatorInterface,
} from "../../../../contracts/token/oracles/ChainlinkOracleAggregator";

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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenOracleDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "_tokenOracleDecimals",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenPrice",
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
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenValueOfOneNativeToken",
    outputs: [
      {
        internalType: "uint256",
        name: "exchangeRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "callAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "signed",
        type: "bool",
      },
    ],
    name: "setTokenOracle",
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
  "0x60803461007057601f610a0138819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b60405161092e90816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604081815260048036101561001557600080fd5b600092833560e01c9081630c9534f31461061a57508063715018a6146105b45780637f02a712146104b4578063874e1610146101b05780638da5cb5b1461018a578063d02641a0146101595763f2fde38b1461007057600080fd5b3461015557602036600319011261015557610089610652565b9061009261066d565b6001600160a01b038092169283156100ec57505082548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b5050346101865760203660031901126101865760209061017f61017a610652565b61075e565b9051908152f35b5080fd5b5050346101865781600319360112610186576001600160a01b0360209254169051908152f35b5090346101555760a0366003190112610155576101cb610652565b916024908135906001600160a01b03808316958684036104b0576044359460ff86168096036104ac576064359267ffffffffffffffff928385116104a857366023860112156104a857848601359384116104a857368385870101116104a857608435998a1515809b036104a45761024061066d565b1561043c57169384156103d557508190848a52600196602096888852898c20907fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff000083549260101b169116179055888b209060ff1982541617905586888b2001936102c185546106c5565b601f8111610383575b508a90601f841160011461031d578b93610310575b505050600019600383901b1c191690851b1790555b85525282209061ff0082549160081b169061ff00191617905580f35b01013590503880806102df565b858c52878c20899550929091601f1985168d5b8a82821061036b575050851161034f575b50505050811b0190556102f4565b60001960f88660031b161c199201013516905538808080610341565b83860185013587558c98909601959283019201610330565b90919250848b52868b20601f850160051c8101918886106103cb575b8594939291601f8b920160051c01915b8281106103bd5750506102ca565b8d81558695508a91016103af565b909150819061039f565b603960849260208a519362461bcd60e51b85528401528201527f436861696e6c696e6b4f7261636c6541676772656761746f723a3a20746f6b6560448201527f6e20616464726573732063616e206e6f74206265207a65726f000000000000006064820152fd5b885162461bcd60e51b81526020818801526038818501527f436861696e6c696e6b4f7261636c6541676772656761746f723a3a2063616c6c60448201527f20616464726573732063616e206e6f74206265207a65726f00000000000000006064820152608490fd5b8b80fd5b8a80fd5b8880fd5b8780fd5b5082346105b15760209283600319360112610186576104d1610652565b916001600160a01b036104e38461075e565b9316938482526001865280866104fe60ff86862054166106ff565b9685519283809263313ce56760e01b82525afa80156105a757839061056e575b61052891506106ff565b9485810295818704149015171561055b5783156105485750505191048152f35b634e487b7160e01b825260129052602490fd5b634e487b7160e01b825260119052602490fd5b508681813d83116105a0575b6105848183610726565b81010312610155575160ff81168103610155576105289061051e565b503d61057a565b84513d85823e3d90fd5b80fd5b83346105b157806003193601126105b1576105cd61066d565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b849084346101555760203660031901126101555760ff906020936001600160a01b03610644610652565b168152600185522054168152f35b600435906001600160a01b038216820361066857565b600080fd5b6001600160a01b0360005416330361068157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90600182811c921680156106f5575b60208310146106df57565b634e487b7160e01b600052602260045260246000fd5b91607f16916106d4565b60ff16604d811161071057600a0a90565b634e487b7160e01b600052601160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761074857604052565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0380911660008181526001926020938085526040918284205460101c168382848220019184518293805490610799826106c5565b918781169081156108e157506001146108ae575b505080839403915afa933d156108a6573d9467ffffffffffffffff8611610892578351956107e4601f8201601f1916890188610726565b86523d858888013e5b15610828578352845281205460081c60ff16156108165782828051810103126105b15750015190565b82828051810103126105b15750015190565b825162461bcd60e51b815260048101879052602860248201527f436861696e6c696e6b4f7261636c6541676772656761746f723a3a207175657260448201527f79206661696c65640000000000000000000000000000000000000000000000006064820152608490fd5b634e487b7160e01b85526041600452602485fd5b6060946107ed565b84528984209450835b8a878383106108ce575050508101935080836107ad565b87548386015290960195899550016108b7565b60ff191684525050801515028101935080836107ad56fea264697066735822122022cbe9bfaddac122f79fc118a09a77176a661b6e91b5fa9af87ce2a2f12bdca864736f6c63430008110033";

type ChainlinkOracleAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainlinkOracleAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainlinkOracleAggregator__factory extends ContractFactory {
  constructor(...args: ChainlinkOracleAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainlinkOracleAggregator> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<ChainlinkOracleAggregator>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): ChainlinkOracleAggregator {
    return super.attach(address) as ChainlinkOracleAggregator;
  }
  override connect(signer: Signer): ChainlinkOracleAggregator__factory {
    return super.connect(signer) as ChainlinkOracleAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkOracleAggregatorInterface {
    return new utils.Interface(_abi) as ChainlinkOracleAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkOracleAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkOracleAggregator;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UniswapTWAPAggregator,
  UniswapTWAPAggregatorInterface,
} from "../../../../contracts/token/oracles/UniswapTWAPAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_quoter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WrongPoolProvided",
    type: "error",
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
    name: "quoter",
    outputs: [
      {
        internalType: "contract IQuoter",
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
        internalType: "bool",
        name: "_flag",
        type: "bool",
      },
    ],
    name: "setAllowFixedPoolFee",
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
        name: "poolAddress",
        type: "address",
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
        name: "",
        type: "address",
      },
    ],
    name: "tokensInfo",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "uniswapPoolFee",
        type: "uint24",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [],
    name: "wrappedNative",
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
] as const;

const _bytecode =
  "0x60c0346101b757601f610b1f38819003918201601f19168301916001600160401b038311848410176101bc578084926060946040528339810103126101b757610047816101d2565b906100606040610059602084016101d2565b92016101d2565b9161006a336101e6565b6000805460ff60a01b191690556001600160a01b0391821691821561014c578316156100d557610099906101e6565b60805260a0526040516108f1908161022e82396080518181816101c801526103a8015260a0518181816101800152818161033d01526106350152f35b60a460405162461bcd60e51b815260206004820152604460248201527f556e69737761705457415041676772656761746f723a3a20777261707065642060448201527f6e617469766520746f6b656e20616464726573732063616e206e6f74206265206064820152637a65726f60e01b6084820152fd5b60405162461bcd60e51b815260206004820152603660248201527f556e69737761705457415041676772656761746f723a3a2071756f746572206160448201527f6464726573732063616e206e6f74206265207a65726f000000000000000000006064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101b757565b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6040608081526004908136101561001557600080fd5b600091823560e01c8063715018a614610798578063764467cc146105285780637f02a712146102c75780638da5cb5b146102a1578063ba8dbea214610258578063c346a895146101ec578063c6bbd5a7146101a8578063eb6d3a11146101605763f2fde38b1461008457600080fd5b3461015c57602036600319011261015c5761009d6107f1565b906100a661080c565b6001600160a01b038092169283156100f35750508254826001600160a01b03198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b5050346101a457816003193601126101a457602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b5050346101a457816003193601126101a457602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b8382346101a45760203660031901126101a457358015158091036101a45761021261080c565b7fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff74ff000000000000000000000000000000000000000083549260a01b16911617815580f35b82843461029e57602036600319011261029e5762ffffff826001600160a01b0392836102826107f1565b168152600160205220548351928116835260a01c166020820152f35b80fd5b5050346101a457816003193601126101a4576001600160a01b0360209254169051908152f35b503461015c576020928360031936011261029e576001600160a01b0391826102ed6107f1565b16808352600186528483205460a081901c62ffffff16949190821685156104bf5773eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610440575b8551948786019163f7729d4360e01b8352837f000000000000000000000000000000000000000000000000000000000000000016602488015260448701526064860152670de0b6b3a764000060848601528360a486015260a4855260e085019467ffffffffffffffff958181108782111761042d5787525184928392907f0000000000000000000000000000000000000000000000000000000000000000165afa503d15610423573d92831161041057508251916103f0601f8201601f1916860184610864565b82523d818584013e5b838280518101031261029e57508201519051908152f35b634e487b7160e01b825260419052602490fd5b50606091506103f9565b634e487b7160e01b865260418552602486fd5b60ff845460a01c1661032957855162461bcd60e51b8152808401889052604160248201527f556e69737761705457415041676772656761746f723a205368616c6c206e6f7460448201527f2070726f63656564207769746820756e72656c6961626c6520706f6f6c2066656064820152606560f81b608482015260a490fd5b865162461bcd60e51b8152808501899052603160248201527f556e69737761705457415041676772656761746f723a20746f6b656e20616e6460448201527f20706f6f6c20666565206e6f74207365740000000000000000000000000000006064820152608490fd5b503461015c578160031936011261015c576105416107f1565b90602435916001600160a01b03918284168094036107945761056161080c565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee938085036105c55750501683526001602052818320906001600160a01b031982541617905581207501f4000000000000000000000000000000000000000062ffffff60a01b1982541617905580f35b918391959450169081865260209260018452848720826001600160a01b0319825416179055845190630dfe168160e01b825284828881865afa91821561078a57889261076b575b50855163d21220a760e01b81529185838981875afa928315610761578993610730575b508190817f0000000000000000000000000000000000000000000000000000000000000000169283911614928315610724575b50505060001461071457829084519586809263ddca3f4360e01b82525afa93841561070a5785946106c8575b509060019185525282209062ffffff60a01b1976ffffff000000000000000000000000000000000000000083549260a01b16911617905580f35b9093508181813d8311610703575b6106e08183610864565b810103126106ff57519062ffffff821682036106ff579092600161068e565b8480fd5b503d6106d6565b83513d87823e3d90fd5b50505051633cb2a5d160e21b8152fd5b16149050388080610662565b8291935061075390873d891161075a575b61074b8183610864565b81019061089c565b929061062f565b503d610741565b87513d8b823e3d90fd5b610783919250853d871161075a5761074b8183610864565b903861060c565b86513d8a823e3d90fd5b8580fd5b833461029e578060031936011261029e576107b161080c565b806001600160a01b0381546001600160a01b031981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b600435906001600160a01b038216820361080757565b600080fd5b6001600160a01b0360005416330361082057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff82111761088657604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261080757516001600160a01b0381168103610807579056fea264697066735822122020f83000a432bbba5e1e66ea3adc7d743582b4e89b187bd08f7b79ecfc9bca8a64736f6c63430008110033";

type UniswapTWAPAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapTWAPAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapTWAPAggregator__factory extends ContractFactory {
  constructor(...args: UniswapTWAPAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _quoter: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapTWAPAggregator> {
    return super.deploy(
      _owner,
      _quoter,
      _weth,
      overrides || {}
    ) as Promise<UniswapTWAPAggregator>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _quoter: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _quoter, _weth, overrides || {});
  }
  override attach(address: string): UniswapTWAPAggregator {
    return super.attach(address) as UniswapTWAPAggregator;
  }
  override connect(signer: Signer): UniswapTWAPAggregator__factory {
    return super.connect(signer) as UniswapTWAPAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapTWAPAggregatorInterface {
    return new utils.Interface(_abi) as UniswapTWAPAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapTWAPAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapTWAPAggregator;
  }
}
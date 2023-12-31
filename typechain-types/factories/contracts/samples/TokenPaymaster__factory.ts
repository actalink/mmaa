/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenPaymaster,
  TokenPaymasterInterface,
  OracleHelper,
  UniswapHelper,
} from "../../../contracts/samples/TokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_wrappedNative",
        type: "address",
      },
      {
        internalType: "contract ISwapRouter",
        name: "_uniswap",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "priceMarkup",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minEntryPointBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refundPostopCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceMaxAge",
            type: "uint256",
          },
        ],
        internalType: "struct TokenPaymaster.TokenPaymasterConfig",
        name: "_tokenPaymasterConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IOracle",
            name: "tokenOracle",
            type: "address",
          },
          {
            internalType: "contract IOracle",
            name: "nativeOracle",
            type: "address",
          },
          {
            internalType: "bool",
            name: "tokenToNativeOracle",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "tokenOracleReverse",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "nativeOracleReverse",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "priceUpdateThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cacheTimeToLive",
            type: "uint256",
          },
        ],
        internalType: "struct OracleHelper.OracleHelperConfig",
        name: "_oracleHelperConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "minSwapAmount",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "uniswapPoolFee",
            type: "uint24",
          },
          {
            internalType: "uint8",
            name: "slippage",
            type: "uint8",
          },
        ],
        internalType: "struct UniswapHelper.UniswapHelperConfig",
        name: "_uniswapHelperConfig",
        type: "tuple",
      },
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
        components: [
          {
            internalType: "uint256",
            name: "priceMarkup",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minEntryPointBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refundPostopCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceMaxAge",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct TokenPaymaster.TokenPaymasterConfig",
        name: "tokenPaymasterConfig",
        type: "tuple",
      },
    ],
    name: "ConfigUpdated",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preCharge",
        type: "uint256",
      },
    ],
    name: "PostOpReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cachedPriceTimestamp",
        type: "uint256",
      },
    ],
    name: "TokenPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
    ],
    name: "UniswapReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "actualTokenCharge",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "actualTokenPrice",
        type: "uint256",
      },
    ],
    name: "UserOperationSponsored",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cachedPrice",
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
    name: "cachedPriceTimestamp",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "uint256",
            name: "priceMarkup",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minEntryPointBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refundPostopCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceMaxAge",
            type: "uint256",
          },
        ],
        internalType: "struct TokenPaymaster.TokenPaymasterConfig",
        name: "_tokenPaymasterConfig",
        type: "tuple",
      },
    ],
    name: "setTokenPaymasterConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minSwapAmount",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "uniswapPoolFee",
            type: "uint24",
          },
          {
            internalType: "uint8",
            name: "slippage",
            type: "uint8",
          },
        ],
        internalType: "struct UniswapHelper.UniswapHelperConfig",
        name: "_uniswapHelperConfig",
        type: "tuple",
      },
    ],
    name: "setUniswapConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "tokenToWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
    name: "uniswap",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "force",
        type: "bool",
      },
    ],
    name: "updateCachedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "weiToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x610120604052346200071057620024668038038091620000228261012062000778565b610120396102608112620007105761012051906001600160a01b0382168203620007105761014051906001600160a01b03821682036200071057610160516001600160a01b0381168103620007105761018051926001600160a01b038416840362000710576080607f19840112620007105760405193608085016001600160401b03811186821017620007625760409081526101a05186526101c05160208701526101e0519086015261020051606086015260e060ff198501126200071057604051936001600160401b0360e0860190811190861117620007625760e08501604052606090620001146102206200079c565b8652620001236102406200079c565b602087015262000135610260620007b1565b604087015262000147610280620007b1565b86830152620001586102a0620007b1565b60808701526102c05160a08701526102e05160c08701526101df190112620007105760405192606084016001600160401b0381118582101762000762576040526103005184526103205162ffffff8116810362000710576020850152620001c1610340620007bf565b604085015261036051966001600160a01b0388168803620007105760405163313ce56760e01b81526020816004816001600160a01b0386165afa801562000639576000906200071e575b620002179150620007ce565b9362000223336200084f565b60805260405163095ea7b360e01b81526001600160a01b03848116600483015260001960248301526020908290604490829060009087165af180156200063957620006d8575b5060018060a01b031660c05260e05260a05261010052805160015562ffffff60208201511663ff000000604060025493015160181b169163ffffffff1916171760025560001960035560018060a01b038151168060018060a01b03196005541617600555620f424060018060a01b036020840151169260065460ff60a01b6040830151151560a01b1660ff60a81b6060840151151560a81b16908660ff60b01b6080860151151560b01b169360018060b81b0319161717171760065560c060a08201519182600755015160085511620006935760206004916040519283809263313ce56760e01b82525afa908115620006395760009162000645575b5060049162000376602092620007ce565b60095560405163313ce56760e01b815292839182905afa80156200063957600090620005f2575b620003a99150620007ce565b600a55620003b6620007f6565b6aa56fa5b99019a5c8000000815111620005ad576a52b7d2dcc80cd2e4000000815110620005685760808160607f9359e69ea224934f7cfbc6e6336e1a65f96eb6607c898f94589b52f4806eece893519182600b556020810151600c556040810151600d5581810151600e55604051928352602081015160208401526040810151604084015201516060820152a16200044e620007f6565b6001600160a01b03811615620005145762000469906200084f565b604051611bcf908162000897823960805181818161054f0152818161076901528181610816015281816108940152818161090201528181610bde01528181610c6c01528181610dfd01526112c1015260a051818181610b8b0152818161133901526119f7015260c05181818161016d0152818161028d01528181610a680152818161127101528181611312015261144b015260e0518181816104c301526119d0015261010051815050f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f54504d3a207072696365206d61726b757020746f6f206c6f77000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601a60248201527f54504d3a207072696365206d61726b757020746f6f20686967680000000000006044820152606490fd5b6020823d60201162000630575b816200060e6020938362000778565b810103126200062d575062000627620003a991620007bf565b6200039d565b80fd5b3d9150620005ff565b6040513d6000823e3d90fd5b906020823d6020116200068a575b81620006626020938362000778565b810103126200062d57506004916200037662000680602093620007bf565b9250509162000365565b3d915062000653565b60405162461bcd60e51b815260206004820152601e60248201527f54504d3a20757064617465207468726573686f6c6420746f6f206869676800006044820152606490fd5b6020813d60201162000715575b81620006f46020938362000778565b8101031262000710576200070890620007b1565b503862000269565b600080fd5b3d9150620006e5565b6020823d60201162000759575b816200073a6020938362000778565b810103126200062d5750620007536200021791620007bf565b6200020b565b3d91506200072b565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b038211908210176200076257604052565b51906001600160a01b03821682036200071057565b519081151582036200071057565b519060ff821682036200071057565b60ff16604d8111620007e057600a0a90565b634e487b7160e01b600052601160045260246000fd5b6000546001600160a01b031633036200080b57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe604060808152600480361015610048575b50361561001c57600080fd5b513481527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587460203392a2005b600090813560e01c9081630396cb6014610c3a578163205c287814610baf5781632681f7e414610b6b5781633ba9290f14610b40578163715018a614610ad95781637c986aac14610ab25781638da5cb5b14610a8c5781639e281a9814610a3e578163a0840fa71461099f578163a9a2340914610926578163b0d691fe146108e2578163bb9fe6bf1461086e578163c23a5cea146107e6578163c399ec8814610735578163c63dcf6a146105c5578163d0e30db014610536578163d7a23b3c14610506578163e1d8153c146104e7578163eb6d3a11146104a3578163f2fde38b146103b8578163f465c77e146101b457508063f60fdcb3146101955763fc0c546a03610010579034610191578160031936011261019157602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b5090346101915781600319360112610191576020906003549051908152f35b839150346103b4576003199260603685011261036457813567ffffffffffffffff811161019157610160818401958236030112610191576101f3610df3565b600b5491610124820161020681886110f8565b60131901929050821580156103aa575b1561036757600d5491602061023f60e4870135976a52b7d2dcc80cd2e40000006003540261112b565b9414610303575b50506001600160a01b03926102b661027b869461027665ffffffffffff60a01b9998610104960260443501610e6a565b61112b565b986102b18a6102898361114b565b30907f000000000000000000000000000000000000000000000000000000000000000061115f565b61114b565b9287519860208a01528789015201356060870152166080850152608084526102dd84610d1d565b54600e540160a01b166102f98251938385948552840190610d5b565b9060208301520390f35b61031090899493946110f8565b6034929192116103645750926102b661027b86946101049465ffffffffffff60a01b999860146001600160a01b0399013582811061035a575b505095979850935050819450610246565b9150610276610349565b80fd5b865162461bcd60e51b8152602081880152601860248201527f54504d3a20696e76616c69642064617461206c656e67746800000000000000006044820152606490fd5b5060208314610216565b8280fd5b839150346103b45760203660031901126103b4576103d4610cc7565b906103dd610d9b565b6001600160a01b0380921692831561043a5750506000548273ffffffffffffffffffffffffffffffffffffffff19821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b828434610191578160031936011261019157602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b839150346103b457826003193601126103b45760209250549051908152f35b828434610191576020906a52b7d2dcc80cd2e400000061052e61052836610cdd565b90610ea0565b049051908152f35b90508192826003193601126105c1576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691823b156105bc578390602483518095819363b760faf960e01b8352309083015234905af19081156105b357506105a35750f35b6105ac90610cf3565b6103645780f35b513d84823e3d90fd5b505050fd5b5050fd5b839150346103b45760803660031901126103b4578151916080830183811067ffffffffffffffff82111761072057815281358352602083019260243584528181019060443582526060810193606435855261061e610d9b565b6aa56fa5b99019a5c80000008251116106dd576a52b7d2dcc80cd2e400000082511061069a575051600b8190558451600c558151600d558351600e5582519081529351602085015251908301525160608201527f9359e69ea224934f7cfbc6e6336e1a65f96eb6607c898f94589b52f4806eece890608090a180f35b606490602085519162461bcd60e51b8352820152601960248201527f54504d3a207072696365206d61726b757020746f6f206c6f77000000000000006044820152fd5b606490602085519162461bcd60e51b8352820152601a60248201527f54504d3a207072696365206d61726b757020746f6f20686967680000000000006044820152fd5b604183634e487b7160e01b6000525260246000fd5b8284346101915781600319360112610191578051926370a0823160e01b845230908401526020836024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9182156107db57916107a2575b6020925051908152f35b90506020823d82116107d3575b816107bc60209383610d39565b810103126107ce576020915190610798565b600080fd5b3d91506107af565b9051903d90823e3d90fd5b90508192346105c15760203660031901126105c157610803610cc7565b61080b610d9b565b6001600160a01b03807f000000000000000000000000000000000000000000000000000000000000000016803b1561086a578592836024928651978895869463611d2e7560e11b865216908401525af19081156105b357506105a35750f35b8580fd5b90508192346105c157826003193601126105c15761088a610d9b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691823b156105bc57815163bb9fe6bf60e01b81529284918491829084905af19081156105b357506105a35750f35b828434610191578160031936011261019157602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b9050346101915760603660031901126101915780359060038210156103b4576024359067ffffffffffffffff9081831161099b573660238401121561099b578201359081116109975736602482840101116109975761099492610987610df3565b60246044359301906111a3565b80f35b8380fd5b8480fd5b839150346103b45760603660031901126103b4578151906060820182811067ffffffffffffffff821117610a2957835235815260243562ffffff91828216820361099b57602081019182526044359360ff8516850361086a578101938452610a05610d9b565b51600155511663ff000000600254925160181b169163ffffffff1916171760025580f35b604182634e487b7160e01b6000525260246000fd5b8284346101915736600319011261036457610994610a5a610cc7565b610a62610d9b565b602435907f0000000000000000000000000000000000000000000000000000000000000000610eb3565b8284346101915781600319360112610191576001600160a01b0360209254169051908152f35b82843461019157602090610ad2610276610acb36610cdd565b9190610e6a565b9051908152f35b8234610364578060031936011261036457610af2610d9b565b60006001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b839150346103b45760203660031901126103b457359182151583036103645750610ad260209261161d565b828434610191578160031936011261019157602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b90508192346105c157806003193601126105c157610bcb610cc7565b610bd3610d9b565b6001600160a01b03807f000000000000000000000000000000000000000000000000000000000000000016803b1561086a578592836044928651978895869463040b850f60e31b8652169084015260243560248401525af19081156105b357506105a35750f35b90508260203660031901126103b45782823563ffffffff811680910361019157610c62610d9b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001693843b156103b45760249084519586938492621cb65b60e51b845283015234905af19081156105b35750610cbe575080f35b61099490610cf3565b600435906001600160a01b03821682036107ce57565b60409060031901126107ce576004359060243590565b67ffffffffffffffff8111610d0757604052565b634e487b7160e01b600052604160045260246000fd5b60a0810190811067ffffffffffffffff821117610d0757604052565b90601f8019910116810190811067ffffffffffffffff821117610d0757604052565b919082519283825260005b848110610d87575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610d66565b6001600160a01b03600054163303610daf57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163303610e2557565b60405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152606490fd5b906a52b7d2dcc80cd2e400000091828102928184041490151715610e8a57565b634e487b7160e01b600052601160045260246000fd5b81810292918115918404141715610e8a57565b916001600160a01b036040519263a9059cbb60e01b6020850152166024830152604482015260448152608081019181831067ffffffffffffffff841117610d0757610f0092604052610f02565b565b6001600160a01b0316906040516040810167ffffffffffffffff9082811082821117610d07576040526020938483527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858401526000808587829751910182855af1903d15611050573d92831161103c5790610f9e93929160405192610f9188601f19601f8401160185610d39565b83523d868885013e61105b565b805180610fac575b50505050565b8184918101031261019157820151908115918215036103645750610fd257808080610fa6565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b634e487b7160e01b85526041600452602485fd5b90610f9e9392506060915b919290156110bd575081511561106f575090565b3b156110785790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156110d05750805190602001fd5b60405162461bcd60e51b8152602060048201529081906110f4906024830190610d5b565b0390fd5b903590601e19813603018212156107ce570180359067ffffffffffffffff82116107ce576020019181360383136107ce57565b8115611135570490565b634e487b7160e01b600052601260045260246000fd5b356001600160a01b03811681036107ce5790565b9092610f0093604051936323b872dd60e01b60208601526001600160a01b03809216602486015216604484015260648301526064825261119e82610d1d565b610f02565b909192600b546080846000968101031261099b578335916060850135906001600160a01b03938483168093036114ce576040956111e960209889898201359101356114d2565b9060038110156114ba5760021461148957611202611506565b9461121b6a52b7d2dcc80cd2e40000009182880261112b565b91600d54028401818102918183041490151715611475577f46caa0511cf037f06f57a0bf273a2ff04229f5b12fb04675234a6cbe2e7f1a8993929161125f9161112b565b908180821115611434576112959103857f0000000000000000000000000000000000000000000000000000000000000000610eb3565b8651908152602081019190915260408101849052606090a282516370a0823160e01b81523060048201527f0000000000000000000000000000000000000000000000000000000000000000831694908181602481895afa91821561142a5787926113fc575b5050600c541161130c575b5050505050565b611336907f0000000000000000000000000000000000000000000000000000000000000000611947565b907f00000000000000000000000000000000000000000000000000000000000000001690813b1561099b578491604483928551948593849263125012df60e21b845260048401523060248401525af180156113f2576113df575b504791803b15610997578390602483518095819363b760faf960e01b83523060048401525af19081156105b357506113cb575b808080611305565b6113d58291610cf3565b61036457806113c3565b6113eb90939193610cf3565b9138611390565b82513d86823e3d90fd5b90809250813d8311611423575b6114138183610d39565b8101031261086a575138806112fa565b503d611409565b85513d89823e3d90fd5b8110611441575b50611295565b61146f90820330867f000000000000000000000000000000000000000000000000000000000000000061115f565b3861143b565b634e487b7160e01b8a52601160045260248afd5b509350509450507f70d0284ddd39eacb3395a2e94c4dc76dfad486bb418b24573ca1c9097501d57e929151908152a2565b634e487b7160e01b8a52602160045260248afd5b8780fd5b908082146114f557488101809111610e8a57808210156114f0575090565b905090565b5090565b91908203918211610e8a57565b600854611515600454426114f9565b1115611617576007546001600160a01b036115648160055416916006549061153f600354946117ac565b9060019060ff8460a01c1615611605575b5060ff808460b01c169360a81c169161170f565b916a52b7d2dcc80cd2e4000000808402848104821485151715610e8a578361158b9161112b565b828201808311610e8a5781119283156115f1575b505050156114f05760038290554260048190556040805184815260208101939093528201527ed4fe314618b73a96886b87817a53a5ed51433b0234c85a5e9dafe2cb7b88429080606081015b0390a190565b82039250908211610e8a571038808061159f565b611611915083166117ac565b38611550565b60035490565b60085461162c600454426114f9565b821591829182611704575b50506116fc57600754906001600160a01b03916116638360055416936006549061153f600354966117ac565b936a52b7d2dcc80cd2e400000091828602868104841487151715610e8a578561168b9161112b565b91936116e8575b83156115f157505050156114f05760038290554260048190556040805184815260208101939093528201527ed4fe314618b73a96886b87817a53a5ed51433b0234c85a5e9dafe2cb7b88429080606081016115eb565b8093508201808311610e8a57811192611692565b505060035490565b111590503880611637565b90911561176b57600954906a52b7d2dcc80cd2e40000009180830292830403610e8a5761173b9161112b565b915b1561175b576117589161174f91610ea0565b600a549061112b565b90565b61027661175892600a5490610ea0565b6a52b7d2dcc80cd2e40000009080820291820403610e8a5760095461178f9161112b565b9161173d565b519069ffffffffffffffffffff821682036107ce57565b60a06001600160a01b0391600460405180948193633fabe5a360e21b8352165afa801561193b5760008092819082936118e5575b5060008413156118a0576202a2ff19420190428211610e8a571061185b5769ffffffffffffffffffff8091169116106118165790565b60405162461bcd60e51b815260206004820152601060248201527f54504d3a205374616c65207072696365000000000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601560248201527f54504d3a20496e636f6d706c65746520726f756e6400000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601960248201527f54504d3a20436861696e6c696e6b207072696365203c3d2030000000000000006044820152606490fd5b935050905060a0823d8211611933575b8161190260a09383610d39565b81010312610364575061191481611795565b602082015161192a608060608501519401611795565b919092386117e0565b3d91506118f5565b6040513d6000823e3d90fd5b6001600160a01b038091169160408051916370a0823160e01b83523060048401526020908184602481895afa938415611b8e57600094611b5d575b506119996a52b7d2dcc80cd2e40000009185610ea0565b0490600254916103e89060ff8460181c1682039061ffff808311610e8a576119c2921690610ea0565b04946001548610611b5157807f00000000000000000000000000000000000000000000000000000000000000001692600090827f000000000000000000000000000000000000000000000000000000000000000016865191610100830183811067ffffffffffffffff82111761103c5788528a835282860187815262ffffff918216848a0190815260608501848152426080870190815260a087018d815260c088018f815260e089018a81528e5163414bf38960e01b815299518c1660048b015295518b1660248a015293519095166044880152905188166064870152516084860152915160a4850152905160c48401525190931660e4820152918390839081845a9261010493f190918282611b1f575b5050611b155750825195865285015283015260608201527ff7edd4c6ec425decf715a8b8eaa3b65d3d86e31ad0ff750aa60fa834190f515f90608090a1600090565b9550505050505090565b909192508382813d8311611b4a575b611b388183610d39565b81010312610364575051903880611ad3565b503d611b2e565b50505050505050600090565b90938282813d8311611b87575b611b748183610d39565b8101031261036457505192611999611982565b503d611b6a565b83513d6000823e3d90fdfea264697066735822122093db8c642ad9e6205e27afe133017e2028d543c06f5d975dabf9774085aa07b064736f6c63430008110033";

type TokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenPaymaster__factory extends ContractFactory {
  constructor(...args: TokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    _wrappedNative: PromiseOrValue<string>,
    _uniswap: PromiseOrValue<string>,
    _tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct,
    _oracleHelperConfig: OracleHelper.OracleHelperConfigStruct,
    _uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenPaymaster> {
    return super.deploy(
      _token,
      _entryPoint,
      _wrappedNative,
      _uniswap,
      _tokenPaymasterConfig,
      _oracleHelperConfig,
      _uniswapHelperConfig,
      _owner,
      overrides || {}
    ) as Promise<TokenPaymaster>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    _entryPoint: PromiseOrValue<string>,
    _wrappedNative: PromiseOrValue<string>,
    _uniswap: PromiseOrValue<string>,
    _tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct,
    _oracleHelperConfig: OracleHelper.OracleHelperConfigStruct,
    _uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _entryPoint,
      _wrappedNative,
      _uniswap,
      _tokenPaymasterConfig,
      _oracleHelperConfig,
      _uniswapHelperConfig,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): TokenPaymaster {
    return super.attach(address) as TokenPaymaster;
  }
  override connect(signer: Signer): TokenPaymaster__factory {
    return super.connect(signer) as TokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenPaymasterInterface {
    return new utils.Interface(_abi) as TokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as TokenPaymaster;
  }
}

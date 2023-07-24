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
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "sudoTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a034620003fa57601f19906001600160401b0390601f62000e9b388190038281018616840185811185821017620002fe57849282916040528339602093849181010312620003fa57519360ff85168503620003fa576200005f620003ff565b93600985526805465737445524332360bc1b848601526200007f620003ff565b946003908187526205432360ec1b868801528051838111620002fe5782546001928382811c92168015620003ef575b89831014620003d957818884931162000383575b508890888311600114620003205760009262000314575b505060001982851b1c191690821b1782555b8651928311620002fe5760049687548281811c91168015620002f3575b88821014620002de5786811162000293575b5086908685116001146200022a57849550908492916000956200021e575b50501b92600019911b1c19161783555b3315620001dd575060025469d3c21bcecceda100000092838201809211620001c857506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91600255338352828152604083208481540190556040519384523393a3608052604051610a7b9081620004208239608051816103fa0152f35b601190634e487b7160e01b6000525260246000fd5b606492916040519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519350388062000138565b9291948416928860005284886000209460005b8a898383106200027b575050501062000260575b50505050811b01835562000148565b01519060f884600019921b161c191690553880808062000251565b8686015189559097019694850194889350016200023d565b88600052876000208780870160051c8201928a8810620002d4575b0160051c019083905b828110620002c75750506200011a565b60008155018390620002b7565b92508192620002ae565b602289634e487b7160e01b6000525260246000fd5b90607f169062000108565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d9565b908785941691866000528a6000209260005b8c8282106200036c575050841162000353575b505050811b018255620000eb565b015160001983871b60f8161c1916905538808062000345565b838501518655889790950194938401930162000332565b90915084600052886000208880850160051c8201928b8610620003cf575b918691869594930160051c01915b828110620003bf575050620000c2565b60008155859450869101620003af565b92508192620003a1565b634e487b7160e01b600052602260045260246000fd5b91607f1691620000ae565b600080fd5b60408051919082016001600160401b03811183821017620002fe5760405256fe6040608081526004908136101561001557600080fd5b600091823560e01c90816305ea5c22146106bc57816306fdde03146105e2578163095ea7b3146105b857816318160ddd1461059957816323b872dd146104e15781632d688ca81461041e578163313ce567146103e0578163395093511461039157816370a082311461035b57816395d89b411461023c578163a457c2d71461017b57508063a9059cbb1461014b578063dd62ed3e146101035763fb4dcefa146100bd57600080fd5b346100ff57806003193601126100ff576100fc906100d96106d4565b906100e26106ef565b906001600160a01b038316855284602052842054916107a6565b80f35b5080fd5b50346100ff57806003193601126100ff57806020926101206106d4565b6101286106ef565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b50346100ff57806003193601126100ff5760209061017461016a6106d4565b60243590336107a6565b5160018152f35b905082346102395782600319360112610239576101966106d4565b91836024359233815260016020528181206001600160a01b03861682526020522054908282106101d0576020856101748585038733610943565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b8383346100ff57816003193601126100ff57805190828454600181811c90808316928315610351575b602093848410811461033e5783885290811561032257506001146102cd575b505050829003601f01601f191682019267ffffffffffffffff8411838510176102ba57508291826102b692528261073a565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b83851061030e5750505050830101858080610284565b8054888601830152930192849082016102f8565b60ff1916878501525050151560051b8401019050858080610284565b634e487b7160e01b895260228a52602489fd5b91607f1691610265565b5050346100ff5760203660031901126100ff57806020926001600160a01b036103826106d4565b16815280845220549051908152f35b5050346100ff57806003193601126100ff576101746020926103d96103b46106d4565b91338152600186528481206001600160a01b0384168252865284602435912054610783565b9033610943565b5050346100ff57816003193601126100ff576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b919050346104dd57806003193601126104dd576104396106d4565b906001600160a01b03602435921692831561049b57506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926104818795600254610783565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b9050823461023957826104f336610705565b94919290936001600160a01b03841681526001602052818120338252602052205490600019820361052d575b6020866101748787876107a6565b848210610556575091839161054b6020969561017495033383610943565b91939481935061051f565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100ff57816003193601126100ff576020906002549051908152f35b5050346100ff57806003193601126100ff576020906101746105d86106d4565b6024359033610943565b8383346100ff57816003193601126100ff5780519082600354600181811c908083169283156106b2575b602093848410811461033e57838852908115610322575060011461065c57505050829003601f01601f191682019267ffffffffffffffff8411838510176102ba57508291826102b692528261073a565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b83851061069e5750505050830101858080610284565b805488860183015293019284908201610688565b91607f169161060c565b8334610239576100fc6106ce36610705565b91610943565b600435906001600160a01b03821682036106ea57565b600080fd5b602435906001600160a01b03821682036106ea57565b60609060031901126106ea576001600160a01b039060043582811681036106ea579160243590811681036106ea579060443590565b6020808252825181830181905290939260005b82811061076f57505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161074d565b9190820180921161079057565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038091169182156108d857169182156108875760008281528060205260408120549180831061081c57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608490fd5b6001600160a01b038091169182156109f457169182156109a45760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea2646970667358221220559abf979947d7f729d1e0bb05f8200a9c33b947922dfea8be1d0b6c0c43438964736f6c63430008110033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_decimals, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_decimals, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
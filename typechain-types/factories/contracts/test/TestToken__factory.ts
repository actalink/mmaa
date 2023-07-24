/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestToken,
  TestTokenInterface,
} from "../../../contracts/test/TestToken";

const _abi = [
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
  "0x6080346200030e576040906001600160401b0390808301828111828210176200020e578352600391828252602092621514d560ea1b848401528451858101818110848211176200020e57865260098152682a32b9ba2a37b5b2b760b91b858201528351908382116200020e578254916001958684811c9416801562000303575b88851014620002ed578190601f9485811162000297575b508890858311600114620002305760009262000224575b505060001982861b1c191690861b1783555b80519384116200020e5760049586548681811c9116801562000203575b82821014620001ee57838111620001a3575b508092851160011462000135575093839491849260009562000129575b50501b92600019911b1c19161790555b516109c69081620003148239f35b0151935038806200010b565b92919084601f1981168860005285600020956000905b898383106200018857505050106200016d575b50505050811b0190556200011b565b01519060f884600019921b161c19169055388080806200015e565b8587015189559097019694850194889350908101906200014b565b87600052816000208480880160051c820192848910620001e4575b0160051c019087905b828110620001d7575050620000ee565b60008155018790620001c7565b92508192620001be565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000dc565b634e487b7160e01b600052604160045260246000fd5b015190503880620000ad565b90889350601f19831691876000528a6000209260005b8c82821062000280575050841162000267575b505050811b018355620000bf565b015160001983881b60f8161c1916905538808062000259565b8385015186558c9790950194938401930162000246565b90915085600052886000208580850160051c8201928b8610620002e3575b918a91869594930160051c01915b828110620002d357505062000096565b600081558594508a9101620002c3565b92508192620002b5565b634e487b7160e01b600052602260045260246000fd5b93607f16936200007f565b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461057c57508163095ea7b31461055257816318160ddd1461053357816323b872dd14610468578163313ce5671461044c57816339509351146103fd57816340c10f191461033a57816370a082311461030457816395d89b41146101e5578163a457c2d71461012457508063a9059cbb146100f45763dd62ed3e146100a957600080fd5b346100f057806003193601126100f057806020926100c561069d565b6100cd6106b8565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50346100f057806003193601126100f05760209061011d61011361069d565b60243590336106f1565b5160018152f35b905082346101e257826003193601126101e25761013f61069d565b91836024359233815260016020528181206001600160a01b03861682526020522054908282106101795760208561011d858503873361088e565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b8383346100f057816003193601126100f057805190828454600181811c908083169283156102fa575b60209384841081146102e7578388529081156102cb5750600114610276575b505050829003601f01601f191682019267ffffffffffffffff841183851017610263575082918261025f925282610654565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106102b7575050505083010185808061022d565b8054888601830152930192849082016102a1565b60ff1916878501525050151560051b840101905085808061022d565b634e487b7160e01b895260228a52602489fd5b91607f169161020e565b5050346100f05760203660031901126100f057806020926001600160a01b0361032b61069d565b16815280845220549051908152f35b919050346103f957806003193601126103f95761035561069d565b906001600160a01b0360243592169283156103b757506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9261039d87956002546106ce565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b5050346100f057806003193601126100f05761011d60209261044561042061069d565b91338152600186528481206001600160a01b03841682528652846024359120546106ce565b903361088e565b5050346100f057816003193601126100f0576020905160128152f35b839150346100f05760603660031901126100f05761048461069d565b61048c6106b8565b9184604435946001600160a01b0384168152600160205281812033825260205220549060001982036104c7575b60208661011d8787876106f1565b8482106104f057509183916104e56020969561011d9503338361088e565b9193948193506104b9565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100f057816003193601126100f0576020906002549051908152f35b5050346100f057806003193601126100f05760209061011d61057261069d565b602435903361088e565b849084346103f957826003193601126103f95782600354600181811c9080831692831561064a575b60209384841081146102e7578388529081156102cb57506001146105f457505050829003601f01601f191682019267ffffffffffffffff841183851017610263575082918261025f925282610654565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b838510610636575050505083010185808061022d565b805488860183015293019284908201610620565b91607f16916105a4565b6020808252825181830181905290939260005b82811061068957505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610667565b600435906001600160a01b03821682036106b357565b600080fd5b602435906001600160a01b03821682036106b357565b919082018092116106db57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0380911691821561082357169182156107d25760008281528060205260408120549180831061076757604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608490fd5b6001600160a01b0380911691821561093f57169182156108ef5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea2646970667358221220f436c62758f1ac091d8084dfa1c9887a8ceae7ed2e89d95026b3c202b38ded7564736f6c63430008110033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestToken> {
    return super.deploy(overrides || {}) as Promise<TestToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  override connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
import { resolveProperties } from "@ethersproject/properties";
import { UserOperationStruct } from "@zerodevapp/contracts";
import { signUserOpVerifyingPaymaster } from "../api";
import { ErrTransactionFailedGasChecks } from "../../utils/errors";
import { PaymasterAPI } from "./PaymasterAPI";
import { hexifyUserOp } from "../../utils/utils";

type PaymasterProvider = "STACKUP" | "PIMLICO" | "ALCHEMY";

export class VerifyingPaymasterAPI extends PaymasterAPI {
  constructor(
    readonly paymasterUrl: string,
    paymasterProvider: PaymasterProvider
  ) {
    super(paymasterProvider);
  }

  async getPaymasterResp(
    userOp: Partial<UserOperationStruct>
  ): Promise<object | undefined> {
    const resolvedUserOp = await resolveProperties(userOp);

    const hexifiedUserOp: any = hexifyUserOp(resolvedUserOp);

    const paymasterResp = await signUserOpVerifyingPaymaster(
      hexifiedUserOp,
      this.paymasterUrl
    );
    if (paymasterResp === undefined) {
      throw ErrTransactionFailedGasChecks;
    }

    return paymasterResp;
  }
}

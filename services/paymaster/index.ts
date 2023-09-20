import { PaymasterAPI } from "./PaymasterAPI";
import { VerifyingPaymasterAPI } from "./VerifyingPaymasterAPI";

export async function getPaymaster(
  paymasterUrl: string
): Promise<PaymasterAPI> {
  return new VerifyingPaymasterAPI(paymasterUrl, "ALCHEMY");
}

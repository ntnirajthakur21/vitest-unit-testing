import delay from "delay";

export async function charge(
  creditCardInfo: {
    creditCardNumber: string;
  },
  amount: number
) {
  console.log(`Charging Credit Card: ${creditCardInfo.creditCardNumber}`);
  console.log(`Amount: ${amount}`);
  await delay(3000);
  return { status: "success" };
}

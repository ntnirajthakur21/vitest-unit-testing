import { getExchangeRate } from "./libs/currency";

export function getPriceInCurrency(price: number, currency: string) {
  const rate = getExchangeRate("USD", currency);
  return price * rate;
}

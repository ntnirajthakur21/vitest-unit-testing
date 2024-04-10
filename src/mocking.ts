import { trackPageView } from "./libs/analytics";
import { getExchangeRate } from "./libs/currency";
import { getShippingQuote } from "./libs/shipping";

export function getPriceInCurrency(price: number, currency: string) {
  const rate = getExchangeRate("USD", currency);
  return price * rate;
}

export function getShippingInfo(destination: string) {
  const quote = getShippingQuote(destination);
  if (!quote) return "Shipping Unavailable";
  return `Shipping Cost: $${quote.cost} (${quote.estimatedDays} Days)`;
}

export async function renderPage() {
  trackPageView("/home");

  return "<div>content</div>";
}

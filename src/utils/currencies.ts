import { Currency } from "./../models/currencies";

export function formatPriceToPriceWithCurrency(
  price: number,
  currency: Currency
) {
  const priceString = `${price}`;
  const decimals = priceString.slice(-2);
  const whole = priceString.slice(0, priceString.length - 2);

  return `${whole},${decimals} ${currency}`;
}

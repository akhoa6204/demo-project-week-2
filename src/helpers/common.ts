export function formatCurrency(
  value: number | string,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numberValue)) return "";

  return numberValue.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}

export const currencies = [
  { value: "INR", label: "₹ Rupee", locale: "en-IN" },
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
];

export type Currency = (typeof currencies)[0];

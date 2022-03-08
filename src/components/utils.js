export const CURRENCY_USD = {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
};

export function numberWithCommas(x, options = {}) {
  return x.toLocaleString("en-US", options);
}

export function isInteger(value) {
  const re = /^[0-9\b]+$/;
  return re.test(value) ? true : false;
}

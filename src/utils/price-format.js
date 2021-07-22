const formatPrice = (amount) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

export default formatPrice;
import getStripe from './stripe';

const cart = (cartDetails) => {
  return Object.entries(cartDetails).map(p => (
    {
      name: p[1].name, 
      image: p[1].image,
      unit_amount: p[1].price,
      quantity: p[1].quantity
      // tax_rates: ['txr_1J8Cw8Iw7CyPxjdbX0gI2ddb']
    }
  ))
}

const redirectToCheckout = async (e, items) => {
  e.preventDefault()
  const stripe = await getStripe()
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({products: cart(items)})
  }

  fetch('http://localhost:5432/create-checkout-session', options)
    .then(res => {
      return res.json()
    })
    .then(session => {
      // console.log(session)
      stripe.redirectToCheckout({sessionId: session.id})
    })
}

export default redirectToCheckout;
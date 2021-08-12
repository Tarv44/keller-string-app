import loadable from '@loadable/component';
const getStripe = loadable(() => import('./stripe'));

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

const redirectToCheckout = async (e, items, pickingUp) => {
  e.preventDefault()
  const stripe = await getStripe()
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({products: cart(items), pickingUp})
  }

  fetch('http://localhost:8080/api/stripe/sessions', options)
    .then(res => {
      return res.json()
    })
    .then(session => {
      // console.log(session)
      stripe.redirectToCheckout({sessionId: session.id})
    })
}

export const getSuccessData = async (session_id) => {
  const options = {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  }

  return fetch(`http://localhost:8080/api/stripe/sessions/${session_id}`, options)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}

export default redirectToCheckout;
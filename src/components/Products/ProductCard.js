import React from 'react';
import formatPrice from '../../utils/price-format';
import {useShoppingCart} from 'use-shopping-cart';
import getStripe from '../../utils/stripe';


const ProductCard = ({product}) => {
  const {addItem, cartDetails} = useShoppingCart()
  const {id, currency, unit_amount: price} = product
  const cartData = {
    id,
    currency,
    price,
    name: product.product.name
  }

  const cart = () => {
    return Object.entries(cartDetails).map(p => (
      {
        price: p[0], 
        quantity: p[1].quantity,
        tax_rates: ['txr_1J8Cw8Iw7CyPxjdbX0gI2ddb']
      }
    ))
  }

  const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await getStripe()
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({products: cart()})
    }

    fetch('http://localhost:5432/create-checkout-session', options)
      .then(res => {
        return res.json()
      })
      .then(session => {
        stripe.redirectToCheckout({sessionId: session.id})
      })
  }

  return (
    <div>
      <h2>{product.product.name}</h2>
      <p>{formatPrice(product.unit_amount, product.currency)}</p>
      <button onClick={() => addItem(cartData)}>Add To Cart</button>
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  )
}

export default ProductCard;
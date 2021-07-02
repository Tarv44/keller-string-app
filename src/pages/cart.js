import React from 'react';
import Layout from '../components/Layout';
import { useShoppingCart } from "use-shopping-cart";
import redirectToCheckout from '../utils/checkout';

const CartPage = () => {
  const {cartDetails, totalPrice} = useShoppingCart()
  console.log(cartDetails, totalPrice)
  return (
    <Layout>
      <h1>Cart</h1>
      <button onClick={e => redirectToCheckout(e, cartDetails)}>Checkout</button>
    </Layout>
  )
} 

export default CartPage;
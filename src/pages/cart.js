import React from 'react';
import Layout from '../components/Layout';
import { useShoppingCart } from "use-shopping-cart";
import redirectToCheckout from '../utils/checkout';
import CartProductCard from '../components/products/CartProductCard';
import CartTotal from '../components/products/CartTotal';

const CartPage = () => {
  const {cartDetails, totalPrice} = useShoppingCart()
  const cart = () => {
    return Object.entries(cartDetails).map((p,i) => <CartProductCard key={i} product={p[1]}/>)
  }
  return (
    <Layout>
      <h1>My Cart</h1>
      <CartTotal />
      {cart()}
      <button onClick={e => redirectToCheckout(e, cartDetails)}>Checkout</button>
    </Layout>
  )
} 

export default CartPage;
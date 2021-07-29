import React, {useState} from 'react';
import Layout from '../components/Layout';
import { useShoppingCart } from "use-shopping-cart";
import redirectToCheckout from '../utils/checkout';
import CartProductCard from '../components/CartProductCard';
import CartTotal from '../components/CartTotal';

const CartPage = () => {
  const {cartDetails} = useShoppingCart()
  const [pickingUp, setPickingUp] = useState(true)
  console.log(cartDetails)
  const cart = () => {
    return Object.entries(cartDetails).map((p,i) => <CartProductCard key={i} product={p[1]}/>)
  }
  const handleInputChange = () => {
    setPickingUp(!pickingUp)
  }

  return (
    <Layout>
      <h1>My Cart</h1>
      <CartTotal />
      {cart()}
      <form>
        <label>
          <input
            name="isGoing"
            type="checkbox"
            checked={pickingUp}
            onChange={handleInputChange} 
          />
            Pick up in store
          </label>
        <label>  
          <input
            name="isGoing"
            type="checkbox"
            checked={!pickingUp}
            onChange={handleInputChange} 
          />
            Ship to me
        </label>
      </form>
      <button onClick={e => redirectToCheckout(e, cartDetails, pickingUp)}>Checkout</button>
    </Layout>
  )
} 

export default CartPage;
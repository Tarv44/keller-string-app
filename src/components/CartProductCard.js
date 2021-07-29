import React from 'react';
import NumInput from './NumInput';
import { useShoppingCart } from "use-shopping-cart";

const CartProductCard = ({product}) => {
  const {incrementItem, decrementItem, removeItem} = useShoppingCart()
  console.log(product)
  const details = Object.values(product.product_data)
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{details.join(', ')}</p>
      <div>
        <p>{product.formattedPrice}</p>
        <NumInput 
          decCallback={() => decrementItem(product.id)}
          incCallback={() => incrementItem(product.id)}
          value={product.quantity}
        />
      </div>
      <p>Subtotal: <span>{product.formattedValue}</span></p>
      <button onClick={() => removeItem(product.id)}>Remove</button>
    </div>
  )
}

export default CartProductCard;
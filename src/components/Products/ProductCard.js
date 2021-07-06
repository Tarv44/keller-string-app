import React from 'react';
import formatPrice from '../../utils/price-format';
import {useShoppingCart} from 'use-shopping-cart';


const ProductCard = ({price}) => {
  const {addItem} = useShoppingCart()
  const {id, currency, unit_amount} = price
  const cartData = {
    id,
    currency,
    price: unit_amount,
    name: price.product.name,
    product_data: price.product.metadata
  }

  console.log(cartData.product_data)

  return (
    <div>
      <h2>{price.product.name}</h2>
      <p>{formatPrice(price.unit_amount, price.currency)}</p>
      <button onClick={() => addItem(cartData)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard;
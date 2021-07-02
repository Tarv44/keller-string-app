import React from 'react';
import formatPrice from '../../utils/price-format';
import {useShoppingCart} from 'use-shopping-cart';


const ProductCard = ({product}) => {
  const {addItem} = useShoppingCart()
  const {id, currency, unit_amount: price} = product
  const cartData = {
    id,
    currency,
    price,
    name: product.product.name
  }

  return (
    <div>
      <h2>{product.product.name}</h2>
      <p>{formatPrice(product.unit_amount, product.currency)}</p>
      <button onClick={() => addItem(cartData)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard;
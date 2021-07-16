import React from 'react';
import formatPrice from '../../utils/price-format';
import {useShoppingCart} from 'use-shopping-cart';


const ProductCard = ({product}) => {
  const {addItem} = useShoppingCart()
  const currency = 'USD'
  const price = product.price * 100
  const {id, title, images} = product
  const cartData = {
    id,
    currency,
    price,
    name: title,
    image: images[0].file.url
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{formatPrice(price, currency)}</p>
      <img src={images[0].file.url} />
      <button onClick={() => addItem(cartData)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard;
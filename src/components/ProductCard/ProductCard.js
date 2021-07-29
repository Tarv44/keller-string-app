import React from 'react';
import formatPrice from '../../utils/price-format';
import {useShoppingCart} from 'use-shopping-cart';


const ProductCard = ({product}) => {
  const {addItem} = useShoppingCart()
  const {id, title} = product
  const currency = 'USD'
  const images = product.images.map(i => 'https:' + i.file.url)
  const price = product.price * 100
  const cartData = {
    id,
    currency,
    price,
    name: title,
    image: images[0]
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{formatPrice(price)}</p>
      <img src={images[0]} alt={title}/>
      <button onClick={() => addItem(cartData)}>Add To Cart</button>
    </div>
  )
}

export default ProductCard;
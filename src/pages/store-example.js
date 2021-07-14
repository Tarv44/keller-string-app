import React, {useEffect} from "react";
import ProductCard from '../components/products/ProductCard';
import { useStaticQuery, graphql } from "gatsby";
import { useShoppingCart } from "use-shopping-cart";
import {Link} from 'gatsby';
// styles


// data

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query productsQuery {
      allStripePrice(filter: {active: {ne: false}}) {
        nodes {
          product {
            name
          }
          unit_amount
          id
          currency
        }
      }
    }
  `)

  const {cartCount, clearCart} = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])
  return (
    <div>
      {data.allStripePrice.nodes.map(p => (
        <ProductCard key={`product-${p.id}`} price={p} />
      ))}
      <p>Cart count: {cartCount}</p>
      <Link to='/cart'>View Cart</Link>
    </div>
  )
}

export default IndexPage;
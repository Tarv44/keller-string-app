import React, {useEffect} from "react";
import ProductCard from '../components/Products/ProductCard';
import { useStaticQuery, graphql } from "gatsby";
import { useShoppingCart } from "use-shopping-cart";


// styles


// data

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query productsQuery {
      allStripePrice {
        nodes {
          product {
            name
            images
            description
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
          <ProductCard key={`product-${p.id}`} product={p} />
        ))}
        <p>{cartCount}</p>
      </div>
    
  )
}

export default IndexPage;

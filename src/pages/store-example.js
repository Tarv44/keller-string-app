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
    query ShopQuery {
      allContentfulProduct(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          price
          slug
          id
          images {
            file {
              url
            }
          }
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
      {data.allContentfulProduct.nodes.map(p => (
        <ProductCard key={`product-${p.id}`} product={p} />
      ))}
      <p>Cart count: {cartCount}</p>
      <Link to='/cart'>View Cart</Link>
    </div>
  )
}

export default IndexPage;
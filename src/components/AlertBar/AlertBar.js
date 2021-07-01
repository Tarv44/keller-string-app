import  React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Banner = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allContentfulProduct {
  //       nodes {
  //         images {
  //           file {
  //             url
  //           }
  //           title
  //           description
  //           fluid {
  //             ...GatsbyContentfulFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(data)
  return (
    <div>
      {/* <img src={data.allContentfulProduct.nodes[1].images[0].fluid.src} />
      <Img 
        style={{width: '400px'}}
        fluid={data.allContentfulProduct.nodes[1].images[0].fluid} 
        key={data.allContentfulProduct.nodes[1].images[0].fluid.src}
        alt={data.allContentfulProduct.nodes[1].images[0].title}
      /> */}
      {/* <h2>{data.contentfulBanner.message}</h2> */}
      <h2>All good</h2>
    </div>
  )
}

export default Banner;
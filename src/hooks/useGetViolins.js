import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useGetViolins = () => {
  const data = useStaticQuery(graphql`
    query Violins {
      allContentfulInstrument(
        filter: {
          product: { elemMatch: { currentPrice: { gt: 0 } } }
          subcategory: { eq: "Violins" }
        }
      ) {
        nodes {
          model
          product {
            previous_Price
            currentPrice
            images {
              fluid {
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
          id
          made_by
          level
          country_of_Origin
          copy_Style
        }
      }
    }
  `);
  const violins = data.allContentfulInstrument.nodes.map((i) => ({
    id: i.id,
    model: i.model,
    ...i.product[0],
  }));
  return violins;
};

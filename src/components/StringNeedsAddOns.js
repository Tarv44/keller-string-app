import React from "react";
import AddOnsGallery from "./AddOnsGallery";
import { useStaticQuery, graphql } from "gatsby";

const StringNeedsAddOns = (props) => {
  // const data = useStaticQuery(graphql`
  //   query StringNeedsQuery {
  //     contentfulStringNeeds {
  //       instruments {
  //         title
  //         image {
  //           fluid {
  //             srcWebp
  //             srcSetWebp
  //             src
  //             srcSet
  //           }
  //         }
  //         link
  //         linkLabel
  //       }
  //       cases {
  //         title
  //         link
  //         linkLabel
  //         image {
  //           fluid {
  //             srcWebp
  //             srcSetWebp
  //             src
  //             srcSet
  //           }
  //         }
  //       }
  //       bows {
  //         title
  //         link
  //         linkLabel
  //         image {
  //           fluid {
  //             srcSetWebp
  //             src
  //             srcSet
  //           }
  //         }
  //       }
  //       accessories {
  //         title
  //         link
  //         linkLabel
  //         image {
  //           fluid {
  //             srcSetWebp
  //             src
  //             srcSet
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const cardData = Object.values(data.contentfulStringNeeds);
  return (
    <AddOnsGallery
      title="All Your String Needs Under One Roof"
      subtitle="Instruments, cases, bows, and other accessories"
      // cardData={cardData}
    />
  );
};
export default StringNeedsAddOns;

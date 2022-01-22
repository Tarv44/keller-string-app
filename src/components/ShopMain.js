import React from "react";
import styled from "styled-components";
import ProductGallery from "./ProductGallery";
import ShopSidebar from "./ShopSidebar";

const Container = styled.div`
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const ShopMain = (props) => {
  return (
    <Container>
      <ShopSidebar />
      <ProductGallery />
    </Container>
  );
};
export default ShopMain;

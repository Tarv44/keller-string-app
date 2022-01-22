import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import PageHeader from "./PageHeader";
import ShopMain from "./ShopMain";
import { Container } from "./styled/Container";

const ShopTemplate = ({ path, title, subtitle }) => {
  return (
    <Layout>
      <Container>
        <PageHeader path={path} title={title} subtitle={subtitle} info={true} />
        <ShopMain />
      </Container>
    </Layout>
  );
};
export default ShopTemplate;

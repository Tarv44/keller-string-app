import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import PageHeader from "./PageHeader";
import Hr from "./styled/Hr";
import Layout from "./Layout";
import { Container } from "./styled/Container";

const CategoryPage = ({
  categories,
  title,
  subtitle,
  path,
  infoCard,
  addOns,
}) => {
  const cats = categories.map((c, i) => <CategoryCard key={i} card={c} />);
  return (
    <Layout>
      <div>
        <Container>
          <PageHeader
            title={title}
            subtitle={subtitle}
            path={path}
            info={true}
          />
          <Categories>{cats}</Categories>
          <Hr style={{ marginBottom: 35 }} />
          {infoCard}
          <Hr style={{ marginBottom: 35 }} />
        </Container>
        {addOns}
      </div>
    </Layout>
  );
};
export default CategoryPage;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 37px;
  > div {
    margin-bottom: 35px;
  }
  > div:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 481px) {
  }
  @media screen and (min-width: 625px) {
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    width: 734px;
    > div {
      margin-bottom: 0;
    }
    > div:nth-child(-n + 2) {
      margin-bottom: 30px;
    }
    > div:nth-child(odd) {
      margin-right: 26px;
    }
  }
  @media screen and (min-width: 1025px) {
  }
  @media screen and (min-width: 1200px) {
    width: 1046px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    > div:nth-child(odd) {
      margin-right: 40px;
    }
    > div:nth-child(-n + 2) {
      margin-bottom: 40px;
    }
  }
`;

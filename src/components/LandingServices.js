import React from 'react';
import styled from 'styled-components';
import Button from './styled/Button';
import { useStaticQuery, graphql } from "gatsby";
// import ShopImg from '../images/landing-shop.png';
// import RentImg from '../images/landing-rent.png';
// import RepairImg from '../images/landing-repair.png';
import { Link } from 'gatsby';
import Hr from './styled/Hr';

const LandingServices = (props) => {
  const ImageQuery = useStaticQuery(graphql`
    query ImageQuery {
      shop: contentfulAsset(contentful_id: {eq: "3ZLNg9XjelFEypzJ1LsTrj"}) {
        fluid {
          srcWebp
          srcSetWebp
          srcSet
          src
        }
      }
      rent: contentfulAsset(contentful_id: {eq: "3bY02gudHBY8QQCEeGn4mv"}) {
        fluid {
          srcWebp
          srcSetWebp
          srcSet
          src
        }
      }
      repair: contentfulAsset(contentful_id: {eq: "4x7lAEDh1nKeKDo2wJQjoF"}) {
        fluid {
          srcWebp
          srcSetWebp
          srcSet
          src
        }
      }
    }
  `)
  console.log(ImageQuery)
  const ShopImg = ImageQuery.shop.fluid
  const RentImg = ImageQuery.rent.fluid
  const RepairImg = ImageQuery.repair.fluid
  return (
    <Services>
      <h2>What Can We Help You With?</h2>
      <Cards>
        <Card>
          <picture>
            <source srcSet={ShopImg.srcSetWebp} type='image/webp'/>
            <source srcSet={ShopImg.srcSet} type='image/png'/>
            <img width={200} height={200} src={ShopImg.src} alt="Base of Violin" />
          </picture>
          <h4>Shop</h4>
          <p>Wherever you are, be a New Orleanian! Bring the experience of our violin shop to your home! </p>
          <Button as={Link}>Shop Now</Button>
        </Card>
        <Card>
          <picture>
            <source srcSet={RentImg.srcSetWebp} type='image/webp'/>
            <source srcSet={RentImg.srcSet} type='image/png'/>
            <img width={200} height={200} src={RentImg.src} alt="Man helping child pick violin" />
          </picture>
          <h4>Rent</h4>
          <p>Optimal quality & terrific value to ensure that you or your child has an ideal playing experience!</p>
          <Button as={Link}>Rent Today</Button>
        </Card>
        <Card>
          <picture>
            <source srcSet={RepairImg.srcSetWebp} type='image/webp'/>
            <source srcSet={RepairImg.srcSet} type='image/png'/>
            <img width={200} height={200} src={RepairImg.src} alt="Pieces of violin" />
          </picture>
          <h4>Repair</h4>
          <RepairP>All restorations & repairs are performed by in-house Luthiers with over 30 years of experience.</RepairP>
          <Button as={Link}>Schedule a Service</Button>
        </Card>
      </Cards>
      <Hr />
    </Services>
  );
};

export default LandingServices;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 35px;
  h2 {
    margin-bottom: 25px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  > div {
    margin-bottom: 50px;
  }
  > div:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 0;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    height: auto;
    margin-bottom: 15px;
  }
  h4 {
    margin-bottom: 10px;
  }
  p {
    width: 250px;
    margin-bottom: 15px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    p, a {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (min-width: 1025px) {
    p, a, img {
      width: 250px;
    }
  }
  @media (min-width: 1200px) {
    height: 514px;
    justify-content: space-between;
    p, a, img {
      width: 300px;
    }
    p {
      font-size: 20px;
    }
  }
`

const RepairP = styled.p`
  
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    font-size: 19px !important;
  }
`
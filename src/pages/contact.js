import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Path from '../components/styled/path';

const Contact = (props) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      storefront: contentfulAsset(contentful_id: {eq: "3b5fDEQEiqeZJm4bIFsLTw"}) {
        fluid {
          srcWebp
        }
        description
      }
      owners: contentfulAsset(contentful_id: {eq: "ttdVW6Higt7CYVU1YIOnq"}) {
        fluid {
          srcWebp
        }
        description
      }
    }
  `)
  const paths = [
    {
      path: '/',
      label: 'About'
    },
    {
      label: 'Contact Us'
    }
  ]
  return (
    <Layout>
      <ContactContainer>
        <Header>
          <Path linkData={paths}/>
          <h1>Contact Us</h1>
          <h3>We look forward to working with you! </h3>
        </Header>
        <Main>
          <ContactDetails>
            <img src={data.storefront.fluid.srcWebp} alt={data.storefront.description} />
            <div>
              <div>
                <h2>Email</h2>
                <p>info@kellerstrings.com</p>
              </div>
              <div>
                <h2>Address</h2>
                <p>140 W. Harrison Avenue</p>
                <p>New Orleans, LA 70124</p>
              </div>
              <div>
                <h2>Phone</h2>
                <p>(504) 265-0530</p>
              </div>
            </div>
          </ContactDetails>
          <HoursSection>
            <Hours>
              <h2>Shop Hours</h2>
              <ul>
                <li>
                  <span>Tuesday</span>
                  <span>11am - 5pm</span>
                </li>
                <li>
                  <span>Wednesday</span>
                  <span>11am - 5pm</span>
                </li>
                <li>
                  <span>Thursday</span>
                  <span>11am - 5pm</span>
                </li>
                <li>
                  <span>Friday</span>
                  <span>11am - 4pm</span>
                </li>
                <li>
                  <span>Saturday</span>
                  <span>11am - 4pm</span>
                </li>
              </ul>
            </Hours>
            <img src={data.owners.fluid.srcWebp} alt={data.owners.description} />
          </HoursSection>
          <Directions>
            <h2>Directions</h2>
            <p>Our shop is located in the West End area in New Orleans (near Lakeview). We are conveniently located near the West End Exit of I-10 East or West. There is FREE on-street parking, and nearby restaurants. For our disabled clients, there is parking in the back of our shop with a ramp to our back door. Please call ahead for back-door access: 504-265-0530.</p>
            <p><b>Directions from I-10 East: </b>Take I-610 E, follow signs for Slidell. Take Exit 1A to merge onto West End Blvd. Turn left onto Harrison Avenue.</p>
            <p><b>Directions from I-10 West: </b>Take exit 231B to merge onto West End Blvd. Turn left onto Harrison Avenue.</p>
            <p><b>Directions from Uptown New Orleans: </b>Take S. Carrollton Avenue to ramp onto 1-10 W. Take exit 231B to merge onto West End Blvd. Turn left onto Harrison Avenue.</p>
            <p><b>Directions from Metairie: </b>Take Veterans Memorial Blvd toward New Orleans. Turn left onto Fleur De Lis Drive. Turn Right onto W. Harrison Avenue.</p>
          </Directions>
        </Main>
      </ContactContainer>
    </Layout>
  );
};
export default Contact;
const ContactContainer = styled.div`
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  > * {
    width: 354px;
  }
  h2 {
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: 20px;
  }
  @media screen and (min-width: 481px) {
    > * {
      width: 425px;
    }
  }
  @media screen and (min-width: 625px) {
    > * {
      width: 555px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0;
    > * {
      width: 650px;
    }
  }
  @media screen and (min-width: 1025px) {
    > * {
      width: 825px;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 70px 0 100px;
    > * {
      width: 1000px;
    }
  }
  @media screen and (min-width: 1440px) {
    > * {
      width: 1240px;
    }
  }
`
const Header = styled.header`
  margin-bottom: 25px;
  h1 {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const ContactDetails = styled.section`
  margin-bottom: 30px;
  text-align: center;
  img {
    margin-bottom: 25px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > div > div {
    margin-bottom: 15px;
  }
  h2 {
    text-transform: capitalize;
    color: var(--color-black);
    margin-bottom: 10px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {
    > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

const HoursSection = styled.section`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 475px;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      width: 575px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 1040px;
    img {
      width: 600px;
    }
  }
`

const Hours = styled.div`
  margin-bottom: 30px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    height: 57px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  }
  li:last-of-type {
    border-bottom: none;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {
    width: 475px;
  }
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {
    width: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 345px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`

const Directions = styled.section`
  p {
    margin-bottom: 25px;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {
    p {
      font-size: 24px;
      line-height: 35px;
    }
  }
  @media screen and (min-width: 1200px) {}
`
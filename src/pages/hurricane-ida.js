import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogPage from '../components/BlogPage';
import Layout from '../components/Layout';

const HurricaneIda = (props) => {
  const data = useStaticQuery(graphql`
    query HurricaneQuery {
      contentfulAsset(contentful_id: {eq: "5ahxLputQOKBTLwrHRJigD"}) {
        fluid {
          srcWebp
        }
        title
      }
    }
  `)
  const paths = [
    {
      path: '/',
      label: 'About'
    },
    {
      path: '/',
      label: 'New & Events'
    },
    {
      label: 'Hurricane Ida Updates'
    },
  ]
  const paragraphs = [
    `Due to Hurricane Ida and the massive power outage, Keller Strings will remain closed until further notice. Please watch our social media and website for progress and information. Stay safe y’all.`,
    `From what we know, the shop appears to be dry with only minor damage. It's difficult to know until we are there and examine walls, etc. Apparently, we do not have power to the shop at this point. Thank you to everyone who has expressed concern!`
  ]
  return (
    <Layout>
      <BlogPage 
        paths={paths}
        title={'Hurricane Ida Updates'}
        date={'September 13th, 2021'}
        imgSrc={data.contentfulAsset.fluid.srcWebp}
        imgAlt={data.contentfulAsset.title}
        paragraphs={paragraphs}
      />
    </Layout>
  );
};
export default HurricaneIda;
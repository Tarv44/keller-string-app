import React from 'react';
import styled from 'styled-components';
import Path from './styled/path';

const BlogPage = (props) => {
  const {
    paths, 
    title, 
    date, 
    imgSrc, 
    imgAlt, 
    paragraphs
  } = props
  const paras = paragraphs.map((p, i) => (
    <p key={i}>{p}</p>
  ))
  return (
    <Section>
      <Path linkData={paths} />
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <Paragraphs>{paras}</Paragraphs>
    </Section>
  );
};
export default BlogPage;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  text-align: left;
  
  h1,
  h3,
  p {
    width: 354px;
  }

  h1 {
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 30px;
    font-style: italic;
  }
  img {
    width: 315px;
    margin-bottom: 30px;
  }
   > p {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 481px) {
    h1,
    h3,
    p {
      width: 425px;
    }
    img {
      width: 370px;
    }
  }
  @media screen and (min-width: 625px) {
    h1,
    h3,
    p {
      width: 555px;
    }
    img {
      width: 500px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0;
    h1,
    h3,
    p {
      width: 675px;
    }
    h3 {
      margin-bottom: 50px;
    }
    img {
      margin-bottom: 50px;
    }
  }
  @media screen and (min-width: 1025px) {
    h1,
    h3,
    p {
      width: 800px;
    }
    img {
      width: 550px;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 70px 0 100px;
    h1,
    h3,
    p {
      width: 1000px;
    }
    img {
      width: 650px;
    }
  }
  @media screen and (min-width: 1440px) {
    h1,
    h3,
    p {
      width: 1240px;
    }
    img {
      width: 800px;
    }
  }
`

const Paragraphs = styled.div`
  p:first-of-type {
      margin-bottom: 25px;
  }
  p {
    line-height: 28px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {
    p {
      font-size: 24px;
      line-height: 35px;
    }
  }
`
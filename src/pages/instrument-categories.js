import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import CategoryPage from '../components/CategoryPage';

const InstrumentCategories = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulInstrumentCategories {
        images {
          fluid {
            aspectRatio
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
  `)
  const images = data.contentfulInstrumentCategories.images
  const path = [
    {
      path: "/shop-categories",
      label: "Shop"
    },
    {
      label: "Instruments"
    }
  ]

  const categories = [
    {
      title: `Violins`,
      subtitle: `We pride ourselves on providing expertly crafted violins with professional setup & optimal sound.`,
      img: <img width={125} height={125/images[0].fluid.aspectRatio} src={images[0].fluid.src} srcSet={images[0].fluid.srcSetWebp + ', ' + images[0].fluid.srcSet} alt={'Violin'} />,
      path: '/shop-violins'
    },
    {
      title: `Violas`,
      subtitle: `If you find the viola you love, & the size is not pictured, please allow us to order for you. Viva Viola!`,
      img: <img width={125} height={125/images[1].fluid.aspectRatio} src={images[1].fluid.src} srcSet={images[1].fluid.srcSetWebp + ', ' + images[1].fluid.srcSet} alt={'Viola'} />,
      path: '/shop-violas'
    },
    {
      title: `Cellos`,
      subtitle: `The cello is the instrument that most resembles the human voice - superior sound for every budget.`,
      img: <img width={125} height={125/images[2].fluid.aspectRatio} src={images[2].fluid.src} srcSet={images[2].fluid.srcSetWebp + ', ' + images[2].fluid.srcSet} alt={'Cello'} />,
      path: '/shop-cellos'
    },
    {
      title: `Upright Bass`,
      subtitle: `The local talent includes bassist in most every genre.  Setup will vary depending on what you play!`,
      img: <img width={125} height={125/images[3].fluid.aspectRatio} src={images[3].fluid.src} srcSet={images[3].fluid.srcSetWebp + ', ' + images[3].fluid.srcSet} alt={'Upright Bass'} />,
      path: '/shop-upright-bass'
    }
  ]
  return (
    <CategoryPage 
      title={"Instruments"}
      subtitle={"Unique variety of new, used, old, & rare to fit all budgets. Specializing in European Instruments."}
      path={path}
      categories={categories}
    />
  );
};
export default InstrumentCategories;
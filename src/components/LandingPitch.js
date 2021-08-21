import React, {Suspense} from 'react';
import styled from 'styled-components';
import {Link as GLink} from 'gatsby';
import loadable from '@loadable/component';
import Button from './styled/Button';
const LandingVideo = React.lazy(() => import('./LandingVideo'));
const Carousel = loadable(() => import('./Carousel'));
const Hr = loadable(() => import('./styled/Hr'));
const Link = loadable(() => import('./styled/Link'));

const LandingPitch = (props) => {
  const Card1 = (
    <Card>
      <Container1>
        <CardH2>Please Remember That As Of February <
          Year1>‘21</Year1>
          <Year2>'21...</Year2>
          <Year3>2021...</Year3>
        </CardH2>
        <p>We’ve got a new location waiting for you on 140 W Harrison Ave</p>
        <Btn as={GLink}>Learn More</Btn>
      </Container1>
    </Card>
  )
  const cards = [
    Card1,
    Card1,
  ]
  return (
    <Pitch>
      <h2>Trust Us With Your String Needs</h2>
      <h3>Let us tell you why...</h3>
      <IframeContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <LandingVideo />
        </Suspense>
      </IframeContainer>
      <Hr style={{marginBottom: 35}} />
      <CovidP>Learn all about our COVID precautions <Link>here</Link>.</CovidP>
      <Hr style={{marginBottom: 50}}/>
      <CarouselContainer>
        <Carousel 
          cards={cards}
        />
      </CarouselContainer>
      <Hr style={{marginBottom: 50}}/>
    </Pitch>
  );
};
export default LandingPitch;

const Pitch = styled.div`
  h2 {
    margin-bottom: 8px;
  }
  h3 {
    color: var(--color-primary);
    margin-bottom: 20px;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    h3 {
      font-size: 26px;
    }
  }
`

const IframeContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    margin-bottom: 70.5px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    margin-bottom: 69px;
  }
`

const CovidP = styled.p`
  border-top: 4px solid var(--color-primary);
  border-bottom: 4px solid var(--color-primary);
  margin: 0 52.5px 35px;
  padding: 15px 20px;
  font-size: 18px;
  text-transform: capitalize;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    font-size: 22px;
    margin: 0 35px 70px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    font-size: 28px;
    margin: 0 120px 70px;
  }
`
const CarouselContainer = styled.div`
  padding: 0 29.5px;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 6px;
  }
  p {
    margin-bottom: 12px;
    font-weight: 500;
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    h2 {
      margin-bottom: 12px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    p {
      margin-bottom: 15px;
    }
  }
`

const Card = styled.div`
  background: var(--color-grey-1);
  padding: 25px;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    padding: 25px 40px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    padding: 30px 40px;
  }
`

const CardH2 = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  color: var(--color-primary);
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Btn = styled(Button)`
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    width: 171px;
  }
`

const Year1 = styled.span`
  display: inline;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const Year2 = styled.span`
  display: none;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    display: inline;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    display: none;
  }
`

const Year3 = styled.span`
  display: none;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    display: inline;
  }
`

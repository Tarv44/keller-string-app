import React from 'react';
import styled from 'styled-components';

const QuestionCard = (props) => {
  return (
    <Card>
      <h2>Don’t Know Where to Begin?</h2>
    </Card>
  );
};
export default QuestionCard;

const Card = styled.div`
  background: var(--color-grey-1);
  width: 355px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  h2 {
    color: var(--color-primary);
    width: 215px;
  }
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 625px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`
import styled from 'styled-components';

const Hr = styled.hr`
  width: 360px;
  margin: auto;
  color: var(--color-grey-3);
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

export default Hr;
import styled from 'styled-components';

const Hr = styled.hr`
  margin: 0 27px;
  color: var(--color-grey-3);
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

export default Hr;
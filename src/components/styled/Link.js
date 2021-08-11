import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components";

const Link = styled(GatsbyLink)`
  text-decoration: underline;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

export default Link;
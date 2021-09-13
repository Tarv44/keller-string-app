import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components";

const Link = styled(GatsbyLink)`
  text-decoration: underline;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`

export default Link;
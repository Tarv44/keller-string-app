import  React, {useState} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown'
import {CgClose} from 'react-icons/cg'
import styled from 'styled-components';

const AlertBar = () => {
  const [closed, setClosed] = useState(false)
  const data = useStaticQuery(graphql`
    query AlertQuery {
      contentfulBanner {
        mobile {
          mobile
        }
        desktop {
          desktop
        }
      }
    }
  `)
  const mobile = data.contentfulBanner.mobile.mobile 
  const desktop = data.contentfulBanner.desktop.desktop
  return (
    <Bar closed={closed}>
      <MobileMessage>{mobile}</MobileMessage>
      <DesktopMessage>{desktop}</DesktopMessage>
      <CloseIcon onClick={() => setClosed(true)} size={16}/>
    </Bar>
  )
}

export default AlertBar;

const Bar = styled.div`
  width: 100%;
  display: ${props => props.closed ? 'none' : 'flex'};
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding: 13px 4.8%;
  background: var(--color-red);
  color: white;
  position: relative;
`

const MobileMessage = styled(ReactMarkdown)`
  display: block;
  position: absolute;
  left: center;
  @media (min-width: 481px) {
    display: none
  }
`
const DesktopMessage = styled(ReactMarkdown)`
  display: none;
  position: absolute;
  left: center;
  @media (min-width: 481px) {
    display: block
  }
`

const CloseIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
`


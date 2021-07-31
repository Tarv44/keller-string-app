import  React, {useContext} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';
import {CgClose} from 'react-icons/cg';
import styled from 'styled-components';
import AlertContext from '../contexts/alertContext';

const AlertBar = () => {
  const {isClosed, setIsClosed} = useContext(AlertContext)
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
    <Bar closed={isClosed}>
      <MobileMessage>{mobile}</MobileMessage>
      <DesktopMessage>{desktop}</DesktopMessage>
      <MobileIcon onClick={() => setIsClosed(true)} size={10}/>
      <DesktopIcon onClick={() => setIsClosed(true)} size={14}/>
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
  justify-content: center;
  padding: 10px 4.8%;
  background: var(--color-primary);
  color: white;
  position: relative;

  @media (min-width: 481px) {
    padding: 13px 12px;
  }
  @media (min-width: 506px) {
    padding: 13px 4.8%;
  }
  
  
`

const MobileMessage = styled(ReactMarkdown)`
  display: block;
  position: absolute;
  left: center;
  font-size: 12px;

  p {
    font-size: 12px;
    color: #ffffff;
  }
  @media (min-width: 481px) {
    display: none;
    p {
      font-size: 16px;
    }
  }
`


const DesktopMessage = styled(ReactMarkdown)`
  display: none;
  position: absolute;
  left: center;

  p {
    font-size: 12px;
    color: #ffffff;
  }
  @media (min-width: 481px) {
    display: block;

    p {
      font-size: 16px;
    }
  }
`

const MobileIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
  display: block;

  @media (min-width: 481px) {
    display: none;
  }
`

const DesktopIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
  display: none;

  @media (min-width: 481px) {
    display: block;
  }
`


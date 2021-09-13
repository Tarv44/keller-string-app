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
      <DesktopIcon onClick={() => setIsClosed(true)} size={16}/>
      <LargeIcon onClick={() => setIsClosed(true)} size={20}/>
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

  @media screen and (min-width: 481px) {
    padding: 13px 8px;
  }
  @media screen and (min-width: 520px) {
    padding: 13px 4.8%;
  }
  @media screen and (min-width: 768px) {
    padding: 27px 4.8%;
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
  @media screen and (min-width: 481px) {
    display: none;
  }
`


const DesktopMessage = styled(ReactMarkdown)`
  display: none;
  position: absolute;
  left: center;

  p {
    font-size: 16px;
    color: #ffffff;
  }
  @media screen and (min-width: 481px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 20px;
    }
  }
`

const MobileIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
  display: block;

  @media screen and (min-width: 481px) {
    display: none;
  }
`

const DesktopIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 481px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const LargeIcon = styled(CgClose)`
  align-self: flex-end;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1025px) {}
  @media screen and (min-width: 1200px) {}
`


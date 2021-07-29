import  React, {useState, useContext} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown'
import CloseIcon from '@material-ui/icons/Close';
import * as styles from './AlertBar.module.css';
import ScreenContext from '../../contexts/screenContext';


const AlertBar = () => {
  const {isMobile} = useContext(ScreenContext)
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

  const message = isMobile ? data.contentfulBanner.mobile.mobile : data.contentfulBanner.desktop.desktop
  return (
    <div className={styles.alertBar} style={closed ? {display: 'none'} : null}>
      <ReactMarkdown>{message}</ReactMarkdown>
      <CloseIcon onClick={() => setClosed(true)} />
    </div>
  )
}

export default AlertBar;
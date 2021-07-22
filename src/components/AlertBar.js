import  React, {useState} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown'
// import {GrClose} from 'react-icons/gr';
// import { IconContext } from 'react-icons';
import CloseIcon from '@material-ui/icons/Close';
import * as styles from './AlertBar.module.css';


const AlertBar = () => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let sessionId = params.get("session_id"); // is the string "Jonathan"
  console.log(sessionId); // is the number 18
  const [closed, setClosed] = useState(false)
  // const data = useStaticQuery(graphql`
  //   query AlertQuery {
  //     contentfulBanner {
  //       message {
  //         message
  //       }
  //     }
  //   }
  // `)

  // const message = data.contentfulBanner.message.message
  return (
    <div className={styles.alertBar} style={closed ? {display: 'none'} : null}>
      {/* <ReactMarkdown>{message}</ReactMarkdown> */}
      <CloseIcon onClick={() => setClosed(true)} />
    </div>
  )
}

export default AlertBar;
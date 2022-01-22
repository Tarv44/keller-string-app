import React from "react";
import InfoSVG from "../images/info-icon.svg";
import { Link } from "gatsby";

const BeginnerInfo = (props) => {
  return (
    <>
      <p>
        Are you a <Link to="/">beginner</Link>?
      </p>
      <img width={30} height={30} src={InfoSVG} alt={"Info icon"} />
    </>
  );
};
export default BeginnerInfo;

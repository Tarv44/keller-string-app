import { Link } from "gatsby";
import React from "react";
import InfoCard from "./InfoCard";

const BeginCard = () => {
  return (
    <InfoCard
      title="Don’t Know Where to Begin?"
      description={
        <>
          Head on over to our Resources tab for helpful guides such as,{" "}
          <Link to="/first-instrument">Choosing Your 1st Instrument</Link>
        </>
      }
      link="/first-instrument"
      linkLabel="Learn More"
    />
  );
};
export default BeginCard;

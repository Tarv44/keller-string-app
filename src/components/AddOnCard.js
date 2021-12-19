import React from "react";
import Button from "./styled/Button";
import Link from "./styled/Link";

const AddOnCard = ({ data }) => {
  return (
    <div>
      <picture>
        <source srcSet={data.image.fluid.srcSetWebp} type="image/webp" />
        <source srcSet={data.image.fluid.srcSet} type="image/png" />
        <img
          width={250}
          height={250}
          src={data.image.fluid.src}
          alt={data.title}
        />
      </picture>
      <h3>{data.title}</h3>
      <Button as={Link} to={data.link}>
        {data.linkLabel}
      </Button>
    </div>
  );
};
export default AddOnCard;

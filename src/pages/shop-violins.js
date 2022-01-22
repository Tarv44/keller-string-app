import React from "react";
// import styled from "styled-components";
import ShopTemplate from "../components/ShopTemplate";

const ShopViolins = (props) => {
  return (
    <ShopTemplate
      title="Violins"
      subtitle="From beginner level to master quality instruments, we have everything you need right here."
      path={[
        {
          label: "Shop",
          path: "/",
        },
        {
          label: "Instruments",
          path: "/",
        },
        {
          label: "Violins",
        },
      ]}
    />
  );
};
export default ShopViolins;

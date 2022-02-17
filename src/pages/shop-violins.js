import React from "react";
import ShopTemplate from "../components/ShopTemplate";
import { useGetViolins } from "../hooks/useGetViolins";

const ShopViolins = (props) => {
  const violins = useGetViolins();
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

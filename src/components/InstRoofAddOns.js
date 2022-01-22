import React from "react";
import AddOnsGallery from "./AddOnsGallery";
import { useInstrumentCategories } from "../hooks/useInstrumentCategories";

const InstRoofAddOns = (props) => {
  const { images } = useInstrumentCategories();
  const linkLabel = "Shop Accessories";
  const cardData = [
    {
      image: images[0],
      title: "Violin",
      // NL
      linkPath: "/",
      linkLabel,
    },
    {
      image: images[1],
      title: "Viola",
      // NL
      linkPath: "/",
      linkLabel,
    },
    {
      image: images[2],
      title: "Cello",
      // NL
      linkPath: "/",
      linkLabel,
    },
    {
      image: images[3],
      title: "Bass",
      // NL
      linkPath: "/",
      linkLabel,
    },
  ];
  return (
    <AddOnsGallery
      title="All Your String Needs Under One Roof"
      subtitle="Instruments, cases, bows, and other accessories"
      cardData={cardData}
    />
  );
};
export default InstRoofAddOns;

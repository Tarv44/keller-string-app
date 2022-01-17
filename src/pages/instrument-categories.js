import React from "react";
import CategoryPage from "../components/CategoryPage";
import BeginCard from "../components/BeginCard";
import StringNeedsAddOns from "../components/StringNeedsAddOns";
import { useInstrumentCatImages } from "../hooks/useInstrumentCatImages";

const InstrumentCategories = () => {
  const { categories } = useInstrumentCatImages();
  const path = [
    {
      path: "/shop-categories",
      label: "Shop",
    },
    {
      label: "Instruments",
    },
  ];
  return (
    <CategoryPage
      title={"Instruments"}
      subtitle={
        "Unique variety of new, used, old, & rare to fit all budgets. Specializing in European Instruments."
      }
      path={path}
      categories={categories}
      infoCard={BeginCard()}
      addOns={StringNeedsAddOns}
    />
  );
};
export default InstrumentCategories;

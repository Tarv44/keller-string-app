import React from "react";
import CategoryPage from "../components/CategoryPage";
import BeginCard from "../components/BeginCard";
import InstRoofAddOns from "../components/InstRoofAddOns";
import { useInstrumentCategories } from "../hooks/useInstrumentCategories";

const InstrumentCategories = () => {
  const { categories } = useInstrumentCategories();
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
      addOns={InstRoofAddOns()}
    />
  );
};
export default InstrumentCategories;

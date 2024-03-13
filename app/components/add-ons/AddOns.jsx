import React from "react";
import Title from "@/app/components/ui/Title";
import Description from "@/app/components/ui/Description";
import { useSelector } from "react-redux";
import MonthlyAddOn from "@/app/components/ui/MonthlyAddOn";
import YearlyAddOn from "@/app/components/ui/YearlyAddOn";

export default function AddOns() {
  const selected_plan = useSelector((state) => state.selected_plan);
  console.log(selected_plan)
  return (
    <div
      className={`w-[450px] h-full lg:relative flex flex-col overflow-hidden`}
    >
      <div className={`w-full mb-[42px] text-marineBlue`}>
        <Title>Pick add-ons</Title>
        <Description>Add-ons help enhance your gaming experience.</Description>
      </div>
      <div
        className={`w-full flex items-center left-0 relative gap-4 transition-all duration-300 mb-[42px] flex-col`}
      >
        {selected_plan.plan_type === "Monthly" ? (
          <MonthlyAddOn />
        ) : (
          <YearlyAddOn />
        )}
      </div>
    </div>
  );
}

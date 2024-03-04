import React from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {selectedPlan} from "@/redux/action";

export default function YearPlan({ year_plan, selectPlan }) {
	
	const select_year_plan = useSelector(
		(state) => state.plan.Yearly_Plan.select_year_plan,
	);
  const dispatch = useDispatch();
  
  const handleSelectYearArcade = () => {
    dispatch(selectedPlan(year_plan.select_year_plan = year_plan.arcade.id));
  };
  const handleSelectYearAdvanced = () => {
    dispatch(selectedPlan(year_plan.select_year_plan = year_plan.advanced.id + 1));
  };
  const handleSelectYearPro = () => {
    dispatch(selectedPlan(year_plan.select_year_plan = year_plan.pro.id + 1));
  };
	
  
  
  return (
    <div
      className={`w-[450px] lg:flex items-center lg:justify-between gap-[18px] *:cursor-pointer`}
    >
      <div
        className={`border transition-all ${
          selectPlan === 2 && select_year_plan === year_plan.arcade.id
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[184px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectYearArcade();
        }}
      >
        <Image src={year_plan.arcade.img} alt={year_plan.arcade.plan_name} />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {year_plan.arcade.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${year_plan.arcade.price}/mo
          </p>
          <p className={`text-xs text-marineBlue`}>{year_plan.arcade.trail}</p>
        </div>
      </div>
      <div
        className={`border transition-all ${
          selectPlan === 2 && select_year_plan === year_plan.advanced.id +1
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[184px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectYearAdvanced();
        }}
      >
        <Image
          src={year_plan.advanced.img}
          alt={year_plan.advanced.plan_name}
        />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {year_plan.advanced.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${year_plan.advanced.price}/mo
          </p>
          <p className={`text-xs text-marineBlue`}>
            {year_plan.advanced.trail}
          </p>
        </div>
      </div>
      <div
        className={`border transition-all ${
          selectPlan === 2 && select_year_plan === year_plan.pro.id +1
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[184px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectYearPro();
        }}
      >
        <Image src={year_plan.pro.img} alt={year_plan.pro.plan_name} />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {year_plan.pro.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${year_plan.pro.price}/mo
          </p>
          <p className={`text-xs text-marineBlue`}>{year_plan.pro.trail}</p>
        </div>
      </div>
    </div>
  );
}

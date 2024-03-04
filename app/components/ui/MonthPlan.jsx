import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectedPlan } from "@/redux/action";

export default function MonthPlan({ month_plan, selectPlan }) {
  const select_month_plan = useSelector(
    (state) => state.plan.Monthly_Plan.select_month_plan,
  );
  const selected_plan = useSelector((state) => state.selected_plan);
  const dispatch = useDispatch();

  const handleSelectMonthArcade = (selected_plan) => {
    dispatch(
      selectedPlan((month_plan.select_month_plan = month_plan.arcade.id)),
    );
  };
  const handleSelectMonthAdvanced = (selected_plan) => {
    dispatch(
      selectedPlan((month_plan.select_month_plan = month_plan.advanced.id + 1)),
    );
  };
  const handleSelectMonthPro = (select_plan) => {
    dispatch(
      selectedPlan((month_plan.select_month_plan = month_plan.pro.id + 1)),
    );
  };

  return (
    <div
      className={`w-[450px] lg:flex items-center lg:justify-between gap-[18px] *:cursor-pointer`}
    >
      <div
        className={`border transition-all ${
          selectPlan === 1 && select_month_plan === month_plan.arcade.id
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[160px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectMonthArcade(selected_plan);
        }}
      >
        <Image src={month_plan.arcade.img} alt={month_plan.arcade.plan_name} />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {month_plan.arcade.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${month_plan.arcade.price}/mo
          </p>
        </div>
      </div>
      <div
        className={`border transition-all ${
          selectPlan === 1 && select_month_plan === month_plan.advanced.id +1
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[160px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectMonthAdvanced(selected_plan);
        }}
      >
        <Image
          src={month_plan.advanced.img}
          alt={month_plan.advanced.plan_name}
        />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {month_plan.advanced.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${month_plan.advanced.price}/mo
          </p>
        </div>
      </div>
      <div
        className={`border transition-all ${
          selectPlan === 1 && select_month_plan === month_plan.pro.id +1
            ? "bg-alabaster border-purplishBlue"
            : "bg-white border-coolGray hover:bg-alabaster hover:border-purplishBlue"
        } lg:w-[138px] lg:h-[160px] rounded-lg lg:p-4 flex lg:items-start lg:justify-between lg:flex-col lg:pt-[18px]`}
        onClick={() => {
          handleSelectMonthPro(selected_plan);
        }}
      >
        <Image src={month_plan.pro.img} alt={month_plan.pro.plan_name} />
        <div>
          <p className={`text-base font-medium text-marineBlue`}>
            {month_plan.pro.plan_name}
          </p>
          <p className={`text-sm text-coolGray font-medium`}>
            ${month_plan.pro.price}/mo
          </p>
        </div>
      </div>
    </div>
  );
}

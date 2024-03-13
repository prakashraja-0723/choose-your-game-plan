import React from "react";
import Title from "@/app/components/ui/Title";
import Description from "@/app/components/ui/Description";
import { useDispatch, useSelector } from "react-redux";
import MonthPlan from "@/app/components/ui/MonthPlan";
import YearPlan from "@/app/components/ui/YearPlan";
import { plan } from "@/redux/action";

export default function Plan({isOpenAlert}) {
  const selected_plan = useSelector(state => state.selected_plan);
  const selectPlan = useSelector((state) => state.plan.select_plan);
  const month_plan = useSelector((state) => state.plan.Monthly_Plan);
  const year_plan = useSelector((state) => state.plan.Yearly_Plan);

  const dispatch = useDispatch();
  const select_Plan = {
    transform: `translate(calc(${
      selectPlan === 1 ? 0 : selectPlan - 1
    }*-550px))`,
  };

  const handleTogglePlan = (selectPlan) => {
    dispatch(plan(selectPlan));
  };
  return (
    <div className={`w-[450px] h-full lg:relative flex flex-col overflow-hidden`}>
      <div className={`w-full mb-[42px] text-marineBlue`}>
        <Title>Select your plan</Title>
        <Description>
          You have the option of monthly or yearly billing.
        </Description>
      </div>
      <div
        className={`w-full flex items-center left-0 relative gap-[100px] transition-all duration-300 mb-[42px]`}
        style={select_Plan}
      >
        <div>
          <MonthPlan month_plan={month_plan} selectPlan={selectPlan} />
        </div>
        <div>
          <YearPlan year_plan={year_plan} selectPlan={selectPlan} />
        </div>
      </div>
      <div
        className={`bg-alabaster w-full h-12 rounded-[7px] flex items-center gap-6 justify-center`}
      >
        <span className={`${selectPlan === 1 ? "text-marineBlue":"text-coolGray"} font-medium`}>Monthly</span>
        <div
          className={`bg-marineBlue w-[38px] h-5 rounded-full flex items-center cursor-pointer relative p-1`}
          onClick={() => {
            handleTogglePlan(selectPlan);
          }}
        >
          <div
            className={`w-3 h-3 bg-alabaster rounded-full absolute left-0  ${
              selectPlan === 1
                ? "translate-x-1"
                : "translate-x-[calc(200%_-_3px)]"
            } transition-all`}
          ></div>
        </div>
        <span  className={`${selectPlan === 2 ? "text-marineBlue":"text-coolGray"} font-medium`}>Yearly</span>
      </div>
    </div>
  );
}

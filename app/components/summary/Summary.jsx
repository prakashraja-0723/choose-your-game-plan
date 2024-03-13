import React from "react";
import Title from "@/app/components/ui/Title";
import Description from "@/app/components/ui/Description";
import {useDispatch, useSelector} from "react-redux";
import {goBack} from "@/redux/action";

export const Summary = () => {
  const selected_plan = useSelector((state) => state.selected_plan);
  const dispatch = useDispatch();
  
  
  return (
    <div
      className={`w-[450px] h-full lg:relative flex flex-col overflow-hidden`}
    >
      <div className={`w-full mb-[42px] text-marineBlue`}>
        <Title>Finishing up</Title>
        <Description>
          Double-check everything looks OK before confirming.
        </Description>
      </div>
      <div
        className={`w-full flex items-center left-0 relative gap-[18px] transition-all duration-300 flex-col`}
      >
        <div
          className={`w-full flex items-center left-0 relative gap-[18px] flex-col bg-alabaster min-h-fit p-6`}
        >
          <div
            className={`flex items-center justify-between w-full pb-6 border-b border-lightGray`}
          >
            <div>
              <h6 className={`text-marineBlue font-medium text-base`}>
                {selected_plan.plan.plan_name} ({selected_plan.plan_type})
              </h6>
              <p className={`underline text-coolGray cursor-pointer`} onClick={()=>dispatch(goBack(3))}>change</p>
            </div>
            <p className={`text-marineBlue font-medium text-base`}>
              +${selected_plan.plan.price}/
              {selected_plan.plan_type === "Monthly" ? "mo" : "yr"}
            </p>
          </div>
          <div
            className={` flex flex-col w-full gap-3 text-coolGray font-normal`}
          >
            {selected_plan.addOns.map(
              (addon, index) =>
                addon.id !== 0 && (
                  <div
                    key={addon.plan}
                    className={`flex w-full items-center justify-between`}
                  >
                    <p>{addon.plan}</p>
                    <p className={`text-marineBlue`}>
                      +${addon.price}/{addon.plan_type}
                    </p>
                  </div>
                ),
            )}
          </div>
        </div>
          <div className={`w-full flex items-center justify-between text-coolGray px-6`}>
            <p className={`text-sm font-medium`}>Total({selected_plan.plan_type === "monthly"? "per month" : "per" +
              " year"})</p>
            <span className={`text-purplishBlue text-xl font-medium`}>+${selected_plan.total_price}/{selected_plan.plan_type === "Monthly" ? "mo" : "yr"}</span>
          </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import check_icon from "@/app/images/icon-checkmark.svg";
import AddOnBox from "@/app/components/ui/AddOnBox";
import {useDispatch, useSelector} from "react-redux";
import {selectedAddon} from "@/redux/action";

export default function MonthlyAddOn() {
  const monthly_addons = useSelector((state) => state.plan.Monthly_Addons);
  const dispatch = useDispatch();
  
  const handleSelectAddOn1 = (plan_type) => {
    dispatch(selectedAddon(plan_type));
  };
  const a = (plan_type) => {
    dispatch(selectedAddon(plan_type));
  };
  const handleSelectAddOn3 = (plan_type) => {
    dispatch(selectedAddon(plan_type));
  };
  return (
    <>
      <div
        className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
        onClick={() => {handleSelectAddOn1(monthly_addons.plan1)}}
      >
        <div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={monthly_addons.plan1.plan_type}
          plan={monthly_addons.plan1.plan}
          description={monthly_addons.plan1.description}
          price={monthly_addons.plan1.price}
        />
      </div>
      <div
        className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
        onClick={() => {a(monthly_addons.plan2)}}
      >
        <div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={monthly_addons.plan2.plan_type}
          plan={monthly_addons.plan2.plan}
          description={monthly_addons.plan2.description}
          price={monthly_addons.plan2.price}
        />
      </div>
      <div
        className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
        onClick={() => {handleSelectAddOn3(monthly_addons.plan3)}}
      >
        <div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={monthly_addons.plan3.plan_type}
          plan={monthly_addons.plan3.plan}
          description={monthly_addons.plan3.description}
          price={monthly_addons.plan3.price}
        />
      </div>
    </>
  );
}

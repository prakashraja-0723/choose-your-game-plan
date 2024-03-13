import React from "react";
import Image from "next/image";
import check_icon from "@/app/images/icon-checkmark.svg";
import AddOnBox from "@/app/components/ui/AddOnBox";
import { useDispatch, useSelector } from "react-redux";
import { selectedAddon } from "@/redux/action";
import UseSelectAddon from "@/app/Hooks/useSelectAddon";

export default function MonthlyAddOn() {
  // custom HOOKS
  const {addon1} = UseSelectAddon();

  const monthly_addons = useSelector((state) => state.plan.Monthly_Addons);
  const selected_addons = useSelector(state => state.selected_plan.addOns)
  
  const dispatch = useDispatch();
  
  
  
  const handleSelectAddon = (plan) => {
    dispatch(selectedAddon(plan))
  };
  return (
    <>
      <div
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[0].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(monthly_addons.plan1)}
      >
        <div className={`border w-5 h-[18px] border-coolGray rounded-[3px] ${selected_addons[0].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
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
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[1].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(monthly_addons.plan2)}
      >
       <div className={`border w-5 h-[18px]  border-coolGray rounded-[3px] ${selected_addons[1].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
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
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[2].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(monthly_addons.plan3)}
      >
       <div className={`border w-5 h-[18px]  border-coolGray rounded-[3px] ${selected_addons[2].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
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

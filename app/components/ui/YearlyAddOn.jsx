import React, { useState } from "react";
import Image from "next/image";
import check_icon from "@/app/images/icon-checkmark.svg";
import AddOnBox from "@/app/components/ui/AddOnBox";
import { useDispatch, useSelector } from "react-redux";
import { selectedAddon } from "@/redux/action";

export default function YearlyAddOn() {
  const yearly_addons = useSelector((state) => state.plan.Yearly_Addons);
  const selected_addons = useSelector(state => state.selected_plan.addOns)

  const dispatch = useDispatch();
  const handleSelectAddon = (plan) => {
    dispatch(selectedAddon(plan));
  };
  return (
    <>
      <div
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[0].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(yearly_addons.plan1)}
      >
        <div className={`border w-5 h-[18px] border-coolGray rounded-[3px] ${selected_addons[0].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={yearly_addons.plan1.plan_type}
          plan={yearly_addons.plan1.plan}
          description={yearly_addons.plan1.description}
          price={yearly_addons.plan1.price}
        />
      </div>
      <div
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[1].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(yearly_addons.plan2)}
      >
        <div className={`border w-5 h-[18px] border-coolGray rounded-[3px] ${selected_addons[1].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={yearly_addons.plan2.plan_type}
          plan={yearly_addons.plan2.plan}
          description={yearly_addons.plan2.description}
          price={yearly_addons.plan2.price}
        />
      </div>
      <div
        className={`w-full border h-20 rounded-lg flex items-center gap-6 px-6 cursor-pointer ${selected_addons[2].checked ? `border-purplishBlue bg-alabaster`:`border-coolGray bg-transparent`}`}
        onClick={() => handleSelectAddon(yearly_addons.plan3)}
      >
        <div className={`border w-5 h-[18px] border-coolGray rounded-[3px] ${selected_addons[2].checked ? `bg-purplishBlue flex items-center justify-center`:``}`}>
          <Image src={check_icon} alt={"Check_Icon"} />
        </div>
        <AddOnBox
          plan_type={yearly_addons.plan3.plan_type}
          plan={yearly_addons.plan3.plan}
          description={yearly_addons.plan3.description}
          price={yearly_addons.plan3.price}
        />
      </div>
    </>
  );
}

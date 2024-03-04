import React from "react";

export default function AddOnBox({ plan, description, price, plan_type }) {
  return (
    <div className={`flex item-center justify-between w-full`}>
      <div>
        <p className={`text-base font-medium`}>{plan}</p>
        <p className={`text-sm text-coolGray`}>{description}</p>
      </div>
      <div className={`text-purplishBlue text-sm grid place-content-center`}>
        +${price}/{plan_type}
      </div>
    </div>
  );
}

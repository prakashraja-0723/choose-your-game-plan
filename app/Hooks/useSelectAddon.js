import { useState } from "react";
import { useSelector } from "react-redux";

export default function UseSelectAddon() {

  const addons = useSelector(state => state.selected_plan.addOns);

  const [addOns, setAddOns] = useState(addons);
  
  const addon1 = (plan1) => {
    setAddOns({...addOns,plan:[...addOns.plan,plan1.plan]});
    console.log(addOns)
  }
  
  
  return {addon1,addOns,setAddOns};
}

import React from 'react'
import Image from "next/image";
import check_icon from "@/app/images/icon-checkmark.svg";
import AddOnBox from "@/app/components/ui/AddOnBox";
import {useSelector} from "react-redux";

export default function YearlyAddOn() {
	const yearly_addons = useSelector(state => state.plan.Yearly_Addons);
	return (
		<>
			<div
				className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
			>
				<div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
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
				className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
			>
				<div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
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
				className={`w-full border h-20 border-coolGray rounded-lg flex items-center gap-6 px-6 cursor-pointer`}
			>
				<div className={`border w-5 h-5 border-coolGray rounded-[3px]`}>
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
	)
}

import React from "react";

export default function Model({ children,isOpenAlert,setIsOpenAlert }) {
	
	
	const handleToggleAlert = () => {
		setIsOpenAlert(false)
	};
	return (
    <div
      className={`w-screen h-screen bg-black backdrop-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  flex items-center justify-center ${isOpenAlert ? "bg-opacity-50 scale-1 opacity-1 z-[9999]" : "bg-opacity-0 scale-[30%] opacity-0 -z-10"} transition-all duration-200`}
    >
      <div
        className={`w-fit h-fit bg-white flex items-center justify-center rounded-lg font-medium text-xl p-4 flex-col gap-8 py-8 px-7 ${isOpenAlert ? "scale-1":"scale-0"}`}
      >
        {children}
        <button
          className={`bg-purplishBlue text-alabaster w-fit h-11 px-4 rounded-lg`}
          onClick={()=>{handleToggleAlert()}}
        >
          Close
        </button>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function AlertBox({ children, isOpenAlert, setIsOpenAlert }) {
  const handleToggleAlert = () => {
    setIsOpenAlert({
      img: "",
      message: "",
      isShowMessage: false,
    });
  };
  return (
    <div
      className={`w-screen h-screen bg-black backdrop-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed  flex items-center justify-center ${
        isOpenAlert.isShowMessage
          ? "bg-opacity-50 scale-1 opacity-1 z-[9999]"
          : "bg-opacity-0 scale-[30%] opacity-0 -z-10"
      } transition-all duration-200`}
    >
      <div
        className={`w-fit h-fit bg-white flex items-center justify-center rounded-lg font-medium text-xl p-4 flex-col gap-8 py-8 px-7 ${
          isOpenAlert.isShowMessage ? "scale-1" : "scale-0"
        }`}
      >
        <div className={`flex items-center justify-center gap-4 flex-col`}>
          <Image
            src={isOpenAlert.img}
            alt={isOpenAlert.message}
            className={`w-12`}
          />
          {isOpenAlert.message}
        </div>
        <button
          className={`bg-purplishBlue text-alabaster w-fit h-11 px-4 rounded-lg`}
          onClick={() => {
            handleToggleAlert();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

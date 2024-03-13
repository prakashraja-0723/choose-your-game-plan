"use client";
import React from "react";
import Image from "next/image";
import bgSidebarDesktop from "@/app/images/bg-sidebar-desktop.svg";
import { useSelector } from "react-redux";

export default function MainUi({ children }) {
  const pageNo = useSelector((state) => state.pageNo);

  const active_style = {
    transform: `translate(0,calc(${pageNo < 5 && pageNo - 1}* 72px))`,
  };
  const circle_class = ` w-8 h-8 flex items-center justify-center rounded-full`;
  return (
    <>
      <main
        className={`lg:flex lg:w-[940px] lg:h-[600px] bg-white lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 shadow-sm lg:rounded-xl-2 lg:p-4`}
      >
        <div className={`lg:w-[274px] lg:h-[568px]`}>
          <Image
            src={bgSidebarDesktop}
            alt={"bg-for-desktop"}
            priority={true}
            className={`object-cover w-full h-full`}
          />
          <div
            className={`flex flex-col gap-8 items-start absolute top-14 left-12 z-10`}
          >
            <div className={`flex gap-4 items-center justify-center`}>
              <div
                className={` ${
                  pageNo !== 1
                    ? `border border-white text-white ${circle_class} `
                    : `text-marineBlue font-medium ${circle_class}`
                }`}
              >
                1
              </div>
              <div className={`text-white flex flex-col gap-1`}>
                <p className={`text-xs`}>STEP 1</p>
                <p className={`text-sm font-medium tracking-widest`}>YOUR INFO</p>
              </div>
            </div>
            <div className={`flex gap-4 items-center justify-center`}>
              <div
                className={`${
                  pageNo !== 2
                    ? `border border-white text-white ${circle_class} `
                    : `text-marineBlue font-medium
                 ${circle_class}`
                }`}
              >
                2
              </div>
              <div className={`text-white flex flex-col gap-1`}>
                <p className={`text-xs`}>STEP 2</p>
                <p className={`text-sm font-medium tracking-widest`}>SELECT PLAN</p>
              </div>
            </div>
            <div className={`flex gap-4 items-center justify-center`}>
              <div
                className={`${
                  pageNo !== 3
                    ? `border border-white text-white ${circle_class} `
                    : `text-marineBlue font-medium
                 ${circle_class}`
                }`}
              >
                3
              </div>
              <div className={`text-white flex flex-col gap-1`}>
                <p className={`text-xs`}>STEP 3</p>
                <p className={`text-sm font-medium tracking-widest`}>ADD-ONS</p>
              </div>
            </div>
            <div className={`flex gap-4 items-center justify-center`}>
              <div
                className={`${
                  pageNo === 4 || pageNo === 5
                    ? `text-marineBlue font-medium ${circle_class}`
                    : `border border-white text-white ${circle_class} `
                }`}
              >
                4
              </div>
              <div className={`text-white flex flex-col gap-1`}>
                <p className={`text-xs`}>STEP 4</p>
                <p className={`text-sm font-medium tracking-widest`}>SUMMARY</p>
              </div>
            </div>
            <div
              className={`absolute top-1 left-0 -z-10 bg-lightBlue ${circle_class} transition-all duration-200`}
              style={active_style}
            ></div>
          </div>
        </div>
        <div
          className={`lg:w-[636px] lg:pt-[calc(56px_-_16px)] lg:pb-[calc(32px_-_16px)] lg:pl-[100px] lg:pr-[calc(100px_-_16px)] overflow-hidden`}
        >
          {children}
        </div>
      </main>
    </>
  );
}

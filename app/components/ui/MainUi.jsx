import React from "react";
import Image from "next/image";
import bgSidebarDesktop from "@/app/images/bg-sidebar-desktop.svg";

export default function MainUi({ children }) {
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

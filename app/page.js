"use client";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Info from "@/app/components/personal-info/Info";
import {
  goBack,
  goNext,
  printEmailErrorMessage,
  printNameErrorMessage,
  printPhoneErrorMessage,
} from "@/redux/action";
import Plan from "@/app/components/plan/Plan";
import UseNavForm from "@/app/Hooks/useNavForm";
import AddOns from "@/app/components/add-ons/AddOns";
import AlertBox from "@/app/components/ui/AlertBox";
import { Summary } from "@/app/components/summary/Summary";
import Success from "@/app/components/success/Success";

export default function Page() {
  const navPage = useSelector((state) => state.pageNo);
  const user_data = useSelector((state) => state.userData);
  const error_message = useSelector((state) => state.error_message);
  const selected_plan = useSelector((state) => state.selected_plan);
  const dispatch = useDispatch();

  // custom Hooks
  const {
    isPhoneError,
    isEmailError,
    isNameError,
    isOpenAlert,
    setIsOpenAlert,
    navPage1,
    navPage2,
    navPage3,
    navPage4
  } = UseNavForm();
  const handleNavFormNext = (navPage) => {
    if (navPage === 1) {
      navPage1(
        navPage,
        user_data,
        dispatch,
        goNext,
        printEmailErrorMessage,
        printNameErrorMessage,
        printPhoneErrorMessage,
      );
    } else if (navPage === 2) {
      navPage2({ navPage, selected_plan, dispatch, goNext });
    } else if (navPage === 3){
      navPage3({ navPage, selected_plan, dispatch, goNext });
    }else if (navPage === 4){
      navPage4({ navPage, dispatch, goNext });
    }
  };
  const handleNavFormBack = (navPage) => {
    dispatch(goBack(navPage));
  };

  const nav_form = {
    transform: `translate(calc(${navPage === 1 ? 0 : navPage - 1}*-550px))`,
  };

  return (
    <>
      <main className={`w-full h-full lg:relative`}>
        <div
          className={`w-full h-full flex gap-[100px] absolute left-0 transition-all duration-500`}
          style={nav_form}
        >
          <div>
            <Info isError={{ isNameError, isPhoneError, isEmailError }} />
          </div>
          <div>
            <Plan isOpenAlert={isOpenAlert} />
          </div>
          <div>
            <AddOns />
          </div>
          <div>
            <Summary />
          </div>
          <div>
            <Success />
          </div>
        </div>
        {navPage !== 5 && (
          <div
            className={`lg:absolute lg:bottom-0 lg:right-0 flex items-center justify-between ${
              navPage === 1 ? "" : "w-full"
            } `}
          >
            {navPage !== 1 && (
              <button
                className={`bg-transparent text-coolGray w-[124px] h-12 rounded-lg font-bold `}
                onClick={() => handleNavFormBack(navPage)}
              >
                Go Back
              </button>
            )}
            <button
              className={`bg-marineBlue text-magnolia w-[124px] h-12 rounded-lg font-bold `}
              onClick={() => handleNavFormNext(navPage)}
            >
              Next Step
            </button>
          </div>)
        }
      </main>
      <AlertBox isOpenAlert={isOpenAlert} setIsOpenAlert={setIsOpenAlert}>
        Please choose your Add-ons Plan ✅
      </AlertBox>
    </>
  );
}

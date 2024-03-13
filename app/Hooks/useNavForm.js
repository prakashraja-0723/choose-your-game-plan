import React, { useState } from "react";
import hint from "@/app/images/icon-hint.svg";
import {addonsTotal, totalPrice} from "@/redux/action";

export default function UseNavForm() {
  const [isNameError, setIsNameError] = useState(null);
  const [isEmailError, setIsEmailError] = useState(null);
  const [isPhoneError, setIsPhoneError] = useState(null);
  const [isOpenAlert, setIsOpenAlert] = useState({
    img: "",
    message: "",
    isShowMessage: null,
  });

  // Regular expressions for email and phone number
  const Email_Regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  const Phone_Regex =
    /^(?:(?:\+?849\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

  const navPage1 = (
    navPage,
    user_data,
    dispatch,
    goNext,
    printEmailErrorMessage,
    printNameErrorMessage,
    printPhoneErrorMessage,
  ) => {
    // Navigate form to 1 to 2 || Check input fields for errors
    if (user_data.user_name === "") {
      dispatch(printNameErrorMessage("This field is required"));
      setIsNameError(true);
    } else if (user_data.user_name.length < 4) {
      dispatch(printNameErrorMessage("Name should be at least 4 characters"));
      setIsNameError(true);
    } else {
      dispatch(printNameErrorMessage(""));
      setIsNameError(false);
    }
    if (user_data.email_address === "") {
      dispatch(printEmailErrorMessage("This field is required"));
      setIsEmailError(true);
    } else if (!Email_Regex.test(user_data.email_address)) {
      dispatch(printEmailErrorMessage("Invalid email address"));
      setIsEmailError(true);
    } else {
      dispatch(printEmailErrorMessage(""));
      setIsEmailError(false);
    }
    if (user_data.phone_number === "") {
      dispatch(printPhoneErrorMessage("This field is required"));
      setIsPhoneError(true);
    } else if (!Phone_Regex.test(user_data.phone_number)) {
      dispatch(printPhoneErrorMessage("Invalid phone number"));
      setIsPhoneError(true);
    } else {
      dispatch(printPhoneErrorMessage(""));
      setIsPhoneError(false);
    }

    // If no errors, go to next page
    if (
      user_data.user_name !== "" &&
      user_data.user_name.length >= 4 &&
      user_data.email_address !== "" &&
      Email_Regex.test(user_data.email_address) &&
      user_data.phone_number !== "" &&
      Phone_Regex.test(user_data.phone_number)
    ) {
      dispatch(goNext(navPage));
    }
  };

  const navPage2 = ({ navPage, selected_plan, dispatch, goNext }) => {
    // Navigate form to 2 to 3
    if (selected_plan.plan_type === "") {
      setIsOpenAlert({
        img: hint,
        message: "💡 Please select a plan to proceed",
        isShowMessage: true,
      });
      console.log(isOpenAlert);
    } else {
      dispatch(goNext(navPage));
    }
  };

  const navPage3 = ({ navPage, selected_plan, dispatch, goNext }) => {
    if (
      selected_plan.addOns[0].plan === "" &&
      selected_plan.addOns[1].plan === "" &&
      selected_plan.addOns[2].plan === ""
    ) {
      setIsOpenAlert({
        img: hint,
        message: "💡 Minimum 1 plan is required to proceed",
        isShowMessage: true,
      });
    } else {
      dispatch(addonsTotal(selected_plan.addOns));
      dispatch(totalPrice(selected_plan.plan.price));
      dispatch(goNext(navPage));
    }
  };
  
  const navPage4 = ({ navPage, dispatch, goNext }) => {
    dispatch(goNext(navPage));
  }

  return {
    isPhoneError,
    isEmailError,
    isNameError,
    isOpenAlert,
    setIsOpenAlert,
    navPage1,
    navPage2,
    navPage3,
    navPage4
  };
}

import React, { useState } from "react";
import Title from "@/app/components/ui/Title";
import Description from "@/app/components/ui/Description";
import { useDispatch, useSelector } from "react-redux";
import { putUserEmail, putUserName, putUserPhoneNumber } from "@/redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Info({isError}) {
  // const [isInputEmpty, setIsInputEmpty] = useState(null);

  const user_data = useSelector((state) => state.userData);
  const error_message = useSelector((state) => state.error_message);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState(user_data);
  
  
  const handleChangeInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    if (e.target.name === "user_name") {
      dispatch(putUserName(e.target.value));
    } else if (e.target.name === "email_address") {
      dispatch(putUserEmail(e.target.value));
    } else if (e.target.name === "phone_number") {
      dispatch(putUserPhoneNumber(e.target.value));
    }
  };

  return (
    <form className={`w-[450px] h-full lg:relative`}>
      <div className={`w-full mb-[42px] text-marineBlue `}>
        <Title>Personal Info</Title>
        <Description>
          Please provide your name, email address, and phone number.
        </Description>
      </div>
      <div className={`grid gap-6`}>
        <div className={`w-full relative`}>
          <label
            htmlFor="{'user_name'}"
            className={`text-marineBlue flex items-center justify-between`}
          >
            Name
            <p className={`text-sm text-strawberryRed`}>
               {error_message.error_name}
            </p>
          </label>
          <input
            type="text"
            className={`border ${
              isError.isNameError ? `border-strawberryRed focus:border-strawberryRed` : `border-lightGray focus:border-coolGray`
            } w-full h-12 outline-none rounded-md transition-all px-4`}
            name={"user_name"}
            value={userInfo.user_name}
            onChange={(e) => handleChangeInput(e, userInfo)}
            onBlur={(e) => console.log(userInfo)}
          />
            <span className={`absolute top-[50%] right-4`}>
              {isError.isNameError === null && ""}
              {isError.isNameError && (
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={`text-strawberryRed`}
                />
              )}
              {isError.isNameError === false && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={`text-green-600`}
                />
              )}
            </span>
        </div>
        <div className={`w-full relative`}>
          <label
            htmlFor="{'email_address'}"
            className={`text-marineBlue flex items-center justify-between`}
          >
            Email Address
            <p className={`text-sm text-strawberryRed`}>
              {error_message.error_email}
            </p>
          </label>
          <input
            type="email"
            className={`border ${
              isError.isEmailError ? `border-strawberryRed focus:border-strawberryRed` : `border-lightGray focus:border-coolGray`
            } w-full h-12 outline-none rounded-md transition-all px-4`}
            name={"email_address"}
            value={userInfo.email_address}
            onChange={(e) => handleChangeInput(e, userInfo)}
            onBlur={(e) => console.log(userInfo)}
          />
          <span className={`absolute top-[50%] right-4`}>
              {isError.isEmailError === null && ""}
            {isError.isEmailError && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={`text-strawberryRed`}
              />
            )}
            {isError.isEmailError === false && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={`text-green-600`}
              />
            )}
            </span>
        </div>
        <div className={`w-full relative`}>
          <label
            htmlFor="{'phone_number'}"
            className={`text-marineBlue flex items-center justify-between`}
          >
            Phone Number
            <p className={`text-sm text-strawberryRed`}>
              {error_message.error_phone}
            </p>
          </label>
          <input
            type="text"
            className={`border ${
              isError.isPhoneError ? `border-strawberryRed focus:border-strawberryRed` : `border-lightGray focus:border-coolGray`
            } w-full h-12 outline-none rounded-md transition-all px-4`}
            name={"phone_number"}
            value={userInfo.phone_number}
            onChange={(e) => handleChangeInput(e, userInfo)}
            onBlur={(e) => console.log(userInfo)}
          />
          <span className={`absolute top-[50%] right-4`}>
              {isError.isPhoneError === null && ""}
            {isError.isPhoneError && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={`text-strawberryRed`}
              />
            )}
            {isError.isPhoneError === false && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={`text-green-600`}
              />
            )}
            </span>
        </div>
      </div>
    </form>
  );
}

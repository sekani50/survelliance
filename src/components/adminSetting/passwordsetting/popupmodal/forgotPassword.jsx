import React from "react";
import close from "../../../../assets/svg/closes.svg"
import { useNavigate } from "react-router-dom";
const ForgotPassword = ({header, onClose}) => {
    const navigate = useNavigate()
  return (
    <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="  bg-white rounded-md px-2 py-4 w-[95vw] md:w-[600px] 2xl:w-[700px] h-[300px]  shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-2xl font-bold text-[#132D46]">{header}</h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="mb-8 text-gray-400 text-[12px] 2xl:text-xl sm:text-sm">
          Pls choose how you want to reset your password
        </div>

        <div className="flex flex-col 2xl:space-y-4 space-y-2 justify-center items-center w-full">
          <button 
          onClick={() => {
            navigate("/admin/settings/auth/password")
          }}
          className="w-[70%] py-2 sm:py-3 2xl:py-4 bg-[#132D46] text-white rounded-md">
            Via Phone
          </button>
          <button className="w-[70%] py-2 2xl:py-4 sm:py-3 bg-[#132D46] text-white rounded-md">
            Via Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

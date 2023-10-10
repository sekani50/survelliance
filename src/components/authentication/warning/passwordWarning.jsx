import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
const PasswordWarning = ({ iswarn, setwarn }) => {
  return (
    <div className="w-[380px] left-[1rem] bottom-[6rem] absolute">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setwarn(!iswarn);
        }}
        className="w-full h-full fixed inset-0 z-[40] bg-none"
      ></div>
      <div className="rounded-lg w-full p-4 h-fit bg-[#01C38D] relative z-[300] text-white">
        <div
          onClick={() => {
            setwarn(!iswarn);
          }}
          className="cursor-pointer absolute right-2 top-3"
        >
          <AiOutlineCloseCircle className="text-[24px]" />
        </div>
        <div className="flex space-x-2">
          <RiErrorWarningLine className="text-[24px] text-white" />
          <div>
            <div className="font-semibold">Your password must:</div>
            <div>Have at least 8 characters</div>
            <div>Include uppercase and lowercase letters</div>
            <div>Include at least one number</div>
            <div>Include at least one symbol</div>
            <div>Not include your first, last, or email user name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordWarning;

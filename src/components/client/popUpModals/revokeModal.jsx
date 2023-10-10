import React from "react";
import close from "../../../assets/svg/closes.svg";
import { useState } from "react";
import RevokeSuccess from "./revokeSuccess";
const RevokeModal = ({ onClose, header }) => {
  const [revokesuccess, setrevokesuccess] = useState(false);
  function revokeInvitation() {
  
    //setrevokesuccess(!revokesuccess);
    //onClose()
  }
  return (
    <>
      <div
        onClick={onClose}
        className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" bg-white inset-0 rounded-md h-[300px] px-2 py-4 w-[95vw] md:w-[450px] shadow-md "
        >
          <div className="flex justify-between">
            <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">{header}</h1>
            <button className="" onClick={onClose}>
              <img src={close} alt="" />
            </button>
          </div>

          <div className="text-center my-20 w-full text-gray-400 text-[12px] sm:text-sm">
            Revoke the invitation sent to{" "}
            <span className="text-[#01C38D] underline">dominic@gmail.com</span>
          </div>

          <div className="w-full flex items-center justify-center space-x-4 ">
            <button
              onClick={onClose}
              className=" sm:px-12 rounded-md w-fit flex item-center justify-center px-8 py-2 bg-[#D0D0D0] border border-[#ABABAB] text-[#292D3259]"
            >
              <span>Cancel</span>
            </button>
            <button
              onClick={() => {
                revokeInvitation();
              }}
              className="bg-[#01C38D] px-1 sm:px-8 rounded-md w-fit flex item-center justify-center items-center p-2  text-white"
            >
              <span>Revoke Invitation</span>
            </button>
          </div>
        </div>
      </div>
      {revokesuccess && (
        <RevokeSuccess
          setrevokesuccess={setrevokesuccess}
          revokesuccess={revokesuccess}
        />
      )}
    </>
  );
};

export default RevokeModal;

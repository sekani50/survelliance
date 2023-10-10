import React from "react";
import EmergencyContactList from "./emergencyList";

const EmergencyContact = ({ iscontact, setiscontact }) => {
  return (
    <div
      className={iscontact ? "absolute full bottom-[50px] min-w-max" : "hidden"}
    >
      <div
        className={
          "relative 2xl:w-[350px] w-[280px] py-2 px-4 sm:px-6 sm:py-6 z-[300] h-fit flex flex-col text-[11px]  2xl:text-xl text-black font-semibold bg-white rounded-md shadow-md space-y-4"
        }
      >
        <div
          onClick={(e) => {
            e.stopPropagation();

            setiscontact(!iscontact);
          }}
          className="w-full h-full fixed inset-0 z-[40] bg-none"
        ></div>

       <EmergencyContactList/>
      </div>
    </div>
  );
};

export default EmergencyContact;

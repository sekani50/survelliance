import React from "react";
import two from "../../../assets/png/two.jpg";
import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import ClientCameraControls from "../clientCameraControls/clientCameraControls";
const PersonalCameraWidget = ({ resize }) => {
  const [isSettings, showSettings] = useState(false);
  return (
    <div
    
    className={` h-[220px] w-full relative rounded-lg ${
      resize === 1 ? "sm:h-[63vh] 2xl:h-[78vh]" : ""
    } ${resize === 6 ? "2xl:h-[22vh]" : ""} ${
      resize === 4 ? "2xl:h-[32vh]" : ""
    }
    ${resize === 3 ? "md:h-[42vh] 2xl:h-[40vh]" : ""}
    ${resize === 2 ? "md:h-[42vh] 2xl:h-[42vh]" : ""}
   `}>
      <img src={two} alt="" className="w-full h-full rounded-lg" />
      <div className="text-white flex flex-col justify-start absolute top-2 left-3">
        <div className="text-[13px] 2xl:text-xl sm:text-[15px]">Camera 1</div>
        <div className="text-[12px] 2xl:text-xl sm:text-sm">
          Building Entrance
        </div>
      </div>
      <div
        onClick={() => {
          showSettings(!isSettings);
        }}
        className="absolute top-2 right-3 text-white w-fit h-fit bg-white p-1 rounded-lg bg-opacity-40 cursor-pointer"
      >
        <AiTwotoneSetting className="text-[25px]" />
      </div>
      {isSettings && <ClientCameraControls />}
    </div>
  );
};

export default PersonalCameraWidget;

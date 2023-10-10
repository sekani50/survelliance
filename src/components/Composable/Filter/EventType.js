import React from "react";
import { useState } from "react";
import Switch from "../../UI/switch";
const EventType = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className=" w-full h-[290px] sm:h-[230px] 2xl:h-fit flex flex-col justify-center items-center bg-[#F0F0F2] overflow-hidden">
      <div className="scroll-style overflow-y-auto w-full h-full py-3 px-6 sm:py-6">
        <div className="flex 2xl:space-y-6 space-y-2 flex-col w-[98%]">
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Motion</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Temperature</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Offline</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Doorbell Ring</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sensor</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventType;

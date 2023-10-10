//import motion from "../../../assets/png/Motion.png";
import Switch from "../../UI/switch";
import { useState } from "react";

function DetectionFilters({image}) {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="flex text-[#132D46] font-semibold flex-col 2xl:space-y-5 space-y-2 p-4">
      <div className="flex justify-between items-center">
        <h2 className="2xl:text-2xl">Notification</h2>
        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="2xl:text-2xl">Tamper Detection</h2>
        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="2xl:text-2xl">Face Recognition</h2>
        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="2xl:text-2xl">Trip Wire Zones </h2>
        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default DetectionFilters;

//import motion from "../../../assets/png/Motion.png";
import Switch from "../../UI/switch";
import { useState } from "react";

function Video({image}) {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="flex flex-col space-y-2 p-4">
      <div>
        <img src={image} alt="" className="w-full mb-2" />
        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default Video;

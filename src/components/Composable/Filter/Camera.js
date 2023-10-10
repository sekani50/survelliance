import React from "react";
import notCamera from "../../../assets/svg/notCamera.svg";

function Camera() {
  return (
    <div>
      <div className="w-full  py-14 flex flex-col justify-center items-center bg-[#F0F0F2]">
        <img src={notCamera} alt="" />
        <div className="w-[200px] text-center">
          <h2 className="text-[#696E79] font-medium"> No camera available for selection</h2>
        </div>
      </div>
   
    </div>
  );
}

export default Camera;

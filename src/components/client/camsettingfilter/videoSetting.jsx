import React from "react";
import DropDown from "./resolutions/resolutions";
const VideoSetting = () => {
  return (
    <div className="w-full h-full">
      <div className="text-[#132D46] w-full space-y-3 ">
        <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl mb-4">Main Stream</h2>
        <DropDown heading={'Resolution'}/>
        <DropDown heading={'Bitrate, Kbps'}/>
        <DropDown heading={'Frame Rate, Fps'}/>

        <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl mb-4">Sub Stream</h2>
        <DropDown heading={'Resolution'}/>
        <DropDown heading={'Bitrate, Kbps'}/>
        <DropDown heading={'Frame Rate, Fps'}/>
      </div>
    </div>
  );
};

export default VideoSetting;



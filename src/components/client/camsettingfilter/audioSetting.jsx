import React from "react";
import Switch from "../../UI/switch";
const AudioSetting = () => {
    return (
        <div className="w-full h-full">
            <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl my-2">Microphone</h2>
            <div className="w-full items-center justify-between flex">

            <div className="flex justify-between items-center w-full py-2">
          <p className="font-semibold text-[#132D46] text-sm sm:text-base 2xl:text-xl">Microphone</p>
        <Switch/>
        </div>
            </div>

        </div>
    )
}

export default AudioSetting
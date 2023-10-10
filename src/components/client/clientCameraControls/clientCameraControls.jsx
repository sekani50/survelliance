import React, { useState } from "react";

import setting from "../../../assets/svg/setting.svg";

import deletes from "../../../assets/svg/delete.svg";
import ClientCameraSetting from "../clientcamerasetting/clientCameraSetting";

const ClientCameraControls = () => {
  const [settings, setSettings] = useState(false);

  function onClose() {
    setSettings(!settings);
  }
  return (
    <>
    <div className="w-full inset-x-0 h-fit bottom-[-2px] absolute bg-white rounded-b-xl">

      <div className="flex justify-between items-center w-full px-3 py-2">
        <div>
            <div className="text-[#132D46] font-medium text-sm sm:text-[16px] 2xl:text-xl">Camera 1</div>
            <div className="text-[11px] sm:text-[13px] text-gray-500 2xl:text-xl">Bedroom</div>
        </div>

        <div className="space-x-3 flex items-center">
        <div 
        onClick={() =>{
          onClose()
        }}
          className="space-x-1 flex items-center"
        >
          <div className="2xl:w-[18px] 2xl:h-[18px] w-[15px] h-[15px]">
            <img src={setting} alt="" className="w-full h-full"/>
          </div>
          <button className="text-[10px] 2xl:text-xl text-zinc-600">Camera Setting</button>
        </div>
        
        <div className="space-x-1 flex items-center">
          <div className="2xl:w-[18px] 2xl:h-[18px] w-[15px] h-[15px]">
            <img src={deletes} alt="" className="w-full h-full" />
          </div>
          <button className="text-[10px] 2xl:text-xl text-zinc-600">Remove</button>
        </div>
        </div>
      </div>
    </div>
    {settings && <ClientCameraSetting header={'Camera Settings'} onClose={onClose}/>}
    </>
  );
};

export default ClientCameraControls;

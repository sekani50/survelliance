import React from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import SettingNav from "../accountsetting/settingnav/settingNav";
import { useState } from "react";
import AlertForm from "./alertform/alertForm";
import Switch from "../../UI/switch";
const AlertSetting = () => {
    const [alertform, setalertform] = useState([<AlertForm key={0}/>, <AlertForm key={1}/>])
  
  const addMoreAlert = () => {
        setalertform((prev) => [...prev, <AlertForm key={prev.length}/>])
  }
    return (
    <ClientContainer>
      <div className="w-full h-full bg-gray-100 px-2 sm:px-6 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-[600px] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  Alert
                </div>
                <div className="text-gray-400 text-[11px] sm:text-[13px]">
                  Update your alert and personal detail here
                </div>
              </div>

              <div className="w-full h-fit max-h-[70vh] overflow-y-auto camera-scroll-style">
              <div className="px-2 pb-6 sm:px-3 sm:pb-8 justify-start flex flex-col space-y-3 sm:space-y-4">
                {alertform.map((item) => item)}
                <button
                onClick={() => {
                    addMoreAlert()
                }}
                className="ml-2 sm:ml-3 rounded-md w-fit text-white bg-[#01C38D] px-4 sm:px-8 py-2 sm:py-3">
                  Add More
                </button>
              </div>
            </div>

              <div className="">
                <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  Notification
                </div>
                <div className="text-gray-400 text-[11px] sm:text-[13px]">
                Customize the type of notification you want to receive
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
              <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  All notification enabled
                </div>
                <Switch/>
              </div>

              <div className="flex justify-center sm:justify-end  sm:mt-10 mt-3 w-full">
              <button className="w-[70%] sm:w-[40%] py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
                Save Changes
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </ClientContainer>
  );
};

export default AlertSetting;

import React from "react";
import SettingNav from "./settingNav/settingNav";

import Container from "../container/container";
import Switch from "../UI/switch";

const NotificationEmail = () => {
  
    return (
        <Container>
        <div className="w-full h-full sm:px-4 space-y-5 bg-gray-100 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-[65vh] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  Notification and Emails
                </div>
               
              </div>

             <div className="w-full 2xl:w-[80%] spce-y-3 2xl:space-y-6">
             <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  Notifications
                </div>
                <div className="w-full flex items-center justify-between">
                <p className="text-sm sm:text-base 2xl:text-xl">Enable/Disable</p>
                <Switch/>
                </div>
             </div>

             <div className="w-full 2xl:w-[80%] spce-y-3 2xl:space-y-6">
             <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  Emails
                </div>
                <div className="w-full flex items-center justify-between">
                <p className="text-sm sm:text-base 2xl:text-xl">Enable/Disable</p>
                <Switch/>
                </div>
             </div>

              </div>
              </div>
              </div>
        </div>
        </Container>
    )
}

export default NotificationEmail
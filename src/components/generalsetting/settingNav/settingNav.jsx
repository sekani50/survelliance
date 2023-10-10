import React from 'react';
import { Link, useLocation } from "react-router-dom";
import setting from "../../../assets/svg/setting.svg"
import privacy from "../../../assets/svg/privacy.svg"
import notification from "../../../assets/svg/alert.svg"
const SettingNav = () => {
    const {pathname} = useLocation()
    return (
        <div className=" col-span-2 max-[850px]:hidden 2xl:space-y-4 py-6 h-[300px] bg-white rounded-lg">
        <Link
        to="/setting"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname === "/setting"
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] ">
          <img className="w-full h-full" src={setting} alt="" />
        </div>
        <div >General Settings</div>
      </Link>
      <Link
        to="/admin/settings/notification"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname.includes("notification")
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]">
          <img className="w-full h-full" src={notification} alt="" />
        </div>
        <div>Notification and Email</div>
      </Link>
      <Link
        to="/admin/security"
        className={`hidden space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname.includes("security")
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]">
          <img className="w-full h-full" src={privacy} alt="" />
        </div>
        <div>Security Settings</div>
      </Link>

        </div>
    )
}

export default SettingNav
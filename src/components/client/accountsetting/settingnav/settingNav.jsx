import React from 'react';
import { Link, useLocation } from "react-router-dom";
import account from "../../../../assets/svg/account.svg"
import alert from "../../../../assets/svg/alert.svg"
const SettingNav = () => {
    const {pathname} = useLocation()
    return (
        <div className="col-span-2 max-[850px]:hidden py-6 2xl:space-y-4  h-[400px] bg-white rounded-lg">
        <Link
        to="/client/account"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname === "/client/account"
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] ">
          <img className="w-full h-full" src={account} alt="" />
        </div>
        <div>Profile Settings</div>
      </Link>
      <Link
        to="/client/account/alert"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname.includes("alert")
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] ">
          <img className="w-full h-full" src={alert} alt="" />
        </div>
        <div>Alert</div>
      </Link>

        </div>
    )
}

export default SettingNav
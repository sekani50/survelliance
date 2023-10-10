import React from 'react';
import { Link, useLocation } from "react-router-dom";
import account from "../../../assets/svg/account.svg"
import password from "../../../assets/svg/password.svg"
const SettingNav = () => {
    const {pathname} = useLocation()
    return (
        <div className=" col-span-2 max-[850px]:hidden 2xl:space-y-4  py-6 h-[300px] bg-white rounded-lg">
        <Link
        to="/admin/settings"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname === "/admin/settings"
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] ">
          <img className="w-full h-full" src={account} alt="" />
        </div>
        <div >Profile Settings</div>
      </Link>
      <Link
        to="/admin/settings/password"
        className={`flex space-x-2 justify-start items-center pl-4 py-2 w-full ${
          pathname.includes("password")
            ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
            : ""
        }`}
      >
        <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]">
          <img className="w-full h-full" src={password} alt="" />
        </div>
        <div>Password</div>
      </Link>

        </div>
    )
}

export default SettingNav
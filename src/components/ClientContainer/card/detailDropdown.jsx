import React from "react";
import account from "../../../assets/svg/account.svg"
import invites from "../../../assets/svg/invites.svg"
import service from "../../../assets/svg/camera.svg"
import logout from "../../../assets/svg/logout.svg"
import { AiOutlineGlobal} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const DetailDropdown = ({isdetail, showDetail}) => {
  const navigate = useNavigate()
    return (
        <div className="absolute top-[55px] ">
            <div
            onClick={() => {
                showDetail(!isdetail)
            }}
            className="bg-none fixed inset-0 w-full h-full z-[55]">

            </div>
            <div
            className="relative 2xl:text-xl cursor-pointer text-[#132D46] flex flex-col z-[300]  items-center bg-white shadow-lg w-[200px] 2xl:w-[300px] h-fit p-3 rounded-lg">
            <div className="w-full items-center flex justify-center flex-col mb-4 space-y-1">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#132D46]">

                  </div>
                  <div className="text-[13px] 2xl:text-xl sm:text-sm font-semibold text-[#132D46]">Jane Doe</div>
                  <div className="text-[13px] 2xl:text-xl sm:text-sm text-gray-500">Jane@gmail.com</div>

                </div>
                <div className="flex flex-col space-y-2 mb-4 w-full justify-start">
                <div
                onClick={() => {
                  navigate("/client/account")
                }}
                className="flex hover:bg-gray-100 py-2 px-1 items-center space-x-2">
                  <div className="w-[16px] h-[16px] 2xl:w-[24px] 2xl:h-[24px]">
                  <img src={account} alt="" className="w-full h-full" />
                  </div>
                  
                  <div>Account</div>
                  </div>
                  <div className="flex hover:bg-gray-100 px-1 py-2 items-center space-x-2">
                  <div className="w-[16px] h-[16px] 2xl:w-[24px] 2xl:h-[24px]">
                    <img src={service} alt="" className="w-full h-full" />
                    </div>
                  <div>My Services</div>
                  </div>
                  <div
                  onClick={() => {
                    navigate("/client/invites")
                  }}
                  className="flex hover:bg-gray-100 py-2 px-1 items-center space-x-2">
                    <div className="w-[16px] h-[16px] 2xl:w-[24px] 2xl:h-[24px]">
                    <img src={invites} alt="" className="w-full h-full" />
                    </div>
                   
                  <div>Invites</div>
                  </div>
                </div>

                <div className="flex flex-col mt-7 border-t px-1 py-2 space-y-2 w-full justify-start">
                <div className="flex hover:bg-gray-100 py-2 items-center space-x-2">
                <AiOutlineGlobal className="text-[16px] 2xl:text-[24px]  text-[#01C38D]" />
                  <div>Change Language</div>
                  </div>
                  <div className="flex hover:bg-gray-100 px-1 py-2 items-center space-x-2">
                  <div className="w-[16px] h-[16px] 2xl:w-[24px] 2xl:h-[24px]">
                    <img src={logout} alt="" className="w-full h-full" />
                    </div>
                  <div>Log out</div>
                  </div>
                </div>
                

            </div>
               
            </div>
    )
}

export default DetailDropdown
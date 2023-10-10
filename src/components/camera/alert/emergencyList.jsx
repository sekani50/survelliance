import React from 'react'
import call from "../../../assets/svg/call.svg";
const EmergencyContactList = () => {
    return (
        <div className="flex full flex-col space-y-3 cursor-pointer">
        <div className="text-[13px]  2xl:text-xl sm:text-sm font-semibold text-[#132D46] border-b pb-2 ">
          Emergency Contacts
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="text-[#132D46] font-semibold 2xl:text-xl  text-[12px] sm:text-sm">
              John Doe
            </div>
            <div className="text-[10px]  2xl:text-xl sm:text-[12px] text-[#01C38D]">
              983323423422
            </div>
          </div>
          <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
            <img src={call} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div>
            <div className="text-[#132D46] font-semibold 2xl:text-xl  text-[12px] sm:text-sm">
              John Doe
            </div>
            <div className="text-[10px] 2xl:text-xl  sm:text-[12px] text-[#01C38D]">
              983323423422
            </div>
          </div>
          <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
            <img src={call} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="text-[#132D46] font-semibold text-[12px] 2xl:text-xl sm:text-sm">
              John Doe
            </div>
            <div className="text-[10px] 2xl:text-xl  sm:text-[12px] text-[#01C38D]">
              983323423422
            </div>
          </div>
          <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
            <img src={call} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    )
}

export default EmergencyContactList
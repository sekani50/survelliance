import React from "react";
import camera from "../../../assets/svg/camera.svg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router";
const CamerListWidget = ({item, id}) => {
    const [showmore, setshowmore] = useState(false)
    const navigate = useNavigate()
    return (
        <div  className="w-full h-fit flex flex-col cursor-pointer">
             <div className="w-full items-center flex space-x-2">
              <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] 2xl:w-[40px] 2xl:h-[40px]  ">
                <img className="w-full h-full" src={camera} alt="" />
              </div>
              <div
              onClick={() => {
                navigate(`/camera/${id}`, {
                  state: {
                    item,
                  }
                })
              }}
              className="text-[#132D46] font-semibold text-lg 2xl:text-[24px]">
                {item?.cam}
              </div>
              {!showmore && <div className="px-2 py-1 text-[#01C38D] bg-[#01C38D] bg-opacity-10 text-[12px] 2xl:text-sm rounded-md">{item?.sub?.length}</div>}
              <div 
              onClick={() => {
                setshowmore(!showmore)
              }}
              >
              <MdOutlineNavigateNext className={`text-[20px] 2xl:text-[24px] cursor-pointer text-[#01C38D] ${showmore ? '-rotate-90' : 'rotate-90'} `} />

              </div>
            </div>
            <div className={showmore ? "w-full mt-[-10px]  pl-[50px]" : "hidden"}>
              <div className="font-semibold text-sm 2xl:text-[20px] whitespace-nowrap">
                {item?.name}
              </div>
              {item?.sub.map (({subcam, loc},idx) => {
                return (
                  <div
                  key={idx}
                  className="w-full  flex justify-start border-l 2xl:pt-6 border-gray-500 gap-[2px] flex-col">
                <div className="flex relative  top-[23px] pl-[10px] w-fit flex-col  ">
                  <div className="left-[-1px] top-[14px] absolute h-2 w-3 border-b border-l  rounded-bl-md border-gray-500"></div>
                  <div className="font-semibold text-[13px] 2xl:text-[20px] text-[#132D46]">
                    {subcam}
                  </div>
                  <div className="text-gray-500 text-[12px] 2xl:text-[20px] whitespace-nowrap">
                    {" "}
                   {loc}
                  </div>
                </div>
                
              </div>
                )
              })}
            </div>
        </div>

    )
}

export default CamerListWidget
import React from "react";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MenusWidget from "../../../camera/menuwidget/menuWidget";
import { useState } from "react";

const ClientCameraWidget = ({image}) => {
    const [ismore, setismore] = useState(false)
    return (
        <div className="rounded-lg relative w-full h-[120px] sm:h-[30vh]">
        <img src={image} alt="" className="w-full h-full rounded-lg object-fill" />
       
        <div className="absolute m-auto inset-0 w-fit h-fit bg-white bg-opacity-40 rounded-full p-3">
            <FaPlay className="text-white text-[30px] sm:text-[38px] 2xl:text-[45px]"/>
        </div>
       
        <div className="absolute w-full px-3 flex justify-between items-center text-white top-3 inset-x-0">
             <div>
             <div className="text-[13px] 2xl:text-xl sm:text-[15px]">Camera # 1</div>
             <div className="text-[12px] 2xl:text-xl sm:text-sm">Back Yard</div>
             </div>
             <button
        onClick={(e) => {
          e.stopPropagation()
          setismore(!ismore);
        }}
        className="absolute right-3 z-[20] top-3 p-1 bg-white bg-opacity-50 rounded-md "
      >
        <GiHamburgerMenu className="text-[25px] 2xl:text-[30px] text-white" />

        <MenusWidget ismore={ismore} setismore={setismore} />
      </button>
        </div>
    </div>
    )
}

export default ClientCameraWidget
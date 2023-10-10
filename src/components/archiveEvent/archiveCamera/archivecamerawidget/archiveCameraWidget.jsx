import React from "react";
import two from "../../../../assets/png/two.jpg";
import {FaPlay} from 'react-icons/fa'
import PlayerController from "../../playerControl/playerControl";
const ArchiveCameraWidget = () => {
   
    return (
        <div className='relative  h-[220px] sm:h-[40vh] rounded-xl overflow-hidden'>
        <img src={two} alt="" className='w-full h-full rounded-lg'/>
        <div className='text-white 2xl:text-[22px]  flex flex-col justify-start absolute top-2 left-3'>
            <div>Camera 1</div>
            <div className="text-[10px] sm:text-[12px] 2xl:text-xl">Building Entrance</div>

        </div>
        <div className="absolute m-auto inset-0 w-fit h-fit bg-white bg-opacity-40 rounded-full p-3">
            <FaPlay className="text-white text-[30px] sm:text-[38px] 2xl:text-[45px]"/>
        </div>
        
        <PlayerController/>
    
    </div>
    )
}

export default ArchiveCameraWidget;
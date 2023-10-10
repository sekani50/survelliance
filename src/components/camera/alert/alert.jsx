import React,{useState} from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import EmergencyContact from "./emergencyContacts";

const Alert = ({resize}) => {
  const[iscontact, setiscontact] = useState(false)
  return (
    <div className={`w-full h-fit flex flex-col relative space-y-[9%] xl:space-y-[9%] items-center justify-center text-white text-[10px] sm:text-[12px] ${resize === 6 ? '' : '2xl:text-[24px]'}`}>
      <div className={`"w-fit bg-red-500 rounded-md text-white flex items-center space-x-2 sm:space-x-3 px-2 py-1  ${resize === 6? '': '2xl:p-4'} sm:p-2`}>
        <MdOutlineSecurity className={`text-[18px] 2xl:text-[25px]`} />
        <div>An alert system has been detected</div>
      </div>

      <div className="flex items-center space-x-2  w-[75%] xl:w-[80%] h-fit justify-center">
        <button className={`w-fit whitespace-nowrap cursor-pointer  bg-red-500 rounded-md text-white flex items-center space-x-2 sm:space-x-3 px-2 py-1  ${resize === 6? '': '2xl:p-4'} sm:p-2`}>
          <BsFillBellFill className="text-[15px]  2xl:text-[23px]" />
          <div className="text-medium">Dismiss Alarm</div>
        </button>

        <button
        onClick={() => {
          setiscontact(!iscontact)
        }}
        className={`w-fit whitespace-nowrap cursor-pointer bg-white rounded-md text-red-500 flex items-center space-x-2 sm:space-x-3 px-2 py-1  ${resize === 6? '': '2xl:p-4'} sm:p-2`}>
          <BsFillBellFill className="text-[15px]  2xl:text-[23px]" />
          <div className="text-medium">Raise Alarm</div>
        </button>
      </div>

      <EmergencyContact setiscontact={setiscontact} iscontact={iscontact}/>
    </div>
  );
};

export default Alert;

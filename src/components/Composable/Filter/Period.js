import React from "react";
//import { Calendar } from "primereact/calendar";
// import moment from "moment";
import { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import {AiOutlineClockCircle} from 'react-icons/ai'
import CalendarIcon from "../../../Utils/calendaricon/calendarIcon";
import Switch from "../../UI/switch";

function Period() {
//   const [startDate, setStartDate] = useState("");
  const [value, onChange] = useState(new Date());
  const [isToggled, setToggle] = useState(false);
  const [timevalue, onChangeValue] = useState("10:00");

  return (
    <div className=" w-full h-[290px]  sm:h-[230px] 2xl:h-fit flex flex-col justify-center items-center bg-[#F0F0F2] overflow-hidden">
    <div className="scroll-style overflow-y-auto w-full h-full py-3 px-6 sm:py-6">
      <div className="font-semibold 2xl:text-2xl text-lg w-full border-b border-zinc-400 py-2 text-[#132D46]">
        By time range
      </div>

      <div className="w-full mt-6 flex flex-col sm:flex-row  sm:items-center space-y-2 sm:space-x-6">
        <span className="text-sm font-semibold text-[#132D46] whitespace-nowrap 2xl:text-xl">Event time</span>

        <div className="flex w-full items-center space-x-3 sm:space-x-6">
        <DatePicker
          clearIcon={null}
          calendarIcon={<CalendarIcon />}
          onChange={onChange}
          value={value}
        />
        <TimePicker onChange={onChangeValue}  
         clearIcon={null}
         value={timevalue}
         clockIcon={<AiOutlineClockCircle className="text-[#01C38D] text-[22px] "/>}
         />
        </div>
      
      </div>
      <div className="w-full mt-6 flex flex-col sm:flex-row justify-start space-y-2 sm:items-center sm:space-x-6">
        <span className="text-sm font-semibold text-[#132D46] whitespace-nowrap 2xl:text-xl">Event limit</span>

       
        <div className="flex w-full items-center space-x-3 sm:space-x-6">
        <DatePicker
          clearIcon={null}
          calendarIcon={<CalendarIcon />}
          onChange={onChange}
          value={value}
        />
        <TimePicker onChange={onChangeValue}  
         clearIcon={null}
         value={timevalue}
         clockIcon={<AiOutlineClockCircle className="text-[#01C38D] text-[22px]"/>}
         />
        </div>
      </div>
      <div className="font-semibold text-lg 2xl:text-2xl w-full border-b border-zinc-400 py-2 text-[#132D46]">
        By motion
      </div>

      <div className="flex justify-between items-center py-2 w-full">
        <span className="text-sm font-semibold text-[#132D46] 2xl:text-xl">Motion</span>

        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>

      <div className="flex justify-between items-center py-2 w-full">
        <span className="text-sm font-semibold text-[#132D46]  2xl:text-xl">Audio</span>

        <Switch isToggled={isToggled} setToggle={setToggle} />
      </div>
      </div>
    </div>
  );
}

export default Period;

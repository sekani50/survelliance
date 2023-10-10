import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
const Phase1 = ({setactive}) => {
  const [time, setTime] = useState();
  const [showTime, setshowTime] = useState(false)

  const handleTiming = (e) => {
    setTimeout(e.target.value)
    //setactive(1)
  }
  return (
    <div className="w-full flex flex-col space-y-3">
      <div className="text-center">
        <div className="font-semibold text-lg 2xl:text-2xl text-[#132D46]">
          When would you like get your daily report?
        </div>
        <div className="text-gray-500 text-[12px] 2xl:text-xl sm:text-sm">
          We will send you a report of event that happened last night
        </div>
      </div>

      <div
       className="relative">
        <input
          className="block form__input 2xl:h-16 input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
          type="text"
          placeholder="Input time"
          name="text"
          readOnly
          value={time}
          onClick={() => {
            setshowTime(!showTime)
          }}
          onChange={(e) => {
            setTime((e) => {
                handleTiming(e)
            });
          }}
        />
        <div className="absolute 2xl:top-4 top-3 right-3">
          <MdNavigateNext className={`text-[24px] 2xl:text-[30px] text-[#01C38D] ${showTime ? 'rotate-[-90deg]' :'rotate-[90deg]'}`} />
        </div>
       {showTime && <div
       onClick={(e) => {
        e.stopPropagation()
       }}
       className="w-full absolute bg-white inset-x-0 top-12 rounded-lg shadow-lg h-[200px] overflow-hidden">
          <div className="timing-scroll-style overflow-y-auto w-full 2xl:py-6 py-3  h-full">
            <div className="flex flex-col space-y-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value, index) => {
                return <div key={index} 
                onClick={() => {
                    setTime(`${value}:00 AM`)
                    setshowTime(false)
                }}
                className="px-2 2xl:text-xl text-gray-500 2xl:py-2 py-1 hover:bg-green-200">{`${value}:00 AM`}</div>;
              })}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Phase1;

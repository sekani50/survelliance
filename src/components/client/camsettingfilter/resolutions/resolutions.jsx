import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

 const DropDown = ({heading}) => {
    const [isShow, setisShow] = useState(false)
  return (
    <div className="w-full sm:w-[90%] space-y-3">
      <div className="2xl:text-xl font-medium">{heading}</div>
      <div
        onClick={() => {
        setisShow(!isShow)
        }}
      className="relative flex justify-between items-center cursor-pointer border text-zinc-700 font-medium border-gray-200 bg-gray-100 rounded-md w-full h-11 p-3 sm:p-4">
        {"324 x 34"}
        <MdNavigateNext className={`text-[25px] 2xl:text-[28px] text-[#01C38D] ${isShow ? 'rotate-90' : '-rotate-90'}`}/>
       {isShow &&  <div 
       onClick={(e) => {
        e.stopPropagation()
       }}
       className="w-full  absolute top-12">
        <div className="relative inset-x-0 bg-white shadow-lg border border-gray-50 rounded-md z-[20]">
        {[1, 2, 3].map((id) => {
            return (
              <div
              onClick={() => {
                setisShow(false);
              }}
              key={id}
              className="hover:bg-gray-50 cursor-pointer text-zinc-700 font-medium  w-full h-11 p-3 sm:p-4">
                {" "}
                {"324 x 34"}
              </div>
            );
          })}
        </div>
      
        </div>}
      </div>
    </div>
  );
};

export default DropDown
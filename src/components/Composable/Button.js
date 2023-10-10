import React from "react";

function Button({ isActive, text,icon, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          isActive
            ? "bg-[#01C38D] text-white"
            : "bg-[#D0D0D0] border border-[#ABABAB] text-[#292D3259]"
        } px-1 sm:px-6 2xl:px-8 rounded-md w-full flex space-x-2 items-center 2xl:py-4 p-2 font-medium text-white`}
      >
        {icon && icon}
       
        <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full">{text}</div>
      </button>
    </div>
  );
}

export default Button;
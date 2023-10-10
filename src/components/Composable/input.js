import React from "react";

function input({ label, placeholder, type }) {
  return (
    <div className="w-full 2xl:mb-6 mb-4">
      <label htmlFor="input" className="font-bold text-gray-700">
        {label}
      </label>
      <div className="w-full 2xl:mt-4 mt-1">
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
        />
      </div>
    </div>
  );
}

export default input;

import React from "react";

function video() {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <div className="w-full">
        <label htmlFor="MBitrate" className="font-bold text-gray-700">
          Max Bitrate ( 32-4096 kbps)
        </label>
        <div className="w-full mt-1">
          <input
            type="text"
            placeholder="Front Door"
            className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="VBR" className="font-bold text-gray-700">
          VBR Quality{" "}
        </label>
        <div className="w-full mt-1">
          <input
            type="text"
            placeholder="0"
            className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="FR" className="font-bold text-gray-700">
          Frame rate{" "}
        </label>
        <div className="w-full mt-1">
          <input
            type="text"
            placeholder="Ring"
            className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="FR" className="font-bold text-gray-700">
          Resolution{" "}
        </label>
        <div className="w-full mt-1">
          <input
            type="text"
            placeholder="1920X1080"
            className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
          />
        </div>
      </div>
    </div>
  );
}

export default video;

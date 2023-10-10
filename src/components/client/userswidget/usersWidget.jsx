import React, { useState } from "react";
import RevokeModal from "../popUpModals/revokeModal";
const UsersWidget = () => {
  const [isRevoke, setRevoke] = useState(false);

  function onClose() {
    setRevoke(!isRevoke);
  }
  return (
    <>
      <div className="grid text-[#132D46] bg-gray-200 font-medium text-sm sm:text-[15px] 2xl:text-xl grid-cols-8 p-2 items-center gap-4 rounded-sm">
        <div className=" grid items-center gap-2 grid-cols-4 col-span-2">
          <div className="rounded-full 2xl:w-[70px] 2xl:h-[70px] w-[50px] h-[50px] bg-[#132D46]"></div>
          <div className="col-span-3 text-ellipsis overflow-hidden whitespace-nowrap">
            Racheal Dominic
          </div>
        </div>
        <div className="underline col-span-2 text-[#01C38D]">
          dominic@gmail.com
        </div>
        <div>17/06/2023</div>
        <div className="uppercase">5:00am</div>
        <div>Invitation sent</div>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-md border border-[#132D46] bg-white">
            Resend
          </button>
          <button
            onClick={() => {
              onClose();
            }}
            className="p-1 rounded-md bg-[#01C38D] border border-[#01C38D] text-white"
          >
            Revoke
          </button>
        </div>
      </div>
      {isRevoke && (
        <RevokeModal header={"Revoke Invitation"} onClose={onClose} />
      )}
    </>
  );
};

export default UsersWidget;

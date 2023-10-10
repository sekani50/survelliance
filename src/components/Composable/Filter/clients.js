import React from "react";

function Clients() {
  return (
    <div>
      <div className="w-full h-[290px] sm:h-[350px] 2xl:h-fit 2xl:max-h-[600px] py-2 pb-14 flex flex-col justify-center items-center bg-[#F0F0F2]">
        <div className="scroll-style overflow-y-auto w-full h-full ">
          <div className="flex 2xl:space-y-3 space-y-2 text-[#132D46] text-sm 2xl:text-2xl flex-col w-full">
            <div className="grid grid-cols-5 w-full items-center">
              <p className="pl-2 col-span-2">Name</p>
              <p className="col-span-2">Email Address</p>
              <p>Events</p>
            </div>
            {[1,2,3,4,5,6,7,8].map((i,j) => {
                return (
                    <div key={j} className="bg-white hover:bg-gray-50 cursor-pointer py-3 2xl:py-4 w-full grid grid-cols-5 items-center">
              <div className="pl-2 flex space-x-2 col-span-2 items-center">
                <div className="rounded-full bg-[#132D46] h-[40px] w-[40px]"></div>
                <p>John Doe</p>
              </div>

              <p className="col-span-2">johndoe@gmail.com</p>
              <p>54</p>
            </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

import React from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import { CiSearch } from "react-icons/ci";
import UsersWidget from "../userswidget/usersWidget";
const ClientUsers = () => {
  return (
    <ClientContainer>
      <div className="w-full h-full bg-gray-100 px-2 sm:px-6 py-[6rem] sm:py-[95px]">
        <div className="bg-white w-full h-full rounded-lg px-2 sm:px-4 py-4 sm:py-8">
          <div className="sm:w-[600px] mb-3 sm:mb-6 w-full relative">
            <input
              placeholder="Search ..."
              type="search"
              className="w-full px-6 bg-gray-100 rounded-md outline-none border border-gray-200 h-10 sm:h-12"
            />

            <div className="absolute top-3 right-3 ">
              <CiSearch className="text-[22px] sm:text-[24px] text-[#132D46] " />
            </div>
          </div>

          <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
            <div className="w-full min-w-[1200px] space-y-2">
              <div className="grid text-[#132D46] bg-gray-200 font-semibold 2xl:text-xl text-sm sm:text-[15px] grid-cols-8 px-3 py-4 items-center gap-4 rounded-t-md">
                <div className="col-span-2">Name</div>
                <div className="col-span-2">Email</div>
                <div>Date</div>
                <div>Time</div>
                <div>Status</div>
              </div>
              <UsersWidget />
              <UsersWidget />
              <UsersWidget />
            </div>
          </div>

          <div className="flex mt-5 items-center justify-center w-full">
            <button className="text-white 2xl:text-xl rounded-md bg-[#01C38D] w-[70%] sm:w-[40%] py-2 sm:py-3">
              Invite Users
            </button>
          </div>
        </div>
      </div>
    </ClientContainer>
  );
};

export default ClientUsers;

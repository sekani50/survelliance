import React from "react";
import Container from "../container/container";
import OfficerListWidget from "./officerwidget/officerListWidget";

const Officers = () => {
  return (
    <Container>
      <div className="w-full text-[#132D46] h-fit space-y-5 bg-gray-100 py-14 sm:px-4 sm:py-24 2xl:py-32">
        <h2 className="font-semibold 2xl:text-3xl">Officers on Duty</h2>
        <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
          <div className="min-w-[1800px]">
            <div className="mt-2 items-center w-full grid grid-cols-11 gap-4 bg-white rounded-md text-black 2xl:py-5 py-4 px-4 2xl:px-5 text-sm  sm:text-base 2xl:text-xl font-semibold">
              <div className="col-span-2 flex space-x-2 items-center">
                <input type="checkbox" name="" id="" />
                <h2 className="">Officers</h2>
              </div>
              <div className="truncate">
                <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                  Cameras
                </h2>
              </div>
              <div className="col-span-2">
                <h2 className="">Address</h2>
              </div>
              <div>
                <h2 className="">Email</h2>
              </div>
              <div>
                <h2 className="">Assigned Clients</h2>
              </div>
              <div>
                <h2 className="">Service Days</h2>
              </div>
              <div>
                <h2 className="">Service Time</h2>
              </div>
              <div>
                <h2 className="">More</h2>
              </div>
            </div>
            <OfficerListWidget
            type={'alert'}
            />
            {[1, 2, 3,4,5].map((item, i) => (
              <div key={i}>
                <OfficerListWidget />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="text-white py-3 bg-[#01C38D] w-[70%] rounded-md sm:w-[40%] font-medium text-sm sm:text-base 2xl:text-xl">
            Show More
          </button>
        </div>

        <h2 className="font-semibold 2xl:text-3xl">Others</h2>

        <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
          <div className="min-w-[1800px]">
            <div className="mt-2 items-center w-full grid grid-cols-11 gap-4 bg-white rounded-md text-black 2xl:py-5 py-4 px-4 2xl:px-5 text-sm  sm:text-base 2xl:text-xl font-semibold">
              <div className="col-span-2 flex space-x-2 items-center">
                <input type="checkbox" name="" id="" />
                <h2 className="">Officers</h2>
              </div>
              <div className="truncate">
                <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                  Cameras
                </h2>
              </div>
              <div className="col-span-2">
                <h2 className="">Address</h2>
              </div>
              <div>
                <h2 className="">Email</h2>
              </div>
              <div>
                <h2 className="">Assigned Clients</h2>
              </div>
              <div>
                <h2 className="">Service Days</h2>
              </div>
              <div>
                <h2 className="">Service Time</h2>
              </div>
              <div>
                <h2 className="">More</h2>
              </div>
            </div>
            {[1, 2,3,4,5,6,7,8,9,10].map((item, i) => (
              <div key={i}>
                <OfficerListWidget />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="text-white py-3 bg-[#01C38D] w-[70%] rounded-md sm:w-[40%] font-medium text-sm sm:text-base 2xl:text-xl">
            Show More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Officers;

import React from "react";
import Container from "../container/container";
import empty from "../../assets/svg/empty.svg";
import refresh from "../../assets/svg/refresh.svg";
import CameraList from "../camera/cameralist/cameraList";
import storage from "../../assets/svg/storage.svg";
import ArchiveCamera from "./archiveCamera/archiveCamera";
const ArchiveEvent = () => {
  const isEmpty = false;
  return (
    <Container>
      <div className="w-full h-full bg-gray-100 min-h-screen  flex pt-[4rem]  sm:pt-[73px]">
        {isEmpty && (
          <div className=" grid place-content-center w-full">
            <div className="md:w-[470px] min-w-[300px] h-[380px] bg-white py-10 rounded-md flex flex-col justify-center items-center">
              <img src={empty} alt="" />
              <h1 className="text-[#696E79] font-bold text-xl">
                No Archive Events yet
              </h1>
              <div className="text-sm w-[200px] text-center mt-10">
                save your camera or video recorder to view more events.
              </div>
              <button className="mt-14 px-8 rounded-md flex space-x-2 items-center p-2 bg-primary-100 text-white">
                <img src={refresh} alt="" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        )}
        {!isEmpty && (
          <div className="hidden sm:block h-full fixed px-4 sm:px-4 py-4 border-r space-y-3 bg-white border-gray-400 shadow-sm w-[240px] sm:w-[250px] ">
            <CameraList />
          </div>
        )}
        {!isEmpty && (
          <div className="sm:pl-[250px] w-full h-full">
            <div className="bg-white z-[20] border-b top-modal-fixed fixed  right-0 2xl:py-8 py-[16px] font-semibold shadow-sm text-center">
              <div className="flex justify-between text-[#132D46] items-center w-full 2xl:px-12 px-2">
                <div className="flex space-x-4">
                  
                  <span>
                    <span className="mr-1">Used Storage</span>
                    <span className="text-[#01C38D]">1GB out of 10GB</span>
                  </span>
                </div>

                <button className="text-white rounded-md bg-[#01C38D] items-center  2xl:p-3 flex space-x-1 justify-center p-1">
                  <img src={storage} alt="" />
                  <span className="font-medium">Need more storage</span>
                </button>
              </div>
            </div>

            <ArchiveCamera />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ArchiveEvent;

import React,{useState} from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import arrowright from "../../../assets/svg/arrowright.svg"
import empty from "../../../assets/svg/empty.svg";
import refresh from "../../../assets/svg/refresh.svg";
// import Card from "../Composable/card";
import FilterModal from "../../Composable/FilterModal";
import EventCamera from "../../Event/eventcameras/eventCamera";

const ClientEvent = () => {
    const [isFilter, setIsFilter] = useState(false);
  const isEmpty = false;
  function onClose() {
    setIsFilter(!isFilter);
  }
    return (
       <ClientContainer>
          <div className="w-full h-full bg-gray-100 min-h-screen  flex pt-[4rem] sm:py-[4.3rem] 2xl:py-[64px]">
        {isEmpty && (
          <div className="w-full h-full px-4 py-4 space-y-8">
            <button
              onClick={() => setIsFilter(!isFilter)}
              className="rounded-md flex space-x-8 items-center 2xl:p-3 p-2 bg-secondary-100 text-white"
            >
              <span>Add Filters</span>
              <img src={arrowright} alt="" />
            </button>
            <div className=" grid place-content-center w-full">
              <div className="md:w-[470px] min-w-[300px] h-[380px] bg-white py-10 rounded-md flex flex-col justify-center items-center">
                <img src={empty} alt="" />
                <h1 className="text-[#696E79] font-bold text-xl">
                  No Events yet
                </h1>
                <div className="text-sm w-[200px] text-center mt-10">
                  Connect your camera or video recorder to view more events.
                </div>
                <button className="mt-14 px-8 rounded-md flex space-x-2 items-center p-2 bg-primary-100 text-white">
                  <img src={refresh} alt="" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>
        )}

      

        {!isEmpty && (
          <div className=" w-full h-full">
            <div className="items-center flex justify-between bg-white z-[20] border-b right 2xl:px-14 px-4 sm:px-10 fixed  right-0 2xl:py-8  py-[16px] font-semibold shadow-sm text-center">
            <button
              onClick={() => setIsFilter(!isFilter)}
              className="rounded-md flex space-x-8 items-center 2xl:px-3 2xl:py-4 p-2 bg-secondary-100 text-white"
            >
              <span>Add Filters</span>
              <img src={arrowright} alt="" />
            </button>
              <span>Thursday, june 29th</span>
              <span className="h-1 w-1"></span>
            </div>

            <EventCamera />
          </div>
        )}
      </div>
      {isFilter && <FilterModal header={"Filter"} onClose={onClose} />}
       </ClientContainer>
    )
}

export default ClientEvent
import React, { useState } from "react";
import archive from "../../../assets/svg/archive.svg";
import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";
import report from "../../../assets/svg/report.svg";
import camera from "../../../assets/svg/camera.svg";
import setting from "../../../assets/svg/setting.svg";
import Eventsettings from "../../Composable/Eventsettings";
import { BsFillCloudFill } from "react-icons/bs";
import { MdEmojiEmotions, MdNavigateNext } from "react-icons/md";
const MenusWidget = ({ ismore, setismore }) => {
  const [settings, setSettings] = useState(false);
  const [drop, setdrop] = useState(false);
  function onClose() {
    setSettings(!settings);
  }
  return (
    <div
      className={
        ismore
          ? "absolute 2xl:left-[-120px] left-[-90px] min-w-max  top-9 "
          : "hidden"
      }
    >
      {settings && (
        <Eventsettings header={"Camera settings"} onClose={onClose} />
      )}

      <div
        onClick={(e) => {
          e.stopPropagation();

          setismore(!ismore);
        }}
        className="w-full h-full fixed inset-0 z-[40] bg-none"
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          "relative  w-[200px] 2xl:w-[280px] py-4 sm:py-6 cursor-pointer z-[300] h-fit flex flex-col 2xl:text-base text-[11px] text-black font-semibold bg-white rounded-md shadow-md 2xl:space-y-3 space-y-3"
        }
      >
        <div
          onClick={() => {
            setSettings(!settings);
          }}
          className="w-full hover:bg-gray-100 py-2 flex px-4 sm:px-6 justify-start  space-x-2 2xl:space-x-3"
        >
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={setting} alt="" />
          </div>
          <span>Camera Settings</span>
        </div>
        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start  space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={report} alt="" />
          </div>
          <span>Create Report</span>
        </div>

        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start  space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={camera} alt="" />
          </div>
          <span>Start Recording</span>
        </div>
        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <BsFillCloudFill className="text-[18px] 2xl:text-[18px] text-[#01C38D]" />
          <span>Manage Cloud Rec.</span>
          <input type="checkbox" className="w-[13px] bg-gray-50" />
        </div>
        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <MdEmojiEmotions className="text-[22px] 2xl:text-[28px] text-[#01C38D]" />
          <span>Motion</span>
          <div
            onClick={() => {
              setdrop(!drop);
            }}
            className=""
          >
            <MdNavigateNext
              className={`text-[22px] 2xl:text-[28px] ${
                drop ? "-rotate-90" : " rotate-90"
              } text-[#01C38D]`}
            />
          </div>
        </div>
        {drop && (
          <div>
            <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
              <input type="checkbox" className="w-[13px] bg-gray-50" />
              <span>Any</span>
            </div>
            <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
              <input type="checkbox" className="w-[13px] bg-gray-50" />
              <span>People</span>
            </div>
            <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
              <input type="checkbox" className="w-[13px] bg-gray-50" />
              <span>Vehicle</span>
            </div>
            <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
              <input type="checkbox" className="w-[13px] bg-gray-50" />
              <span>Within Intrusion Zone</span>
            </div>
          </div>
        )}
        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={event} alt="" />
          </div>
          <span>Add to Events</span>
        </div>
        <div className="w-full hover:bg-gray-100 py-2 px-4 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={event} alt="" />
          </div>
          <span>Add to Events</span>
        </div>
        <div className="w-full px-4 hover:bg-gray-100 py-2 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={archive} alt="" />
          </div>
          <span>Add to Archive</span>
        </div>
        <div className="w-full px-4 hover:bg-gray-100 py-2 sm:px-6 flex justify-start space-x-2 2xl:space-x-3">
          <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
            <img className="w-full h-full" src={deletes} alt="" />
          </div>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default MenusWidget;

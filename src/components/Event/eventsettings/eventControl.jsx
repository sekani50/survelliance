import React, { useState } from "react";
import editIcon from "../../../assets/svg/edit.svg";
import setting from "../../../assets/svg/setting.svg";
import archive from "../../../assets/svg/archive.svg";
//import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";
import Eventsettings from "../../Composable/Eventsettings.js";
import EditCamera from "../../Composable/EditCamera.js";
import user from "../../../assets/svg/account.svg"
import { useNavigate } from "react-router-dom";

const EventController = ({ismore, setismore}) => {
  const [settings, setSettings] = useState(false);
  const [edit, setedit] = useState(false);
  const navigate = useNavigate()
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
      {edit && (
        <EditCamera header={"Edit Camera"} onClose={() => setedit(!edit)} />
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
          "relative w-[200px] 2xl:w-[250px] py-4 sm:py-6 cursor-pointer z-[300] h-fit flex flex-col 2xl:text-base text-[11px] text-black font-semibold bg-white rounded-md shadow-md 2xl:space-y-3 space-y-2"
        }
      >
        <div
          onClick={() => setedit(!edit)}
          className="space-x-1 hover:bg-gray-100 py-2 flex px-4 sm:px-6 items-center"
        >
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
            <img src={editIcon} alt="" className="w-full h-full " />
          </div>
          <button className="2xl:text-xl text-zinc-600">Edit Camera</button>
        </div>
        <div
          onClick={() => setSettings(!settings)}
          className="space-x-1 hover:bg-gray-100 py-2 flex px-4 sm:px-6 items-center"
        >
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
            <img src={setting} alt="" className="w-full h-full " />
          </div>
          <button className="2xl:text-xl text-zinc-600">Setting</button>
        </div>
        <div className="space-x-1 hover:bg-gray-100 py-2 flex px-4 sm:px-6 items-center">
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
            <img src={archive} alt="" className="w-full h-full " />
          </div>
          <button className="2xl:text-xl text-zinc-600">Archive</button>
        </div>
        <div
        onClick={() => {
          navigate("/admin/client/detail")
        }}
        className="space-x-1 hover:bg-gray-100 py-2 flex px-4 sm:px-6 items-center">
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
            <img src={user} alt="" className="w-full h-full " />
          </div>
          <button className="2xl:text-xl text-zinc-600">Client</button>
        </div>
        <div className="space-x-1 hover:bg-gray-100 py-2 flex px-4 sm:px-6 items-center">
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
            <img src={deletes} alt="" className="w-full h-full " />
          </div>
          <button className="2xl:text-xl text-zinc-600">Delete</button>
        </div>
      </div>
      </div>
      
    
  );
};

export default EventController;

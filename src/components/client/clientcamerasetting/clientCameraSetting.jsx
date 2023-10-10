import React, { useState } from "react";
import close from "../../../assets/svg/closes.svg";
import Button from "../../Composable/Button";
import { FaVideo } from "react-icons/fa";
import { HiVolumeUp } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Switch from "../../UI/switch";
import VideoSetting from "../camsettingfilter/videoSetting";
import AudioSetting from "../camsettingfilter/audioSetting";
import SystemSetting from "../camsettingfilter/systemSetting";
import SecuritySetting from "../camsettingfilter/securitySetting";
import AboutCamera from "../camsettingfilter/aboutCamera";
const ClientCameraSetting = ({ header, onClose }) => {
  const [tab, setTab] = useState("video");
  return (
    <div
      onClick={onClose}
      className="fixed right-0  px-4 sm:px-0 top-0 z-[32] pb-8 h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 bg-white  overflow-hidden h-fit max-h-[80vh] 2xl:h-fit rounded-md px-2 sm:px-4 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] 2xl:w-[1085px] shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">
            {header}
          </h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>

        <div className="flex justify-between items-center w-full py-2">
          <p className="font-semibold text-[#132D46] text-sm sm:text-base 2xl:text-xl">
            Camera
          </p>
          <Switch />
        </div>

        <div className="w-full camera-scroll-style pb-2  2xl:px-4 overflow-x-auto">
          <div className="flex w-full px-[23rem]  md:px-[30rem] 2xl:px-3 space-x-4 justify-center items-center">
            <Button
              text={"Video Settings"}
              icon={
                <FaVideo
                  className={`text-[25px] 2xl:text-[28px] ${
                    tab === "video" ? "text-white" : "text-[#bbbfc2]"
                  }`}
                />
              }
              isActive={tab === "video" ? true : false}
              onClick={() => {
                setTab("video");
              }}
            />
            <Button
              text={"Audio"}
              icon={
                <HiVolumeUp
                  className={`text-[25px] 2xl:text-[28px] ${
                    tab === "audio" ? "text-white" : "text-[#bbbfc2]"
                  }`}
                />
              }
              isActive={tab === "audio" ? true : false}
              onClick={() => {
                setTab("audio");
              }}
            />
            <Button
              text={"Security Settings"}
              icon={
                <MdSecurity
                  className={`text-[25px] 2xl:text-[28px] ${
                    tab === "security" ? "text-white" : "text-[#bbbfc2]"
                  }`}
                />
              }
              isActive={tab === "security" ? true : false}
              onClick={() => {
                setTab("security");
              }}
            />
            <Button
              text={"System Settings"}
              icon={
                <AiFillSetting
                  className={`text-[25px] 2xl:text-[28px] ${
                    tab === "system" ? "text-white" : "text-[#bbbfc2]"
                  }`}
                />
              }
              isActive={tab === "system" ? true : false}
              onClick={() => {
                setTab("system");
              }}
            />
            <Button
              text={"About"}
              icon={
                <BsFillPatchQuestionFill
                  className={`text-[25px] 2xl:text-[28px] ${
                    tab === "about" ? "text-white" : "text-[#bbbfc2]"
                  }`}
                />
              }
              isActive={tab === "about" ? true : false}
              onClick={() => {
                setTab("about");
              }}
            />
          </div>
        </div>
        <div className="w-full 2xl:h-full h-[300px] pb-48 camera-scroll-style overflow-y-auto">
          {tab === "video" && <VideoSetting />}
          {tab === "audio" && <AudioSetting />}
          {tab === "system" && <SystemSetting />}
          {tab === "security" && <SecuritySetting />}
          {tab === 'about' && <AboutCamera/>}
        </div>
      </div>
    </div>
  );
};

export default ClientCameraSetting;

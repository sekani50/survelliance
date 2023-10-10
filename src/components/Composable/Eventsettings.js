import { useState } from "react";
import close from "../../assets/svg/closes.svg";
import Button from "./Button";
import VideoSettings from "./Event/video";
import MotionSettings from "./Event/motion";
import motion from "../../assets/png/Motion.png"
import intrusion from "../../assets/png/intrusion.jpg"
import DetectionFilters from "./Event/detectionFilters";
function FilterModal({ header, onClose }) {
  const [tab, setTab] = useState("video");

  return (
    <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[350] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 bg-white rounded-md px-2 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">{header}</h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>

        <h1 className="text-sm xl:text-lg font-bold text-[#132D46]">Camera #3 Kitchen</h1>

        <div className="flex space-x-4 justify-center items-center">
          <Button
            text={"Video"}
            isActive={tab === "video" ? true : false}
            onClick={() => {
              setTab("video");
            }}
          />
          <Button
            text={"Motion Detector"}
            isActive={tab === "motion" ? true : false}
            onClick={() => {
              setTab("motion");
            }}
          />
          <Button
            text={"Intrusion Zone"}
            isActive={tab === "zone" ? true : false}
            onClick={() => {
              setTab("zone");
            }}
          />
             <Button
            text={"Others"}
            isActive={tab === "detection" ? true : false}
            onClick={() => {
              setTab("detection");
            }}
          />
        </div>

        {tab === "video" && <VideoSettings />}
        {tab === "motion" && <MotionSettings image={motion}/>}
        {tab === "zone" && <MotionSettings image={intrusion}/>}
        {tab === 'detection' && <DetectionFilters/>}

        <div className="flex w-full flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center items-center mt-10 sm:space-x-4">
          <button className="w-[70%] sm:w-[30%] py-2 sm:py-3 2xl:py-4 bg-[#132D46] text-white rounded-md">
            Apply filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;

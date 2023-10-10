import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import camera from "../../../assets/svg/camera.svg";
import Alert from "../alert/alert";
import { useState } from "react";
import MenusWidget from "../menuwidget/menuWidget";
import nosignal from "../../../assets/png/nosignal.jpg";
import { useNavigate } from "react-router-dom";
const CameraWidget = ({ image, isalert, issignal, record, resize }) => {
  const [ismore, setismore] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/camera/0");
      }}
      className={`w-full  h-[220px] relative rounded-lg ${
        resize === 1 ? "sm:h-[60vh] 2xl:h-[80vh]" : ""
      } ${resize === 6 ? "2xl:h-[22vh]" : ""} ${
        resize === 4 ? "2xl:h-[32vh]" : ""
      } ${resize > 1 && resize < 4 ? "md:h-[38vh]" : "2xl:h-[65vh]"}`}
    >
      {record && (
        <div className="absolute  2xl:py-3 py-1 px-2 bg-[#01C38D] text-white rounded-md space-x-1 items-center flex w-fit left-4 top-6">
          <span className="w-2 h-2 2xl:w-4 2xl:h-4 rounded-full bg-red-500"></span>
          <span>REC</span>
        </div>
      )}
      {/**alert */}
      <div
        className={
          isalert ? "m-auto absolute inset-0  w-full  h-fit" : "hidden"
        }
      >
        <Alert resize={resize} />
      </div>
      {/**menu */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setismore(!ismore);
        }}
        className="absolute right-3 z-[20] top-3 p-1 bg-white bg-opacity-50 rounded-md "
      >
        <GiHamburgerMenu className="text-[25px] text-white" />

        {<MenusWidget ismore={ismore} setismore={setismore} />}
      </button>
      <button className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
        <GiHamburgerMenu className="text-[25px] text-white" />
      </button>
      <img
        src={image || nosignal}
        alt=""
        className="w-full h-full object-fill rounded-lg"
      />
      {!issignal && (
        <div className="absolute 2xl:text-[25px] text-[13px] flex flex-col text-white inset-0 m-auto w-fit h-fit">
          <div className="w-[45px] h-[45px] 2xl:w-[90px] 2xl:h-[70px] ">
            <img className="w-full h-full" src={camera} alt="" />
          </div>

          <div>No signal</div>
        </div>
      )}
      <div className="absolute bottom-1 text-gray-100 w-full inset-x-o p-3">
        <div className="flex items-center justify-between w-full text-[12px] 2xl:text-[20px]">
          <div className="flex flex-col 2xl:space-y-2 justify-start">
            <div>Thursday,1 june 2023</div>
            <div className="flex items-center space-x-1">
              <BiTimeFive className="text-[#01C38D] text-[15px] 2xl:text-[24px]" />
              <div>03:45:24 AM</div>
            </div>
          </div>

          <div className="flex flex-col 2xl:space-y-2 items-center">
            <div className="flex items-center space-x-1">
              <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
                <img className="w-full h-full" src={camera} alt="" />
              </div>
              <div>Camera#1</div>
            </div>
            <div>Jane apartment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraWidget;

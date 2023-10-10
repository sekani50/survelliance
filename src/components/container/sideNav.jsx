import React, { useEffect, useState } from "react";
import logo from "../../assets/png/logo.png";
import { BsCameraVideo } from "react-icons/bs";
import camera from "../../assets/svg/camera.svg";
import grid from "../../assets/svg/grid.svg";
import archive from "../../assets/svg/archive.svg";
import event from "../../assets/svg/event.svg";
import report from "../../assets/svg/report.svg";
import client from "../../assets/svg/client.svg";
import setting from "../../assets/svg/setting.svg";
import logout from "../../assets/svg/logout.svg";
import { Link, useLocation } from "react-router-dom";
import {GiPoliceOfficerHead} from 'react-icons/gi'
// import DashBoard from "../dashboard/dashBoard";
import EventSettings from "../Composable/AddCamera";
import AddOfficer from "../addofficer/addOfficer";

const SideNav = ({ isNav, setisNav }) => {
  const [addCamera, setAddCamera] = useState(false);
  const [addOfficer, setaddOfficer] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/admin/dashboard") {
      //   setisAdmin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setisNav(!isNav);
      }}
      className={`fixed z-[37] inset-y-0 left-0 h-full overflow-hidden ${
        isNav
          ? "w-full bg-black bg-opacity-50 min-[1024px]:w-[250px] "
          : "max-[1024px]:hidden w-[250px] 2xl:w-[300px]"
      }`}
    >
     
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="py-4  flex flex-col scrollbar-hide overflow-y-auto items-center space-y-4 2xl:w-[300px]  h-full w-[200px] sm:w-[250px] cursor-pointer  bg-[#132D46] "
      >
        <div className="  px-8 w-full flex flex-col items-center justify-center 2xl:space-y-5 space-y-3">
          <div className=" left-[50px] h-[35px] sm:h-[60px] enter  w-fit">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <button
            onClick={() => setAddCamera(true)}
            className="bg-[#01C38D] flex justify-center whitespace-nowrap space-x-1 w-fit sm:space-x-2 items-center 2xl:p-3 p-2 text-white rounded-lg "
          >
            <BsCameraVideo className="text-[22px] 2xl:text-[28px]" />
            <span>Add Camera or DVR</span>
          </button>
        </div>

        {addCamera && (
          <EventSettings
            header={"Connect a DVR"}
            onClose={() => setAddCamera(false)}
          />
        )}

        <div className="w-full items-start flex-col justify-start 2xl:text-[25px] text-[15px] text-white 2xl:space-y-8 space-y-3 2xl:py-4 py-2 border-b border-[#01C38D]">
          {true && (
            <Link
              to="/admin/dashboard"
              className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
                pathname === "/admin/dashboard"
                  ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                  : ""
              }`}
            >
              <div className="w-[25px] h-[25px] ">
                <img className="w-full h-full" src={grid} alt="" />
              </div>
              <div>Dashboard</div>
            </Link>
          )}
          <Link
            to="/camera"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("camera")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={camera} alt="" />
            </div>
            <div>Cameras</div>
          </Link>
          <Link
            to="/events"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("events")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={event} alt="" />
            </div>
            <div>Events</div>
          </Link>
          <Link
          to="/archive"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("archive")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={archive} alt="" />
            </div>
            <div>Archive Events</div>
          </Link>

          <Link
            to="/report"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("report")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={report} alt="" />
            </div>
            <div>Reports</div>
          </Link>

          <Link to="/admin/settings"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("settings")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={setting} alt="" />
            </div>
            <div>Admin Settings</div>
          </Link>

          <Link
            to="/admin/client"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname === "/admin/client"
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={client} alt="" />
            </div>
            <div>Clients</div>
          </Link>
          
          <Link
            to="/admin/officer"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname === "/admin/officer"
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
           <GiPoliceOfficerHead className="text-[22px] text-[#01C38D] 2xl:text-[28px]" />
            <div>Officers</div>
          </Link>
        </div>

        <div className="2xl:space-y-8 w-full  items-start flex-col justify-start 2xl:text-[25px] text-[15px] text-white space-y-3 py-2 ">
        
      <div className="w-full px-2">
      <button
          onClick={() => {
            setaddOfficer(true)
          }}
          className="bg-[#01C38D] flex  justify-center whitespace-nowrap space-x-1 w-full sm:space-x-2 items-center 2xl:p-3 p-2 text-white rounded-lg "
        >
          <GiPoliceOfficerHead className="text-[22px] 2xl:text-[28px]" />
          <span>Add Officers</span>
        </button>

        
        {addOfficer && (
          <AddOfficer
            header={"Add Officer"}
            onClose={() => setaddOfficer(false)}
          />
        )}
      </div>
        
          <Link to="/setting"
         
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname === "/setting"
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={setting} alt="" />
            </div>
            <div>Settings</div>
          </Link>

          <Link
            to={"/"}
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname === "/logout"
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={logout} alt="" />
            </div>
            <div>Log out</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

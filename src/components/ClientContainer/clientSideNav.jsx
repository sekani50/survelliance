import React from "react";
import logo from "../../assets/png/logo.png";
//import { BsCameraVideo } from "react-icons/bs";
import camera from "../../assets/svg/camera.svg";
import event from "../../assets/svg/event.svg";
import invites from "../../assets/svg/invites.svg";
import privacy from "../../assets/svg/privacy.svg";
import client from "../../assets/svg/client.svg";
import setting from "../../assets/svg/setting.svg";
import logout from "../../assets/svg/logout.svg";
import { Link, useLocation } from "react-router-dom";
// import DashBoard from "../dashboard/dashBoard";
//import EventSettings from "../Composable/AddCamera";

const ClientSideNav = ({ isNav, setisNav }) => {
  // const [addCamera, setAddCamera] = useState(false);
  const { pathname } = useLocation();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setisNav(!isNav);
      }}
      className={`fixed z-[37] inset-y-0 left-0 h-full  ${
        isNav
          ? "w-full bg-black bg-opacity-50 min-[1024px]:w-[250px]"
          : "max-[1024px]:hidden w-[250px] "
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="py-4 flex flex-col items-center space-y-4 2xl:w-[300px]  h-full w-[200px] sm:w-[250px] cursor-pointer  bg-[#132D46] "
      >
        <div className="  px-8 w-full flex 2xl:space-y-8  flex-col items-center justify-center space-y-3">
          <div className=" left-[50px] h-[35px] sm:h-[60px] enter  w-fit">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          {/** <button
            onClick={() => setAddCamera(true)}
            className="bg-[#01C38D] flex justify-center whitespace-nowrap space-x-1 w-fit sm:space-x-2 items-center p-2 text-white rounded-lg "
          >
            <BsCameraVideo className="text-[22px]" />
            <span>Add Camera or DVR</span>
          </button> 
              {addCamera && (
          <EventSettings
            header={"Connect a DVR"}
            onClose={() => setAddCamera(false)}
          />
        )}
          
          */}
        </div>

        <div className="w-full items-start flex-col justify-start 2xl:space-y-8  2xl:text-[25px]  text-[15px] text-white space-y-3 py-2 border-b border-[#01C38D]">
          <Link
            to="/client/camera"
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
            to="/client/invites"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("invites")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={invites} alt="" />
            </div>
            <div>Invites</div>
          </Link>
          <Link
            to="/client/events"
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
            to="/client/camera"
            className={` space-x-2 hidden justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("privacy")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={privacy} alt="" />
            </div>
            <div>Privacy</div>
          </Link>

          <Link
            to="/client/users"
            className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname.includes("users")
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={client} alt="" />
            </div>
            <div>Users</div>
          </Link>
        </div>

        <div className="2xl:text-[25px] w-full items-start flex-col justify-start text-[15px] text-white 2xl:space-y-8 space-y-3 py-2 ">
          <div
            className={`hidden space-x-2 justify-start items-center pl-10 py-2 w-full ${
              pathname === "/setting"
                ? "bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]"
                : ""
            }`}
          >
            <div className="w-[25px] h-[25px] ">
              <img className="w-full h-full" src={setting} alt="" />
            </div>
            <div>Settings</div>
          </div>

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

export default ClientSideNav;

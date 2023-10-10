import React from "react";
import logo from "../../../assets/png/logo.png";
import { BiArrowBack } from "react-icons/bi";
import map from "../../../assets/svg/authmap.svg";
import cctv from "../../../assets/png/cctv.png";
import { useLocation, useNavigate } from "react-router-dom";
import Registration from "../registration";
import Login from "../login";
const Auth = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
  return (
    <div className="w-full 2xl:text-[30px] h-full fixed inset-0 p-2 sm:py-4   sm:px-10  text-zinc-800 bg-[#132D46]">
         <div  className="w-[600px] sm:w-[900px] inset-0 m-auto h-fit absolute "
      >
        <img src={map} alt="" className="w-full h-full object-contain" />
      </div>
      
      
      <div
      onClick={() => {
        navigate(-1)
      }}
      className="relative cursor-pointer flex 2xl:space-x-3 w-fit space-x-2 mb-5 sm:mb-7 text-white items-center z-[30]">
        <BiArrowBack className="2xl:text-[40px] text-[25px] text-[#01C38D]" />
        Back
      </div>
      <div className="absolute w-full h-full m-auto inset-0 z-[2]  ">
      <div className="w-full  h-full flex justify-center items-center min-[1100px]:px-20 min-[890px]:justify-around">
      <div className="max-[450px]:w-full min-[450px]:w-[450px] 2xl:w-[600px] 2xl:h-[880px] h-[650px] pt-[3rem]  overflow-hidden ">
       <div className="home-scroll-style w-full  h-full overflow-x-hidden overflow-y-auto  pb-8">
       <div className="w-full min-[450px]:w-[420px] 2xl:w-[600px] items-center space-y-8 min-[890px]:space-y-0 h-fit flex flex-col ">
        <div className="hides h-[50px]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
            {pathname === "/auth/signup" && <Registration/>}
            {pathname === "/auth/signin" && <Login/>}
        </div>
        </div>
       </div>
        <div className="hidden min-[890px]:flex flex-col space-y-8 items-center">
          <div className="h-[70px] 2xl:h-[100px] ">
            <img className="w-full h-full" src={logo} alt="" />
          </div>

          <div className="ml-[3rem] 2xl:w-[500px] 2xl:h-[300px]  w-[300px] h-[220px]">
            <img src={cctv} alt="" className="w-full h-full" />
          </div>

          <div className="flex text-white flex-col space-y-2 2xl:space-y-4 justify-center items-center 2xl:w-[500px] w-[300px]">
            <div className="font-semibold">Always monitoring your house</div>
            <div className="text-[13px] 2xl:leading-8 2xl:text-[20px] text-center">
              On the shot, you see the main screen with all the rooms, and users
              can control each camera with the help of remote control
            </div>
          </div>
        
          </div>
      </div>
     
      </div>
    </div>
  );
};

export default Auth;



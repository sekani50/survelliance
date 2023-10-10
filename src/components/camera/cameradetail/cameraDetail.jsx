import React, { useState } from "react";
import Container from "../../container/container";
import camera from "../../../assets/svg/camera.svg";
import voice from "../../../assets/svg/voice.svg";
import speaker from "../../../assets/svg/speaker.svg";
import two from "../../../assets/png/two.jpg";
import clients from "../../../assets/svg/clients.svg";
import call from "../../../assets/svg/call.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneClockCircle, AiFillCamera } from "react-icons/ai";
import Alert from "../alert/alert";
import MenusWidget from "../menuwidget/menuWidget";
import {
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoPlayForward,
  IoPlayBack,
} from "react-icons/io5";
import {
  BsCameraVideo,
  BsFillCalendarEventFill,
  BsPlayFill,
  BsPauseFill,
  BsArrowLeft,
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CameraDetail = () => {
  // const { state } = useLocation();
  //const { item } = state;
  const isalert = true;
  const [ismore, setismore] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const navigate = useNavigate();

  function handlePlay() {
    setPlay(!isPlay);
  }
  return (
    <Container>
      <div className=" w-full h-fit grid grid-cols-1 sm:px-4 md:grid-cols-11 pb-[100px] 2xl:pt-[100px] pt-[83px] gap-y-10  md:gap-10">
        <div className="w-full md:col-span-8  items-center space-y-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex space-x-2 items-center">
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                <BsArrowLeft className="text-[#132D46] font-semibold text-[25px] 2xl:text-[30px]" />
              </button>
              <h1 className="text-xl text-[#132D46] 2xl:text-3xl font-semibold">
                Detection Screen
              </h1>
            </div>
            <div className="flex flex-col 2xl:w-[300px] w-[175px] overflow-hidden items-center">
              <div className="flex items-center space-x-2">
                <div className="w-[22px] h-[22px] sm:w-[35px] sm:h-[35px] 2xl:h-[50px] 2xl:w-[50px]">
                  <img className="w-full h-full" src={camera} alt="" />
                </div>
                <div>
                  <div className="text-lg 2xl:text-2xl text-[#132D46] font-semibold">
                    {"Camera 1"}
                  </div>
                </div>

                <div className="flex space-x-1 w-fit px-1 rounded-md bg-[#132D46] items-center">
                  <div className="rounded-full bg-[#01C38D] w-1 h-1"></div>
                  <div className="text-white text-[10px] 2xl:text-lg">Live</div>
                </div>
              </div>
              <div className="text-gray-500 font-semibold text-[12px] 2xl:text-xl align-middle">
                {"Lucy Apartment"}
              </div>
            </div>
          </div>
          <div className="w-full h-full grid gap-6 grid-cols-1 2xl:grid-cols-8">
            <div className="w-full bg-white col-span-2 2xl:space-y-8 space-y-6 h-fit  rounded-md p-3">
              <h1 className="text-xl 2xl:text-3xl font-semibold">
                Information
              </h1>
              <div className="text-sm 2xl:text-2xl flex flex-col 2xl:space-y-4 space-y-2">
                <div className="w-full font-semibold border-b py-1">
                  Person Info
                </div>
                <div className="flex flex-col w-full 2xl:space-y-3">
                  <div className="w-full flex justify-between items-center">
                    <span className="font-semibold">Camera System</span>
                    <span className="text-gray-600">Ring Network</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="font-semibold">No of Cameras</span>
                    <span className="text-gray-600">12</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="font-semibold">UserName</span>
                    <span className="text-gray-600">Jyanes</span>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <span className="font-semibold">Password</span>
                    <span className="text-gray-600">123456</span>
                  </div>
                </div>
                <div className="w-full font-semibold border-b py-1">
                  Special Instruction
                </div>
                <div className="text-gray-600">
                  Call first before calling the police
                </div>

                <div className="w-full font-semibold border-b py-1">
                  Conceirge Instruction
                </div>
                <div className="text-gray-600">Test Test</div>
              </div>

              <div className="flex full flex-col space-y-3 cursor-pointer">
                <div className="text-[13px]  2xl:text-xl sm:text-sm font-semibold text-[#132D46] border-b pb-2 ">
                  Emergency Contacts
                </div>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="text-[#132D46] font-semibold 2xl:text-xl  text-[12px] sm:text-sm">
                      John Doe
                    </div>
                    <div className="text-[10px]  2xl:text-xl sm:text-[12px] text-[#01C38D]">
                      983323423422
                    </div>
                  </div>
                  <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
                    <img src={call} alt="" className="w-full h-full" />
                  </div>
                </div>

                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="text-[#132D46] font-semibold 2xl:text-xl  text-[12px] sm:text-sm">
                      John Doe
                    </div>
                    <div className="text-[10px] 2xl:text-xl  sm:text-[12px] text-[#01C38D]">
                      983323423422
                    </div>
                  </div>
                  <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
                    <img src={call} alt="" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="text-[#132D46] font-semibold text-[12px] 2xl:text-xl sm:text-sm">
                      John Doe
                    </div>
                    <div className="text-[10px] 2xl:text-xl  sm:text-[12px] text-[#01C38D]">
                      983323423422
                    </div>
                  </div>
                  <div className="w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]">
                    <img src={call} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full col-span-6 h-fit bg-white rounded-md p-3">
              <div className="w-full h-[66vh] rounded-md relative mb-3">
                <img
                  className="w-full h-full object-fill rounded-md"
                  src={two}
                  alt=""
                />
                {/**alert */}
                <div
                  className={
                    isalert
                      ? "m-auto absolute inset-0  w-full  h-fit"
                      : "hidden"
                  }
                >
                  <Alert />
                </div>
                {/**menu */}
                <button
                  onClick={() => {
                    setismore(!ismore);
                  }}
                  className="absolute right-3 z-[20] top-3 p-1 bg-white bg-opacity-50 rounded-md "
                >
                  <GiHamburgerMenu className="text-[25px] text-white" />

                  <MenusWidget ismore={ismore} setismore={setismore} />
                </button>
                <div className="absolute bottom-1 text-gray-100 w-full inset-x-o p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-[24px]  2xl:w-[50px] 2xl:h-[50px] cursor-pointer flex items-center justify-center  sm:w-[30px] sm:h-[30px] h-[24px] p-[6px] rounded-full bg-gray-200  ">
                      <img
                        className="w-[24px] h-[24px]  sm:w-[30px] sm:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                        src={voice}
                        alt=""
                      />
                    </div>

                    <div className="w-[24px] 2xl:w-[50px] 2xl:h-[50px]  sm:w-[30px] sm:h-[30px] cursor-pointer flex items-center justify-center h-[24px] p-[6px] rounded-full bg-gray-200  ">
                      <img
                        className="w-[24px] h-[24px]  sm:w-[30px] sm:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                        src={speaker}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-between items-center flex">
                <div className="flex items-center 2xl:text-lg space-x-3 bg-gray-200 justify-start w-fit rounded-lg p-2 text-[12px]">
                  <div className="flex items-center space-x-2">
                    <BsFillCalendarEventFill className="text-[#01C38D] text-[15px] 2xl:text-xl" />
                    <div>Thursday,1 june 2023</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <AiTwotoneClockCircle className="text-[#01C38D] text-[15px] 2xl:text-xl" />
                    <div>03:45:24 AM</div>
                  </div>
                </div>
                <div className="space-x-2 2xl:space-x-3 flex items-center ">
                  <button>
                    <IoPlayBack className="text-gray-300 2xl:text-3xl" />
                  </button>
                  <button>
                    <IoPlaySkipBack className="text-gray-300 2xl:text-3xl" />
                  </button>
                  <button
                    onClick={handlePlay}
                    className="bg-gray-300 rounded-full p-2 items-center justify-center flex"
                  >
                    {isPlay ? (
                      <BsPauseFill className="text-[#132D46] 2xl:text-3xl" />
                    ) : (
                      <BsPlayFill className="text-[#132D46] 2xl:text-3xl" />
                    )}
                  </button>
                  <button>
                    <IoPlaySkipForward className="text-gray-300 2xl:text-3xl" />
                  </button>

                  <button>
                    <IoPlayForward className="text-gray-300 2xl:text-3xl" />
                  </button>
                </div>

                <div className="space-x-2 2xl:space-x-3 flex items-center ">
                  <AiFillCamera className="text-[#132D46] 2xl:text-3xl" />
                  <BsFillCloudDownloadFill className="text-[#132D46] 2xl:text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 border-l p-3 items-center justify-center md:w-full w-[350px] space-y-3">
          <div className="space-y-3 2xl:space-y-7 flex flex-col">
            <div className="flex space-x-2 items-center">
              <div className="w-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full h-[30px] ">
                <img
                  src={clients}
                  alt=""
                  className="w-full rounded-full h-full "
                />
              </div>
              <div className="font-semibold text-[#132D46] 2xl:text-2xl text-[13px]">
                Jane Doe
              </div>
            </div>
          
          </div>

          {[1, 2, 3, 4].map(({ subcam, loc }, idx) => {
            return (
              <div
                key={idx}
                className="w-full h-[30vh] bg-white rounded-md p-2"
              >
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-2 rounded-md h-[20vh]">
                    <img
                      className="w-full rounded-md  h-full"
                      src={two}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[#132D46] text-[15px] 2xl:text-xl whitespace-nowrap">
                      {`Camera ${idx + 2}`}
                    </div>
                    <div className="text-gray-400 text-[10px] whitespace-nowrap 2xl:text-lg">
                      {"backyard"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="w-full items-center justify-center">
            <button className="bg-[#01C38D] flex justify-center space-x-2 items-center 2xl:py-3 p-2 text-white rounded-lg w-fit">
              <BsCameraVideo className="text-[22px] 2xl:text-[30px]" />
              <span className="2xl:text-xl">Add Camera or DVR</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CameraDetail;

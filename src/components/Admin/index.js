import React from "react";
import Container from "../container/container";
import officer from "../../assets/svg/officer.svg";
import clients from "../../assets/svg/clients.svg";
import { Link, useNavigate } from "react-router-dom";
// import Card from "../Composable/card";

function Index() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="w-full h-fit space-y-5 bg-gray-100 px-4 mb sm:px-4 py-[5rem] 2xl:pt-[100px] pt-24">
        <h2 className="text-lg 2xl:text-[25px] font-bold">Overview</h2>
        <div className="grid xl:grid-cols-12 grid-cols-1 gap-y-6 xl:gap-6 items-start mt-3">
          <div className="col-span-7  w-full h-full ">
            <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
              <div className="min-w-[950px]">
                <div className=" w-full grid grid-cols-4 items-center mb-1  gap-6 bg-white p-4 rounded-md">
                  <div
                    className={` bg-[#01C38D14] 2xl:space-y-4 py-6 text-center rounded-md`}
                  >
                    <h2
                      className={`text-xl sm:text-2xl  font-bold  text-[#01C38D]`}
                    >
                      1387
                    </h2>
                    <p className={`text-[#01C38D]`}>ONLINE</p>
                  </div>
                  <div
                    className={` bg-[#E1363617] 2xl:space-y-4 py-6 text-center rounded-md`}
                  >
                    <h2
                      className={`text-xl sm:text-2xl font-bold  text-[#E31D1C]`}
                    >
                      2
                    </h2>
                    <p className={`text-[#E31D1C]`}>NEEDS ASSIST</p>
                  </div>
                  <div
                    className={` bg-[#FFA84217] 2xl:space-y-4 py-6 text-center rounded-md`}
                  >
                    <h2
                      className={`text-xl sm:text-2xl font-bold  text-[#FFA842]`}
                    >
                      2
                    </h2>
                    <p className={`text-[#FFA842]`}>IN PROGRESS</p>
                  </div>
                  <div
                    className={` bg-[#132D4617] 2xl:space-y-4 py-6 text-center rounded-md`}
                  >
                    <h2
                      className={`text-xl sm:text-2xl font-bold  text-[#132D46]`}
                    >
                      401
                    </h2>
                    <p className={`text-[#132D46]`}>RESOLVED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-scroll-style mt-8 w-full h-fit overflow-x-auto">
              <div className="min-w-[1800px]">
                <div className="flex w-full py-3 justify-between">
                  <h2 className="text-base sm:text-lg 2xl:text-[25px] text-[#132D46] font-semibold sm:font-bold">
                    Events
                  </h2>
                  <h2 className="text-[13px] 2xl:text-xl n text-[#01C38D] font-semibold sm:font-bold">
                    View all
                  </h2>
                </div>
                <div className="mt-1 grid grid-cols-11 items-center bg-white 2xl:py-5 p-3 rounded-t-md text-sm  sm:text-base 2xl:text-[20px] text-[#132D46] font-semibold sm:font-bold">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="" id="" />
                    <h2 className="">Date</h2>
                  </div>
                  <div>
                    <h2 className="">Time</h2>
                  </div>
                  <div className="col-span-2">
                    <h2 className="">Clients</h2>
                  </div>
                  <div className="col-span-2">
                    <h2 className="">Address</h2>
                  </div>
                  <div>
                    <h2 className="">Camera</h2>
                  </div>
                  <div className="col-span-2">
                    <h2 className="">Officer Assigned</h2>
                  </div>
                  <div>
                    <h2 className="">Status</h2>
                  </div>
                  <div></div>
                </div>

                {[1, 2].map((item, i) => (
                  <div
                    key={i}
                    className="mt-2  grid grid-cols-11 items-center gap-4 bg-red-500 text-white 2xl:px-4 2xl:py-8 p-3 text-sm  sm:text-base 2xl:text-[20px] font-semibold sm:font-bold"
                  >
                    <div className="flex space-x-2 items-center">
                      <input type="checkbox" name="" id="" />
                      <h2 className="">07/07/2023</h2>
                    </div>
                    <div>
                      <h2 className="">09:40AM</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                        Kelvin Hunter
                      </h2>
                    </div>
                    <div className="truncate col-span-2">
                      <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                        12 Maldives Riverside...
                      </h2>
                    </div>
                    <div>
                      <h2 className="">Entrance</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="">-</h2>
                    </div>
                    <div>
                      <h2 className="">Alarm</h2>
                    </div>
                    <div>
                      <button onClick={() => {
                        navigate("/camera/0")
                      }} className="text-red-500 bg-white rounded-md text-sm 2xl:text-xl p-2 2xl:p-3">
                        View
                      </button>
                    </div>
                  </div>
                ))}
                {[1, 2, 3].map((item, i) => (
                  <div
                    key={i}
                    className="mt-2 2xl:p-6 grid grid-cols-11 gap-4 items-center bg-white 2xl:px-4 2xl:py-8 p-3 text-sm  sm:text-base 2xl:text-[20px]  font-semibold sm:font-bold"
                  >
                    <div className="flex space-x-2 items-center">
                      <input type="checkbox" name="" id="" />
                      <h2 className="">07/07/2023</h2>
                    </div>
                    <div>
                      <h2 className="">09:40AM</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                        Kelvin Hunter
                      </h2>
                    </div>
                    <div className="truncate col-span-2">
                      <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                        12 Maldives Riverside...
                      </h2>
                    </div>
                    <div>
                      <h2 className="">Entrance</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        Officer Banks
                      </h2>
                    </div>
                    <div>
                      <h2 className="">Inprogress</h2>
                    </div>
                  </div>
                ))}
                {[1, 2, 3].map((item, i) => (
                  <div
                    key={i}
                    className="mt-2 2xl:p-6 grid grid-cols-11 items-center gap-4 bg-white 2xl:px-4 2xl:py-8 p-3 text-sm  sm:text-base 2xl:text-[20px]  font-semibold sm:font-bold"
                  >
                    <div className="flex space-x-2 items-center">
                      <input type="checkbox" name="" id="" />
                      <h2 className="">07/07/2023</h2>
                    </div>
                    <div>
                      <h2 className="">09:40AM</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                        Kelvin Hunter
                      </h2>
                    </div>
                    <div className="truncate col-span-2">
                      <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                        12 Maldives Riverside...
                      </h2>
                    </div>
                    <div>
                      <h2 className="">Entrance</h2>
                    </div>
                    <div className="col-span-2">
                      <h2 className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        Officer Banks
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-orange-400">Resolved</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:gap-0 gap-y-6 sm:gap-x-6 w-full xl:block ">
            <div className=" 2xl:space-y-4 space-y-2">
              <h2 className="text-lg 2xl:text-[25px] text-[#132D46] font-bold">
                  Alerts
              </h2>
              {[1, 2,].map((val, index) => {
                return (
                  <div className="flex justify-between 2xl:p-6 p-4 bg-red-500 text-white items-center mt-3 w-full">
                    <div className="flex items-center  space-x-3 ">
                      <img src={officer} alt="" />
                      <p className="text-xs 2xl:text-xl n font-bold">
                        A camera is opened outside the schedule service time
                      </p>
                    </div>
                    <button
                    onClick={() => {
                      navigate("/admin/officer/detail")
                    }}
                    className="w-fit px-2 py-1 text-[12px] 2xl:text-xl n rounded-md text-red-500 bg-white">
                      Open
                    </button>
                  </div>
                );
              })}
                 {[1, 2,].map((val, index) => {
                return (
                  <div className="flex justify-between 2xl:p-6 p-4 bg-red-500 text-white items-center mt-3 w-full">
                    <div className="flex items-center  space-x-3 ">
                      <img src={clients} alt="" />
                      <p className="text-xs 2xl:text-xl n font-bold">
                        A camera is closed within the schedule service time
                      </p>
                    </div>
                    <button
                    onClick={() => {
                      navigate("/admin/client/detail")
                    }}
                    className="w-fit px-2 py-1 text-[12px] 2xl:text-xl n rounded-md text-red-500 bg-white">
                      Open
                    </button>
                  </div>
                );
              })}
              {[1, 2].map((val, index) => {
                return (
                  <div className="flex justify-between 2xl:p-6 p-4 bg-white items-center mt-3 w-full">
                    <div className="flex items-center  space-x-3 ">
                      <img src={clients} alt="" />
                      <p className="text-xs 2xl:text-xl n font-bold">
                        Lane joe added a new camera
                      </p>
                    </div>
                    <button
                    onClick={() => {
                      navigate("/admin/client/detail")
                    }}
                    className="w-fit px-2 py-1 text-[12px] 2xl:text-xl n rounded-md text-white bg-[#01C38D]">
                      Open
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="2xl:space-y-4 space-y-2 xl:mt-6">
              <div className="flex justify-between items-center w-full">
                <div className="space-x-1 flex items-center">
                  <h2 className="text-lg 2xl:text-[25px] text-[#132D46] font-bold">
                    Clients online
                  </h2>
                  <span className="text-[10px] sm:text-[12px] 2xl:text-base text-[#01C38D] font-semibold pt-2">
                    1387
                  </span>
                </div>
                <button
                  onClick={() => {
                    navigate("/admin/client");
                  }}
                  className="text-[11px] 2xl:text-base font-semibold text-[#01C38D]"
                >
                  View all
                </button>
              </div>

              {[1, 2, 3, 4, 5].map((val, index) => {
                return (
                  <Link
                    to="/admin/client/detail"
                    key={index}
                    className="flex justify-between 2xl:p-6 p-4 bg-white items-center mt-3 w-full"
                  >
                    <div className="flex items-center  space-x-3">
                      <img
                        src={clients}
                        className="w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                        alt=""
                      />
                      <div>
                        <p className="text-[12px] 2xl:text-xl overflow-hidden text-ellipsis w-full whitespace-nowrap font-bold">
                          Kelly Sikkkema
                        </p>
                        <p className="text-[10px] 2xl:text-xl font-bold text-[#01C38D]">
                          4 cameras
                        </p>
                      </div>
                      <div>
                        <p className="text-[12px]  2xl:text-xl font-bold overflow-hidden text-ellipsis w-full whitespace-nowrap">
                          Kelly Sikkkema
                        </p>
                        <p className="text-[10px] 2xl:text-xl font-bold text-white flex space-x-2">
                          <span className="flex space-x-1 items-center">
                            <button className=" w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#01C38D]">
                              M
                            </button>
                            <button className="w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#01C38D]">
                              T
                            </button>
                            <button className="w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#01C38D]">
                              W
                            </button>
                            <button className="w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#132D46]">
                              T
                            </button>
                            <button className="w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#01C38D]">
                              F
                            </button>
                            <button className="w-[15px] 2xl:w-[30px] 2xl:p-1 rounded-md bg-[#132D46]">
                              S
                            </button>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-end justify-end">
                      <span className="uppercase overflow-hidden text-[10px] font-medium 2xl:text-lg text-ellipsis text-end w-full whitespace-nowrap">
                        7:00pm pdt 8:00am pdt
                      </span>
                      <button className="w-fit hidden lg:block px-4 py-1 text-[12px] 2xl:text-xl rounded-md text-white bg-[#01C38D]">
                        Open
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;

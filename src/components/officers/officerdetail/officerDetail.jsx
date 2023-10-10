import React from "react";
import Container from "../../container/container";
import officer from "../../../assets/svg/officer.svg";
import ClientListWidget from "../../adminClient/clientList/clientListWidget/clientListWidget";
import EventCameraWidget from "../../Event/eventcameras/eventcamerawidget/eventCameraWidget";
import { useState } from "react";
import AssignClient from "../../addofficer/assignClient";
import AddOfficer from "../../addofficer/addOfficer";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const OfficerDetail = () => {
  const [isAssign, setAssign] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const navigate = useNavigate();

  function edit() {
    setEdit(!isEdit);
  }
  function onClose() {
    setAssign(!isAssign);
  }
  return (
    <Container>
      <div className="w-full overflow-x-hidden text-[#132D46] h-fit 2xl:space-y-12 space-y-5 bg-gray-100 py-14 sm:px-4 sm:py-24 2xl:py-32">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="font-semibold cursor-pointer items-center flex space-x-2"
        >
          <MdNavigateBefore className="2xl:text-2xl" />
          <div className="2xl:text-xl">Back</div>
        </div>
        <div className="w-full flex items-center 2xl:space-x-8 space-x-3">
          <div className="w-[200px] h-[200px] 2xl:w-[300px] 2xl:h-[300px] rounded-full">
            <img src={officer} alt="officer" className="w-full h-full" />
          </div>
          <div className="2xl:text-[26px] justify-start font-medium flex flex-col space-y-4 2xl:space-y-7">
            <p>
              <span className="font-semibold mr-2">Name:</span> Jake Paul
            </p>
            <p>
              <span className="font-semibold mr-2">Email:</span>{" "}
              jakepaul@gmail.com
            </p>
            <p>
              <span className="font-semibold mr-2">Address:</span> Maldevis
              Layout, Honk Kong
            </p>
            <button
              onClick={() => {
                setAssign(!isAssign);
              }}
              className="2xl:px-8 px-4 py-2 text-white bg-[#01C38D] 2xl:py-4 w-fit rounded-md"
            >
              Assign Client
            </button>
          </div>

          <button
            onClick={() => {
              setEdit(!isEdit);
            }}
            className="2xl:px-8 px-4 py-2 text-[#01C38D] border self-start mt-6 2xl:mt-8 border-[#01C38D] 2xl:py-4 w-fit rounded-md"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold 2xl:text-3xl">Cameras</h2>
          <p className="2xl:text-2xl font-medium text-[#01C38D]">View All</p>
        </div>
        <div className="w-full h-fit overflow-x-auto dashboard-scroll-style">
          <div className="min-w-max flex gap-x-6 items-center flex-row py-3 2xl:py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, j) => {
              return (
                <div key={j} className="2xl:w-[400px] sm:w-[250px] w-[155px]">
                  <EventCameraWidget resize={7} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <h2 className="font-semibold 2xl:text-3xl text-red-500">
              Unlawful Cameras
            </h2>
            <button className="rounded-xl p-2 border border-[#132D46] 2xl:p-3 2xl:text-2xl  font-medium">
              Today
            </button>
          </div>
          <p className="2xl:text-2xl font-medium text-[#01C38D]">View All</p>
        </div>

        <div className="w-full h-fit overflow-x-auto dashboard-scroll-style">
          <div className="min-w-max flex gap-x-6 items-center flex-row py-3 2xl:py-4">
            {[1, 2, 3, 4, 5, 6].map((i, j) => {
              return (
                <div key={j} className="2xl:w-[400px] sm:w-[250px] w-[155px]">
                  <EventCameraWidget resize={8} />
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="font-semibold 2xl:text-3xl">Assigned Clients (5)</h2>

        <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
          <div className="min-w-[1200px]">
            <div className="mt-2 items-center w-full grid grid-cols-10 gap-4 bg-white rounded-md text-black 2xl:py-5 py-4 px-4 2xl:px-5 text-sm  sm:text-base 2xl:text-xl font-semibold">
              <div className="col-span-2 flex space-x-2 items-center">
                <input type="checkbox" name="" id="" />
                <h2 className="">Clients</h2>
              </div>
              <div className="truncate">
                <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
                  Camera
                </h2>
              </div>
              <div className="col-span-2">
                <h2 className="">Address</h2>
              </div>
              <div>
                <h2 className="">Service Days</h2>
              </div>
              <div>
                <h2 className="">Date</h2>
              </div>
              <div>
                <h2 className="">Service Time</h2>
              </div>
              <div>
                <h2 className="">Event Type</h2>
              </div>
            </div>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i}>
                <ClientListWidget />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isAssign && <AssignClient onClose={onClose} header={"Assign Client"} />}
      {isEdit && <AddOfficer onClose={edit} header={"Edit Officer Profile"} />}
    </Container>
  );
};

export default OfficerDetail;

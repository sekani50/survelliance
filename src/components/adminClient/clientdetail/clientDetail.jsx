import React from "react";
import clients from "../../../assets/svg/clients.svg";
import {AiTwotoneEdit} from 'react-icons/ai'
import { MdNavigateNext,MdOutlineNavigateNext } from "react-icons/md";
import satelite from "../../../assets/png/satelite.png";
import EmergencyContactList from "../../camera/alert/emergencyList";
const ClientDetail = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return (
        <div className="md:col-span-4 w-full flex space-y-4 px-4 flex-col 2xl:text-2xl">
        <div className="flex flex-col w-full">
          <div className="flex space-x-2 mb-2 items-center">
            <div className="w-[48px] 2xl:w-[60px] rounded-full h-[48px] ">
              <img
                src={clients}
                alt=""
                className="w-full rounded-full h-full "
              />
            </div>
            <div className="font-semibold ">Jane Doe</div>
          </div>
          <button className="w-fit flex item-center bg-[#01C38D] mb-2  justify-center space-x-2 px-1 2xl:py-4 2xl:px-2 py-2 rounded-md 2xl:text-2xl text-sm">
        
              <AiTwotoneEdit className="text-white text-[22px] 2xl:text-[28px] "/>
          
            <span className="text-white">Edit Profile</span>
          </button>

          <div className="w-full space-y-2">
          <div className="w-full flex flex-col ">
            <div className="w-full justify-between text-sm 2xl:text-2xl text-[#132D46] items-center flex">
              <span className="font-semibold">Style</span>
              <button className="flex items-center  space-x-2 justify-center w-fit p-1 border rounded-md">
                <span>Satelite</span>
                <MdNavigateNext className="rotate-90 text-[#01C38D] text-[20px]" />
              </button>
            </div>
          </div>
          <div className="w-full rounded-md h-[350px] md:h-[250px] xl:h-[35vh]">
            <img
              src={satelite}
              alt=""
              className="w-full h-full rounded-md object-fill"
            />
          </div>

          </div>
        </div>

        {/** user detail */}
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

          <div className="w-full font-semibold border-b py-1">
            Days/Hours of Service
          </div>

          <div className="w-full flex items-center space-x-1 justify-center">
            {days.map((day, index) => {
              return (
                <div
                key={index}
                  className={`text-white px-3 py-2  ${
                    index === 0
                      ? "rounded-l-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  } ${
                    index === days.length -1
                      ? "rounded-r-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex font-medium uppercase w-fit px-2 py-2 space-x-1 items-center rounded-md bg-gray-100 border border-gray-200">
                    <span>7:00pm mdt</span>
                    <MdOutlineNavigateNext className="text-[20px] text-[#01C38D] rotate-90"/>
            </div>
            <div className="flex font-medium uppercase w-fit px-2 py-2 space-x-1 items-center rounded-md bg-gray-100 border border-gray-200">
                    <span>8:00pm mdt</span>
                    <MdOutlineNavigateNext className="text-[20px] text-[#01C38D] rotate-90"/>
            </div>

          </div>
          <EmergencyContactList/>
        </div>
      </div>
    )
}

export default ClientDetail
import React from "react";
import Container from "../../container/container";
import ClientListWidget from "./clientListWidget/clientListWidget";
import { useState } from "react";
import AddClient from "../addClient/addClient";

const ClientList = () => {
  const [addClient, setaddClient] = useState(false)

  function onClose() {
    setaddClient(!addClient);
  }
  return (
    <Container>
      <div className="w-full 2xl:py-32 h-fit space-y-5 bg-gray-100 py-14 sm:px-4 sm:py-24">
        
          <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
            <div className="min-w-[1100px]">
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
              {[1, 2].map((item, i) => (
                <div
                key={i}

                >
                <ClientListWidget/>

                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
          onClick={() => {
            onClose()
          }}
          className="text-white py-3 bg-[#01C38D] w-[70%] rounded-md sm:w-[40%] font-medium text-sm sm:text-base 2xl:text-xl">
            Add Client
          </button>
        
      </div>
      {addClient && <AddClient header={'Add Client'} onClose={onClose}/>}
    </Container>
  );
};

export default ClientList;

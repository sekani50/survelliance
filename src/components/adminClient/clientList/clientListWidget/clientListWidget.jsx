import React from "react";
import clients from "../../../../assets/svg/clients.svg";
import { Link } from "react-router-dom";
const ClientListWidget = () => {
  return (
    <Link
      to="/admin/client/detail"
      className="mt-2 grid grid-cols-10 w-full items-center gap-4 bg-white rounded-md text-black 2xl:py-5 py-4 px-4 2xl:px-5 text-sm  sm:text-base 2xl:text-xl font-semibold"
    >
      <div className="flex col-span-2 space-x-2 items-center">
        <input type="checkbox" name="" id="" />
        <img src={clients} alt="" />
        <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
          Kelvin Hunter
        </h2>
      </div>
      <div className="truncate">
        <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
          Front Door
        </h2>
      </div>
      <div className="col-span-2">
        <h2 className="">Maldevis layout, New York</h2>
      </div>
      <div>
        <h2 className="text-[#01C38D]">M T W T F S S</h2>
      </div>
      <div>
        <h2 className="">07/07/2023</h2>
      </div>
      <div>
        <h2 className="">09:40AM - 10:00PM</h2>
      </div>
      <div>
        <h2 className="">Motion</h2>
      </div>
    </Link>
  );
};

export default ClientListWidget;

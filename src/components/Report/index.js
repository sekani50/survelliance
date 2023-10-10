import React from "react";
import Container from "../container/container";
import report from "../../assets/svg/reportlite.svg";
import { Link } from "react-router-dom";
function Index() {
  const isEmpty = true;

  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 px-4 sm:px-4 py-[5rem] sm:py-24">
        {isEmpty && (
          <div className="w-full h-full px-4 py-4 space-y-8">
            <div className=" grid place-content-center w-full">
              <div className="md:w-[600px] min-w-[300px] h-[380px] bg-white py-10 rounded-md flex flex-col justify-center items-center">
                <img src={report} alt="" />
                <h1 className="text-[#696E79] font-bold text-xl">
                  No Report yet
                </h1>
                <div className="text-sm 2xl:text-xl w-[400px] text-center mt-10">
                  Connect your camera or video recorder to view more events.{" "}
                </div>
                <Link
                  to="/report/create"
                  className="mt-14 px-12 rounded-md flex space-x-2 items-center 2xl:p-4 p-2 bg-primary-100 text-white"
                >
                  <span>Create report</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Index;

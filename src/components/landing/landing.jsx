import React, { useEffect, useState } from "react";
import logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";
import map from "../../assets/svg/World Map.svg";
const Landing = () => {
  const navigate = useNavigate();
  const [timeoutid, setTimeOutId] = useState(0);
  const [timeoutid1, setTimeOutId1] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setTimeOutId(window.setTimeout(() => {}, 4000));
      setTimeOutId1(
        window.setTimeout(() => {
          // navigate("/signup");
        }, 4000)
      );
    };
    handleSize();
    return () => {
      window.clearTimeout(timeoutid);
      window.clearTimeout(timeoutid1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full h-full fixed inset-0  text-white bg-[#132D46]">
      <div className="w-[600px] sm:w-[900px] inset-0 m-auto h-fit absolute ">
        <img src={map} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full h-fit space-y-[30vh] flex flex-col items-center bottom-[10vh] inset-x-0 mx-auto lets swipeDown  absolute ">
        <div className="w-[190px] 2xl:w-[250px] 2xl:h-[120px] justify-center h-20 flex items-center space-x-3">
          <img className="h-full w-full" src={logo} alt="" />
          <div className="text-2xl 2xl:text-4xl inline-block">
            <div className="whitespace-nowrap w-full animation overflow-hidden tracking-[6px]">
              SENTRI
            </div>
          </div>
        </div>
        <div className="space-y-3 w-full 2xl:w-[500px] sm:w-[400px] px-3 ">
          <button
            onClick={() => {
              navigate("/auth/signin");
            }}
            className="w-full py-3 bg-white 2xl:text-xl  2xl:py-4 text-zinc-700 font-medium rounded-md"
          >
            Log In
          </button>
          <button
            onClick={() => {
              navigate("/auth/signup");
            }}
            className="w-full py-3 2xl:text-xl  2xl:py-4 bg-[#01C38D] font-medium rounded-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

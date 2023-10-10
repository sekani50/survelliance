import React, { useState } from "react";
import PhaseB from "./registrationphases/phaseB";
import PhaseD from "./registrationphases/phaseD";
import PhaseC from "./registrationphases/phaseC";
import PhaseA from "./registrationphases/phaseA";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()

  console.log(active);
  return (
    <div className="w-full  transform  2xl:space-y-10 ease-in-out h-fit inset-0  space-y-5">
      <div className="w-full items-center justify-center flex space-x-4">
        <div
          onClick={() => {
            setActive(0);
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${
            active >= 0 ? "bg-[#01C38D]" : "bg-white "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(1);
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer  ${
            active >= 1 ? "bg-[#01C38D]" : "bg-white "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(2);
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer ${
            active >= 2 ? "bg-[#01C38D]" : "bg-white "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(3);
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${
            active === 3 ? "bg-[#01C38D]" : "bg-white "
          }`}
        ></div>
      </div>

      <PhaseA active={active} setActive={setActive} />
      <PhaseB active={active} setActive={setActive} />
      <PhaseC active={active} setActive={setActive} />
      <PhaseD active={active} setActive={setActive} />

      <div className="text-white text-center">
        {" "}
        Already have an account? <span
        onClick={() => {
          navigate("/auth/signin" )
        }}
        className="cursor-pointer text-[#01C38D]">Log in</span>
      </div>
    </div>
  );
};

export default Registration;

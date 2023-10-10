import React,{useState} from "react";
import logo from "../../assets/png/dlogo.png";
import Phase1 from "./onboardingphases/phase1";
import Phase2 from "./onboardingphases/phase2";
import Phase3 from "./onboardingphases/phase3";
const Onboarding = () => {
 
  const [active, setActive] = useState(2);
    return (
        <div className="w-full h-full bg-white fixed flex flex-col items-center justify-center inset-0 ">
            <div className="m-auto inset-0 w-full px-2 h-fit absolute flex flex-col items-center 2xl:w-[600px]  sm:w-[450px] ">
            <div className="h-[50px] sm:h-[70px] w-fit mb-[3rem] ">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div className="px-4 mb-3 w-full items-center justify-center flex space-x-4">
        <div
          onClick={() => {
            setActive(0);
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${
            active >= 0 ? "bg-[#01C38D]" : "bg-gray-200 "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(1);
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer  ${
            active >= 1 ? "bg-[#01C38D]" : "bg-gray-200 "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(2);
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer ${
            active >= 2 ? "bg-[#01C38D]" : "bg-gray-200 "
          }`}
        ></div>
        <div
          onClick={() => {
            setActive(3);
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${
            active === 3 ? "bg-[#01C38D]" : "bg-gray-200 "
          }`}
        ></div>
      </div>
          {active === 0 && <Phase1 setactive={setActive} />}
          {active === 1 && <Phase2 setactive={setActive} />}
          {active === 2 && <Phase3 setactive={setActive} />}
            </div>

        </div>
    )
}

export default Onboarding
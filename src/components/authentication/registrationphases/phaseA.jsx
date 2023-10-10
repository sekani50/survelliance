import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import fb from "../../../assets/svg/fb.svg";
import apple from "../../../assets/svg/apple.svg";
import google from "../../../assets/svg/google.svg";
import Loader from "../../UI/Loader";
import { RiErrorWarningLine } from "react-icons/ri";
import PasswordWarning from "../warning/passwordWarning";
// import { LoginAction } from "../../../Redux/Actions/ActionCreators";
const PhaseA = ({ active, setActive }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading] = useState(false);
  const [iswarn, setwarn] = useState(false)
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = () => {
    const validateData = {
      name,
      email,
      password,
    };

    for (let i in validateData) {
      if (validateData[i] === "") {
        toast.error(`${i} is required`);
        return;
      }
    }

    const payload = {
      name,
      email,
      password,
    };
    console.log(payload);
    setActive(1);
    // dispatch(LoginAction(payload, navigate, setLoading));
  };
  return (
    <div
      className={
        active === 0
          ? "w-full  relative 2xl:h-[810px] h-[580px] px-6 sm:px-8 py-6 flex  flex-col justify-center items-center  sm:rounded-lg bg-white border shadow-xl"
          : "hidden"
      }
    >
      <div className="absolute top-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="w-full flex items-start mb-6 justify-start">
          <div className="text-2xl 2xl:text-4xl font-medium text-black ">
            Get started with{" "}
            <span className="uppercase text-[#01C38D]">sentri</span>
          </div>
        </div>

        <div className="mb-6 w-full flex items-center  space-x-6 justify-center">
        <div className="w-[30px] 2xl:h-[50px]  2xl:w-[50px] h-[30px] cursor-pointer">
              <img src={fb} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] 2xl:h-[50px]  2xl:w-[50px] cursor-pointer">
              <img src={google} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] 2xl:h-[50px]  2xl:w-[50px] cursor-pointer">
              <img src={apple} alt="" className="w-full h-full" />
            </div>
        </div>
      </div>
      <div className="absolute 2xl:top-[10rem] top-[8rem] px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="form-group space-y-3 2xl:space-y-6 mb-3 2xl:mb-6 w-full">
          <label className="block font-medium " htmlFor="name">
            Fullname
          </label>
          <input
            className="block form__input 2xl:h-16 input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
            type="name"
            placeholder=""
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group space-y-3 2xl:space-y-6 2xl:mb-6 mb-3 w-full">
          <label className="block font-medium " htmlFor="email">
            Email
          </label>
          <input
            className="block 2xl:h-16 form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
            type="email"
            placeholder=""
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group space-y-3 2xl:space-y-6 2xl:mb-6 mb-3 w-full">
          <label className="block font-medium " htmlFor="password">
            <span className="flex items-center space-x-1">
              {" "}
              <span>Password </span>
              <span
               onClick={() => {
                setwarn(!iswarn)
            }}
              className="cursor-pointer">
                <RiErrorWarningLine className="2xl:text-[30px] text-[20px] text-[#01C38D]" />
              </span>
            </span>
          </label>
          <input
            className="block form__input 2xl:h-16 input-field border  border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
            type="password"
            placeholder=""
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group space-y-3 2xl:space-y-6 2xl:mb-6 mb-3 w-full">
          <label className="block font-medium " htmlFor="password">
            Confirm Password
          </label>
          <input
            className="block form__input 2xl:h-16 input-field border  border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
            type="password"
            placeholder=""
            name="password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <button
          onClick={handleSubmit}
          className="w-full 2xl:py-6 py-3 bg-[#132D46] mt-8 rounded-lg text-white flex justify-center items-center space-x-2"
        >
          {loading ? <Loader /> : "Create Account"}
        </button>
      </div>
      {iswarn && <PasswordWarning iswarn={iswarn} setwarn={setwarn}/>}
    </div>
  );
};

export default PhaseA;

import React from "react";
import Container from "../../container/container";
import InputPassword from "../../client/composable/inputPassword";
import { useState } from "react";
import SettingNav from "../settingNav/settingNav";
import ForgotPassword from "./popupmodal/forgotPassword";

const PasswordSetting = () => {
    const [password, setPassword] = useState()
    const [isforget, showresetoption] = useState(false)

    function onClose() {
        showresetoption(!isforget)
    }
  return (
    <Container>
      <div className="w-full h-full sm:px-4 space-y-5 bg-gray-100 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-[600px] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  Password Settings
                </div>
                <div className="text-gray-400 text-[11px] 2xl:text-xl sm:text-[13px]">
                  To set a new password, please enter your current password
                </div>
              </div>
            <div className="w-full space-y-2 flex flex-col">
            <InputPassword
              type={'password'}
              header={'Old Password'}
              placeholder={'********'}
              value={password}
              setValue={setPassword}
              />
            <div 
            
            className="text-[#01C38D] flex justify-end font-semibold cursor-pointer"><span
            onClick={() => {
                showresetoption(!isforget)
            }}
            className="cursor-pointer">Forget your password?</span></div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
        {isforget && <ForgotPassword header={'Forget Password'} onClose={onClose}/>}
    </Container>
  );
};

export default PasswordSetting;

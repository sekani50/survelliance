import React from "react";
import  Input  from "../../Composable/input";
const SecuritySetting = () => {
  return (
    <div className="w-full sm:w-[90%] h-full">
      <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl my-2">
        Camera Time and Date
      </h2>
      <div className="flex text-gray-400 tex-xs sm:text-sm 2xl:text-xl flex-wrap w-full">
        By default, the password to access the web interface of the camera is
        randomly selected. To access the web interface of the camera you can
        create your own password.
      </div>
      <div className="w-full mt-4">
        <Input
          label={"New Password"}
          placeholder={"Enter your new password"}
          type={"password"}
        />
        <Input
          label={"Confirm Password"}
          placeholder={"Enter your new password"}
          type={"password"}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="text-white rounded-md py-2 px-8 sm:py-3 rounced-md bg-[#132D46] w-[90%] sm:w-[50%] 2xl:w-[30%]">
          Set New Password
        </button>
      </div>
    </div>
  );
};

export default SecuritySetting;

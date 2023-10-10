import React, { useState } from "react";
import Container from "../container/container";
import SettingNav from "./settingNav/settingNav";
import InputText from "../client/composable/inputText";
import deletes from "../../assets/svg/delete.svg";
import officer from "../../assets/svg/officer.svg";
import { AiTwotoneEdit } from "react-icons/ai";
function Settings() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [userId, setUserId] = useState();
  const [selectCategory, setSelectCategory] = useState();
  const category = ["male", "female"];
  return (
    <Container>
      <div className="w-full h-full sm:px-4 space-y-5 bg-gray-100 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white w-full text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-full sm:w-[600px] 2xl:w-[800px] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  Profile Settings
                </div>
                <div className="text-gray-400 text-[11px] 2xl:text-xl sm:text-[13px]">
                  Update your profle and personal detail here
                </div>
              </div>

              <div className="space-x-2 flex items-center">
                <div className="w-[90px] h-[90px] 2xl:w-[100px] 2xl:h-[100px] rounded-full bg-[#132D46]">
                  <img src={officer} alt="" className="w-full h-full rounded-full" />
                </div>
                <button className="py-2 px-3 2xl:py-4  sm:px-4 font-medium rounded-lg border border-[#01C38D] flex space-x-2 items-center">
                  <div className="w-[20px] h-[20px]  2xl:w-[30px] 2xl:h-[30px]">
                    <img src={deletes} alt="" className="w-full h-full" />
                  </div>
                  <span className="text-ellipsis whitespace-nowrap w-full overflow-hidden">Delete Photo</span>
                </button>
                <button className="py-2 2xl:py-4  px-3 sm:px-4 font-medium rounded-lg text-white bg-[#01C38D] flex space-x-2 items-center">
                  <AiTwotoneEdit className="text-[20px] 2xl:text-[30px] text-white" />
                  <span className="text-ellipsis whitespace-nowrap w-full overflow-hidden">Edit Photo</span>
                </button>
              </div>

              <div className="account_form w-full 2xl:space-y-6 space-y-4">
                <div className="text-sm sm:text-lg 2xl:text-xl font-semibold text-[#132D46]">
                  General
                </div>
                <InputText
                  header={"FullName"}
                  type={"name"}
                  value={name}
                  setValue={setName}
                  placeholder={"John Doe"}
                />
                <InputText
                  header={"Email"}
                  type={"email"}
                  value={email}
                  setValue={setEmail}
                  placeholder={"officialjohn@gmail.com"}
                />
                <InputText
                  header={"Phone Number"}
                  type={"tel"}
                  value={phone}
                  setValue={setPhone}
                  placeholder={"(854) 456 789"}
                />

                <div className="flex space-x-2  font-semibold justify-start items-start">
                  {category.map((type, index) => {
                    return (
                      <div
                        className="p-3 2xl:p-6 rounded-md bg-gray-100 border border-gray-200 "
                        key={index}
                      >
                        <label
                          onClick={() => {
                            setSelectCategory(index);
                          }}
                          className="container"
                        >
                          {type}
                          <input
                            onChange={(e) => e.target.value}
                            type="checkbox"
                            checked={index === selectCategory}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <InputText
                  header={"ID"}
                  type={"text"}
                  value={userId}
                  setValue={setUserId}
                  placeholder={"14095 555 1234 007SENT"}
                />
              </div>

              <div className="flex justify-center sm:justify-start  sm:mt-10 mt-3 w-full">
                <button className="w-[70%] sm:w-[40%] 2xl:py-6 py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Settings;

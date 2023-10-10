import React from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import SettingNav from "./settingnav/settingNav";
import edit from "../../../assets/svg/edit.svg";
import deletes from "../../../assets/svg/delete.svg";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import InputText from "../composable/inputText";
import InputPassword from "../composable/inputPassword";
const AccountSetting = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [selectCategory, setSelectCategory] = useState();
  const [newpassword, setNewpassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const category = ["male", "female"];
  return (
    <ClientContainer>
      <div className="w-full h-full bg-gray-100 px-2 sm:px-6 py-[6rem] sm:py-[95px]">
      <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-full sm:w-[600px]  2xl:w-[900px] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  Profile Settings
                </div>
                <div className="text-gray-400 text-[11px] sm:text-[13px]">
                  Update your profle and personal detail here
                </div>
              </div>

              <div className="space-x-2 flex items-center">
                <div className="w-[90px] h-[90px] rounded-full bg-[#132D46]"></div>
                <button className="py-2 px-3 sm:px-4 font-medium rounded-lg border border-[#01C38D] flex space-x-2 items-center">
                  <div className="w-[20px] h-[20px]">
                    <img src={deletes} alt="" className="w-full h-full" />
                  </div>
                  <span>Delete Photo</span>
                </button>
                <button className="py-2 px-3 sm:px-4 font-medium rounded-lg text-white bg-[#01C38D] flex space-x-2 items-center">
                  <div className="w-[20px] h-[20px]">
                    <img src={edit} alt="" className="w-full h-full" />
                  </div>
                  <span>Edit Photo</span>
                </button>
              </div>

              <div className="account_form w-full space-y-4">
                <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
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
                        className="p-3 rounded-md bg-gray-100 border border-gray-200 "
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
                  header={"Location"}
                  type={"address"}
                  value={location}
                  setValue={setLocation}
                  placeholder={"12 maldives reverside"}
                />
              </div>

              <div className="w-full space-y-3">
                <div>
                  <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                    Security
                  </div>
                  <div className="text-gray-400 text-[11px] sm:text-[13px]">
                    Change your password
                  </div>
                </div>

                <InputPassword
                  header={"Current Password"}
                  type={"password"}
                  value={password}
                  setValue={setPassword}
                  placeholder={"**********"}
                />
                <InputPassword
                  header={"New {Password"}
                  type={"password"}
                  value={newpassword}
                  setValue={setNewpassword}
                  placeholder={"**********"}
                />
                <InputPassword
                  header={"Confirm Password"}
                  type={"password"}
                  value={confirmpassword}
                  setValue={setConfirmPassword}
                  placeholder={"**********"}
                />
              </div>

              <div className="w-full space-y-3">
              <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                    Days/Hours of Service
                  </div>

                  <div className="w-full flex items-center space-x-1 justify-start">
            {days.map((day, index) => {
              return (
                <div
                key={index}
                  className={`text-white px-3 py-2  ${
                    index === 0
                      ? "rounded-l-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  } ${
                    index === days.length -1
                      ? "rounded-r-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          <div className="flex justify-start items-center space-x-2">
            <div className="flex font-medium uppercase w-fit px-2 py-2 space-x-1 items-center rounded-md bg-gray-100 border border-gray-200">
                    <span>7:00pm mdt</span>
                    <MdOutlineNavigateNext className="text-[20px] text-[#01C38D] rotate-90"/>
            </div>
            <div className="flex font-medium uppercase w-fit px-2 py-2 space-x-1 items-center rounded-md bg-gray-100 border border-gray-200">
                    <span>8:00pm mdt</span>
                    <MdOutlineNavigateNext className="text-[20px] text-[#01C38D] rotate-90"/>
            </div>

          </div>



              </div>
              
          <div className="flex justify-center sm:justify-end  sm:mt-10 mt-3 w-full">
              <button className="w-[70%] sm:w-[40%] py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
                Save Changes
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </ClientContainer>
  );
};

export default AccountSetting;

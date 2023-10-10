import React,{useState} from "react";
import SettingNav from "./settingNav/settingNav";
import InputText from "../client/composable/inputText";
import Container from "../container/container";

const GenralSetting = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [userId, setUserId] = useState();
    return (
        <Container>
        <div className="w-full h-full sm:px-4 space-y-5 bg-gray-100 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-[65vh] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div className="">
                <div className="text-sm sm:text-lg 2xl:text-2xl font-semibold text-[#132D46]">
                  General Settings
                </div>
                <div className="text-gray-400 text-[11px] 2xl:text-xl sm:text-[13px]">
                  Update your profle and personal detail here
                </div>
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

                
                <InputText
                  header={"ID"}
                  type={"text"}
                  value={userId}
                  setValue={setUserId}
                  placeholder={"14095 555 1234 007SENT"}
                />
              </div>
            
            {/**'Camera time zone in the design, is it necessary' */}
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
    )
}

export default GenralSetting
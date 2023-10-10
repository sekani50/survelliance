import React, {useState} from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import InvitationForm from "./inviteform/invitationForm";

const Invites = () => {
    const [inviteform, setinviteform] = useState([<InvitationForm key={0}/>])

    const addMoreIV = () => {
        setinviteform((prev) => [...prev, <InvitationForm key={prev.length}/>])
    }
  return (
    <ClientContainer>
      <div className="w-full h-full bg-gray-100 px-2 sm:px-6 py-[6rem] sm:py-[95px]">
        <div className="rounded-lg bg-white w-full h-[80vh] ">
          <div className=" pt-[5%] sm:pt-[7%] w-full sm:w-[600px] 2xl:w-[800px] overflow-hidden h-full">
            <div className="w-full h-fit max-h-[70vh] overflow-y-auto camera-scroll-style">
              <div className="px-2 pb-6 sm:px-3 sm:pb-8 justify-start flex flex-col space-y-3 sm:space-y-4">
                {inviteform.map((item) => item)}
                <button
                onClick={() => {
                    addMoreIV()
                }}
                className="ml-2 sm:ml-3 rounded-md w-fit text-white bg-[#01C38D] px-4 sm:px-8 2xl:py-3 sm:py-2">
                  Add More
                </button>
              </div>
            </div>

            <div className="flex justify-center sm:justify-end mt-3 w-full">
              <button className="w-[70%]  sm:w-[40%] py-2 2xl:py-3  sm:py-3 bg-[#132D46] text-white rounded-md">
                Invite Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientContainer>
  );
};

export default Invites;

import React, { useState } from "react";
import ClientContainer from "../../ClientContainer/clientContainer";
import PersonalCameraWidget from "../personalCameraWidget/personalCameraWidget";

const PersonalCamera = () => {
  const [resize, setresize] = useState(2);
  return (
    <ClientContainer>
      <div className="w-full text-[#132D46] 0 h-fit py-[4rem] space-y-4 sm:space-y-5 2xl:space-y-8 sm:py-24 2xl:py-[130px]">
        <div className="px-2 sm:px-6 text-lg font-semibold sm:text-2xl 2xl:text-3xl">
          Overview
        </div>
        <div className="hidden md:flex space-x-2 items-center w-full justify-end ">
          <div className="text-gray-500">View type:</div>

          {/**grid grid-cols-1 */}
          <div
            onClick={() => {
              setresize(1);
            }}
            className="flex items-center flex-col gap-[2px]"
          >
            <div
              className={`w-8 h-[11px]  ${
                resize === 1 ? "bg-[#01C38D]" : "bg-zinc-600 "
              } `}
            ></div>
            <div
              className={`w-8 h-[11px] ${
                resize === 1 ? "bg-[#01C38D]" : "bg-zinc-600 "
              } `}
            ></div>
          </div>
          {/**grid grid-cols-2 */}
          <div
            onClick={() => {
              setresize(2);
            }}
            className="flex flex-col items-center gap-[2px]"
          >
            <div className="flex gap-[2px]">
              <div
                className={`w-4 h-[11px]  ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
            <div className="flex gap-[2px]">
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
          </div>
          {/**grid grid-cols-3 */}
          <div
            onClick={() => {
              setresize(3);
            }}
            className="2xl:flex hidden flex-col  items-center gap-[2px]"
          >
            <div className="flex gap-[2px]">
              <div
                className={`w-2 h-[11px]  ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
            </div>

            <div className="flex gap-[2px]">
              <div
                className={`w-2 h-[11px] ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 3 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
          </div>
          {/**grid grid-cols-4 */}
          <div
            onClick={() => {
              setresize(4);
            }}
            className="2xl:flex hidden flex-col  items-center gap-[2px]"
          >
            <div className="flex gap-[2px]">
              <div
                className={`w-2 h-[11px]  ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px]  ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
            </div>

            <div className="flex gap-[2px]">
              <div
                className={`w-2 h-[11px] ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px]  ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 4 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
          </div>
          {/**6 */}
          <div
            onClick={() => {
              setresize(6);
            }}
            className="2xl:flex hidden flex-col  items-center gap-[2px]"
          >
            <div className="flex gap-[2px]">
              <div
                className={`w-2 h-[11px]  ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px]  ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
                   <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
                   <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
            </div>

            <div className="flex gap-[2px]">
            <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
                   <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
              <div
                className={`w-2 h-[11px]  ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-2 h-[11px] ${
                  resize === 6 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div
          className={`px-2 sm:px-6 grid grid-cols-1 sm:grid-cols-2  gap-5 w-full items-center  ${
            resize === 1 ? "md:grid-cols-1" : ""
          } ${resize === 2 ? "md:grid-cols-2" : ""}
          ${resize === 3 ? "2xl:grid-cols-3" : ""}
          ${resize === 4 ? "2xl:grid-cols-4" : ""}
          ${resize === 6 ? "2xl:grid-cols-6" : ""}
          `}
        >
          <PersonalCameraWidget resize={resize}/>
          <PersonalCameraWidget resize={resize} />
          <PersonalCameraWidget  resize={resize} />
          <PersonalCameraWidget resize={resize} />
        </div>
      </div>
    </ClientContainer>
  );
};

export default PersonalCamera;

import React,{useState} from "react";
import EventCameraWidget from "../../Event/eventcameras/eventcamerawidget/eventCameraWidget";
const ClientDetailEvent = () => {
    const [resize, setresize] = useState(2)
    return (
        <div className='w-full h-fit py-4 px-2 sm:px-6 '>
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
      
          {/**6 */}
          
        </div>

        <div className={`w-full py-8 items-center gap-5 grid grid-cols-1 sm:grid-cols-2  ${
            resize === 1 ? "md:grid-cols-1" : ""
          } ${resize === 2 ? "md:grid-cols-2" : ""}
          ${resize === 3 ? "2xl:grid-cols-3" : ""}
         `}>
        {[1,2,3,4,5,6,7,8,9].map((i,j) => {
            return (
                <EventCameraWidget
                key={j}
                resize={resize}
                />
            )
        })}
        

        </div>
            
        </div>


    )
}

export default ClientDetailEvent
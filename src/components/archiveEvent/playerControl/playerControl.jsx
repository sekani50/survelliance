import React,{useState} from "react";
import archive from "../../../assets/svg/archive.svg";
import share from "../../../assets/svg/share.svg";
import deletes from "../../../assets/svg/delete.svg";
import ShareModal from "../controlModals/shareModal";
const PlayerController = () => {
    const [isShare, setShare] = useState(false);
   
    function onClose() {
      setShare(!isShare);
    }
  return (
    <div className="bg-white py-3 px-3 rounded-b-xl absolute inset-x-0 bottom-0">
      <div className="flex justify-between items-center w-full">
        <div className="text-[#01C38D] font-semibold">
            <div>30:8MB</div>
            <div>09:07</div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 items-center">
          <div className="space-x-1 flex items-center">
          <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
              <img src={archive} alt="" className="w-full h-full "/>
            </div>
            <button className="text-[10px] 2xl:text-xl text-zinc-600">Download</button>
          </div>
          <div
          onClick={onClose}
          className="space-x-1 flex items-center">
           <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
              <img src={share} alt="" className="w-full h-full "/>
            </div>

            <button className="text-[10px] 2xl:text-xl text-zinc-600">Share Clip</button>
          </div>
          <div className="space-x-1 flex items-center">
            <div className="w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]">
              <img src={deletes} alt="" className="w-full h-full "/>
            </div>
            <button className="text-[10px] 2xl:text-xl text-zinc-600">Delete</button>
          </div>
        </div>
      </div>
      {isShare && <ShareModal onClose={onClose} header={'Share Clip'}/>}
    </div>
  );
};

export default PlayerController;

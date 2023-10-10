import React,{useState} from "react";
import close from "../../assets/svg/closes.svg";
import Input from "../Composable/input";
import UploadingImage from "../Report/uploadImage";
const AddOfficer = ({ onClose, header }) => {
  const [, setUploadedImage] = useState();

  return (
    <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 2xl:space-y-8 bg-white rounded-md px-2 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] shadow-ml overflow-y-auto"
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">
            {header}
          </h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="mt-3 2xl:mt-5 w-full sm:w-[700px] 2xl:space-y-8 space-y-5">

          <UploadingImage setUploadedImage={setUploadedImage}/>
          <Input
            label={"Officer Name"}
            placeholder={"John Doe"}
            type={"text"}
          />
          <Input
            label={"Email Address"}
            placeholder={"johndoe@gmail.com"}
            type={"email"}
          />
        
          <Input
            label={"Address"}
            placeholder={"Malvedis Layout"}
            type={"text"}
          />

        </div>

        <div className="w-full mt-7 items-center flex justify-center">
          <button className="text-white py-3 bg-[#132D46] w-[70%] rounded-md sm:w-[50%] font-medium text-sm sm:text-base 2xl:text-xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOfficer;

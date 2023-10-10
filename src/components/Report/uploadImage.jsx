import React, { useEffect, useState } from "react";
import { BsFillCloudFill } from "react-icons/bs";


const UploadingImage = ({ setUploadedImage }) => {
  const [upload, setUpload] = useState("");
  const [isEdit, setEdit] = useState(false);
  

  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      const files = e.target.files[0];
      const image = URL.createObjectURL(files);
      setUpload(image);
      setUploadedImage(files);
    
      //setEdit(true)
    }
  };
  useEffect(() => {
    if (upload) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }, [upload]);

  const editImage = () => {
    setUpload("");
    setUploadedImage(null);
  };

  return (
    <>
      <div className="flex justify-between mb-3 items-start w-full">
        <p className="font-semibold 2xl:text-2xl ">Add an Image, if any?</p>
        {isEdit && (
          <button
            onClick={editImage}
            className="text-white font-medium px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Edit
          </button>
        )}
      </div>

      <label
        htmlFor="upload"
        className="flex items-center overflow-hidden justify-center w-full h-[350px] rounded-lg border-dashed border border-[#01C38D]"
      >
        {!upload && (
          <div className="flex flex-col space-y-2 items-center justify-center w-fit h-fit">
            <BsFillCloudFill className="text-[#01C38D] text-[25px] sm:text-[30px] 2xl:text-[45px]" />

            <div className="text-[#132D46] font-light text-sm 2xl:text-xl">
              Click to upload an image
            </div>
            <div>PNG/JPG/JPEG</div>
          </div>
        )}
     
        {upload &&  (
          <img src={upload} alt="img" className="w-full h-full object-cover" />
        )}
        <input
          type="file"
          hidden
          id="upload"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => {
            handleUpload(e);
          }}
        />
      </label>
    </>
  );
};

export default UploadingImage;

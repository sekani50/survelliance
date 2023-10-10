import React,{useState} from "react";

const Phase2 = ({setactive}) => {
    const [selectCategory, setSelectCategory] = useState();

    const categories = ["I have a camera", "I need a camera"];
    const handleSelected =  (e, type) => {
            console.log(e.target.value, type)
            //setactive(2)
    }
    return (
        <div className="px-6 flex flex-col w-full justify-start 2xl:text-xl space-y-3">
        <div className="text-start">
          <div className="font-semibold 2xl:text-2xl text-lg text-[#132D46]">
            Do you have a camera?
          </div>
          <div className="text-gray-500 2xl:text-xl text-[12px] sm:text-sm">
            Let's work on the camera
          </div>
        </div>

        <div className="flex flex-col space-y-5 text-black font-semibold justify-start items-start">
            {categories.map((type, index) => {
              return (
                <label
                  onClick={() => {
                    setSelectCategory(index);
                  }}
                  key={index}
                  className="container"
                >
                  {type}
                  <input 
                  onChange={(e) => handleSelected(e, type)}
                  type="checkbox" checked={index === selectCategory} />
                  <span className="checkmark"></span>
                </label>
              );
            })}
          </div>
        </div>
    )
}

export default Phase2
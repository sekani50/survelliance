import React,{useState} from "react";
import Loader from "../../UI/Loader";
const Phase3 = ({setactive}) => {
    const [others, setOthers] = useState()
    const [loading, ] = useState(false)
    const [selectCategory, setSelectCategory] = useState();

    const categories = ["Ring", "Arlo", "Nest", "Simplisafe"];

    const handleSelected =  (e, type) => {
        console.log(e.target.value, type)
       // setactive(3)
}
    const handleSubmit = () => {

    }
    return (
        <div className="px-6 flex flex-col w-full 2xl:text-xl justify-start space-y-3">
        <div className="text-start">
          <div className="font-semibold text-lg 2xl:text-2xl text-[#132D46]">
            Which camera brand do you have?
          </div>
          <div className="text-gray-500 text-[12px] 2xl:text-xl sm:text-sm">
            Choose your brand
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
                  className="phase3-container"
                >
                  {type}
                  <input 
                  onChange={(e) => handleSelected(e, type)}
                  type="checkbox" checked={index === selectCategory} />
                  <span className="phase3-checkmark"></span>
                </label>
              );
            })}
          </div>

        <div className="form-group space-y-3 mt-5 mb-3 w-full">
            <label className="block font-medium " htmlFor="name">
              Others
            </label>
            <input
              className="block form__input input-field border 2xl:h-16  border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
              type="name"
              placeholder="Enter name or brand"
              name="name"
              value={others}
              onChange={(e) => {
                setOthers(e.target.value);
              }}
            />
          </div>
          <div className="h-fit items-center flex justify-center w-full">
        <button
          onClick={handleSubmit}
          className="w-[70%] 2xl:py-4 py-3 bg-[#132D46] mt-8 rounded-lg text-white flex justify-center items-center space-x-2"
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>



        </div>
    )
}

export default Phase3
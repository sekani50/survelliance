import React,{ useState} from "react";
import fb from "../../../assets/svg/fb.svg"
import apple from "../../../assets/svg/apple.svg"
import google from "../../../assets/svg/google.svg"
import Loader from "../../UI/Loader";
import { ReactCountries } from "../../../Utils/countrydropdown/countries";
const PhaseC = ({active, setActive}) => {
    const [country, setCountry] = useState('United State of America')
    const [loading] = useState(false)
    //const [countries, setCountries] = useState()


    console.log(country)


    const handleContinue = () => {
      setActive(3);
  
    };
    return (
        <div className={active === 2 ? "w-full relative let swipeIn px-6 sm:px-8 py-6 flex 2xl:h-[600px] h-[500px] flex-col justify-center items-center  sm:rounded-lg bg-white border shadow-xl": "hidden"}>
        
        <div className="absolute top-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
       <div className="w-full flex items-start mb-6 justify-start">
        <div className="text-2xl 2xl:text-4xl font-medium text-black">Get started with <span className="uppercase text-[#01C38D]">sentri</span></div>
          </div>

        <div className="mb-6 w-full flex items-center  space-x-6 justify-center">
        <div className="w-[30px] 2xl:h-[50px]  2xl:w-[50px] h-[30px] cursor-pointer">
              <img src={fb} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] 2xl:h-[50px]  2xl:w-[50px] cursor-pointer">
              <img src={google} alt="" className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] 2xl:h-[50px]  2xl:w-[50px] cursor-pointer">
              <img src={apple} alt="" className="w-full h-full" />
            </div>
        </div>
       </div>
       <div className="absolute  2xl:top-[10rem] top-[8rem] px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="form-group space-y-3 2xl:space-y-6 mb-3 w-full">
          <label className="block font-medium " htmlFor="country">
            Country
          </label>
          
         <ReactCountries setCountry={setCountry} />
       
          
        
        </div>
     
       </div>
       
        <div className="absolute bottom-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <button
          onClick={handleContinue}
          className="w-full  2xl:py-6 py-3 bg-[#132D46] mt-8 rounded-lg text-white flex justify-center items-center space-x-2"
        >
          {loading ? <Loader /> : "Continue"}
        </button>
        </div>
      </div>
    )
}

export default PhaseC
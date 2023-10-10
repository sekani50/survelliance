import React from "react";
import edit from "../../../assets/svg/edit.svg"

const InputText = ({header, type, value, setValue, placeholder}) => {
    return (
        <div className="relative form-group space-y-3 2xl:space-y-6 mb-3 2xl:mb-6 w-full">
        <label className="block font-semibold " htmlFor={type}>
          {header}
        </label>
        <input
          className="block form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full 2xl:h-16 h-11 px-4"
          type={type}
          placeholder={placeholder}
          name={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="cursor-pointer 2xl:w-[30px] 2xl:h-[30px] w-[24px] h-[24px] absolute 2xl:top-9 top-7 right-2">
        
          <img src={edit} alt="" className="w-full h-full "/>
        </div>
      </div>

    )
}

export default InputText;
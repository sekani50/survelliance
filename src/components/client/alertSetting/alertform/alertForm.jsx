import React from "react";
import InputText from "../../composable/inputText";
import { useState } from "react";
import deletes from "../../../../assets/svg/delete.svg";
const AlertForm = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  return (
    <div className="w-full space-x-2 flex items-center">
      <InputText
        header={"FullName"}
        type={"name"}
        value={name}
        setValue={setName}
        placeholder={"John Doe"}
      />
      <InputText
        header={"Phone Number"}
        type={"name"}
        value={phone}
        setValue={setPhone}
        placeholder={"(685) 456 322"}
      />
        <button className="w-fit flex justify-center items-center h-full">
        <div className="w-[22px] h-[22px] mt-4">
        <img className="w-full h-full" src={deletes} alt="" />
        </div>
        </button>
       
  
    </div>
  );
};

export default AlertForm;

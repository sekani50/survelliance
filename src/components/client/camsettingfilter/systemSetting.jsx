import React from "react";
import DropDown from "./resolutions/resolutions";

const SystemSetting = () => {
    return (
        <div className="w-full h-full">
               <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl my-2">Camera Time and Date</h2>
                <DropDown heading={'Camera Timezone'}/>
       
        </div>
    )
}

export default SystemSetting
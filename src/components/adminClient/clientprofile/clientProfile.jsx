import React from "react";
import Container from "../../container/container";

import ClientDetail from "../clientdetail/clientDetail";
import ClientCamera from "../clientcamera/clientCamera";

const ClientProfile = () => {
 
  return (
    <Container>
      <div className="w-full h-fit pb-[100px] 2xl:pt-[110px] space-y-3 pt-[83px]">
        <div className="text-[#132D46] text-lg 2xl:text-4xl font-semibold px-4">Jane's Doe</div>
        <div className="w-full h-full bg-white px-4 rounded-md py-4">
          <div className="grid grid-cols-1 md:grid-cols-10 w-full gap-y-10  md:gap-10 ">
           <ClientDetail/>
            <ClientCamera/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientProfile;
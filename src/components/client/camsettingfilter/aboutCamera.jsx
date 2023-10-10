import React from "react";

const AboutCamera = () => {
    return (
        <div className="w-full h-full">
            <h2 className="font-semibold text-base md:text-lg 2xl:text-2xl my-2">
        Camera Software
      </h2>
      <div className="w-full flex-col text-sm sm:text-base 2xl:text-xl justify-start">
        <div className="w-full justify-between items-center font-semibold flex">
            <p>Username</p>
            <p>Admin</p>

        </div>

      </div>

      <h2 className="font-semibold text-base md:text-lg  2xl:text-2xl mt-5 mb-2">
        Network Info
      </h2>
      <div className="w-full flex-col text-sm sm:text-base 2xl:text-xl justify-start">
        <div className="w-full justify-between  items-center font-semibold flex">
            <p>MAC address</p>
            <p>11:22:322</p>

        </div>
        <div className="w-full justify-between items-center font-semibold flex">
            <p>IP address</p>
            <p>11:444:333</p>

        </div>

      </div>
        </div>
    )
}

export default AboutCamera
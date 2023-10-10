import React from "react";

function Card({ title, subtitle, bgcolor, textcolor }) {
  return (
    <div>
      <div className={` bg-[${bgcolor}] py-6 text-center grid place-content-center`}>
        <h2 className={`text-2xl font-black  text-[${textcolor}]`}>{title}</h2>
        <p className={`text-[${textcolor}]`}>{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;

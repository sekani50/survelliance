import React from "react";
import { useState } from "react";

const InvitationForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    return (
        <div className="w-full">
               <div className="form-group space-y-3 mb-3 w-full">
          <label className="block font-semibold 2xl:text-xl" htmlFor="name">
            Fullname
          </label>
          <input
            className="block form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 p-3 sm:p-4"
            type="name"
            placeholder=""
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group space-y-3 mb-3 w-full">
          <label className="block font-semibold 2xl:text-xl" htmlFor="email">
            Email
          </label>
          <input
            className="block form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 p-3 sm:p-4"
            type="email"
            placeholder=""
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        </div>
    )
}

export default InvitationForm
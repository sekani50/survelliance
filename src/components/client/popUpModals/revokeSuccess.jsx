import React from 'react';

const RevokeSuccess = ({setrevokesuccess,revokesuccess}) => {
    return (
        <div
        onClick={(e) =>{
            e.stopPropagation()
           // setrevokesuccess(!revokesuccess)
           }}
        className='w-full inset-0 bg-[#000]/50 fixed h-full'>
                <div
                  onClick={(e) =>{
                    e.stopPropagation()
               
                   }}className='let swipeDown bg-white absolute w-[80%] py-6 h-[300px] flex flex-col items-center sm:w-[350px] sm:h-[350px] rounded-lg sm:py-10'>
               <div className='my-10'>
               <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  Invitation has been revoked
                </div>
                <div className="text-gray-400 text-[11px] sm:text-[13px]">
                  This user will never be in the list again
                </div>
               </div>

               <button 
               onClick={() =>{
                setrevokesuccess(!revokesuccess)
               }}
               className="justify-center bg-[#01C38D] px-1 sm:px-8 rounded-md w-fit flex space-x-2 items-center p-2  text-white">
            <span>Cancel</span>
          </button>
                </div>
        </div>
    )
}

export default RevokeSuccess
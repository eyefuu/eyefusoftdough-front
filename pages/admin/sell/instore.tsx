import React from 'react'
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


function instore() {
    return (
        <div className="flex">
        <div className="h-screen bg-white w-3/4">
            <p className='text-[#F2B461] font-medium m-4'>ทำรายการขาย</p>
            {/* <div className="flex justify-start"> */}
            <div className="flex justify-between">
                <form className="flex items-center w-full transform scale-75  ">
                    <div className="relative w-1/2 ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <MagnifyingGlassIcon className="h-6 w-6  text-[#C5B182]" />
                        </div>
                        <input type="text"
                            id="simple-search"
                            className="bg-[#FFFFF8] border border-[#C5B182] block w-full ps-10 p-2.5 rounded-full placeholder:text-[#C5B182] focus:outline-none"
                            placeholder="ค้นหา" required ></input>
                    </div>
                    <button type="submit" className="p-2 ms-2 text-sm  rounded-full text-white bg-[#C5B182] border  hover:bg-[#5E523C]">
                        ค้นหา
                    </button>
                </form>
                
            </div>
            
        </div >
        <div className="h-screen bg-white w-1/4 border-l border-[#C5B182]">
            
            </div >
        </div >
        
      
    )
}

export default instore
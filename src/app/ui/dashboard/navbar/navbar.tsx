import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='w-[100%] h-[80px] pl-[40px] pr-[40px] flex justify-between pt-[15px] items-center'>
        <div className='flex flex-col'>
          <h1 className='text-[19px] font-[700]'>Hello John!</h1>
          <p className='text-[15px] font-[400]'>Welcome to your dashboard</p>
        </div>
        
        <div className='flex items-center'>
          <div className='w-[26px] h-[30px] flex items-center relative'>
            <IoNotificationsOutline className='text-[23px]'/>
            <div className='w-[15px] h-[15px] rounded-full flex justify-center items-center bg-[#EDDFFF] absolute right-0 top-0'>
              <h3 className='text-[9px] text-[#5C00B2]'>4</h3>
            </div>
          </div>
          
          <div className='flex items-center ml-[26px]'>
            <h3 className='text-[15px] font-[700]'>Support</h3>
            <FiArrowUpRight className='text-[17px] ml-[10px]'/>
          </div>
          
          <button className='w-[130px] h-[40px] rounded-[12px] border border-[#5C00B2] ml-[26px] flex items-center pl-[12px] pr-[12px] justify-between'>
            <div className='flex items-center'>
              <img src="" alt="" className='w-[25px] h-[25px] rounded-full bg-[red]'/>
              <h3 className='text-[15px] text-[#5C00B2] ml-[5px] font-[600]'>John</h3>
            </div>
            <MdOutlineKeyboardArrowDown className='text-[#5C00B2]'/>
          </button>
        </div>
    </div>
  )
}

export default Navbar
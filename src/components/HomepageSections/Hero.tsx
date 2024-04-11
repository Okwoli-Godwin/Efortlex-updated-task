import React from 'react'
import Image from 'next/image'
import eclipse from "../../../public/Ellipses.png"
import grouped from "../../../public/Grouped.png"
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='w-[100%] flex justify-center items-center pt-[130px] sm:pt-[90px]'>
        <div className='w-[90%] flex flex-wrap justify-between sm:justify-center'>
            <div className='flex flex-col w-[50%] pt-[15px] relative md:w-[100%] sm:w-[100%]'>
                <h2 className='text-[40px] md:text-[30px] sm:text-[20px] w-[100%] text-primary font-[700] sm:text-center'>
                    Revolutionizing Your Business With Data-driven insights, Consultancy and Personnel Development.
                </h2>
                <p className="mt-[20px] text-[19px] sm:text-[17px] tracking-wide text-paragraph font-[500] w-[90%] text-justify sm:w-[100%]">
                    Full-service B2B research, consultancy and human development company that integrates data, technology and human development to aid private and public sector organisations in making better business decisions and achieving business growTh. 
                </p>
                <div className='mt-[25px] sm:w-[100%] sm:flex sm:justify-center'>
                    <button className='cursor-pointer w-[125px] h-[45px] bg-primary text-white rounded-[10px] text-[14px] font-[600] flex items-center justify-center'>
                    <label>Get in touch</label>
                    <div className='ml-[5px] mt-[2px]'><FaArrowRight /></div>
                </button>
                </div>
                <div className='absolute left-0 bottom-[70px]'>
                    <Image src={eclipse} alt='/' className='h-[220px] w-[220px]'/>
                </div>
            </div>
            <div className='w-[50%] flex justify-center md:mt-[20px] sm:mt-[35px] md:w-[100%] md:justify-center sm:justify-center'>
                <Image src={grouped} alt='/' height={500}/>
            </div>
        </div>
    </div>
  )
}

export default Hero
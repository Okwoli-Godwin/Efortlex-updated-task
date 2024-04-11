import React from 'react'
import Image from 'next/image'
import img from "../../../public/rsd.png"
import img2 from "../../../public/ptw.png"
import img3 from "../../../public/rc.png"

const CoreServices = () => {
  return (
    <div className='w-[100%] flex justify-center bg-white pt-[35px] pb-[35px]'>
        <div className='w-[90%] flex flex-col items-center'>
            <h3 className='text-[22px] font-[700] text-[#434141]'>OUR CORE SERVICES</h3>
            
            <div className='w-[100%] flex flex-wrap justify-between mt-[20px]'>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[50px]'>
                    <Image src={img} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>RESEARCH & DEVELOPMENT</h3>
                </div>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[50px]'>
                    <Image src={img2} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>PERSONNEL TRAINNING & WORKSHOP</h3>
                </div>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[50px]'>
                    <Image src={img3} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>RECRUITMENT CONSULTING</h3>
                </div>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[30px]'>
                    <Image src={img3} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>RECRUITMENT CONSULTING</h3>
                </div>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[30px]'>
                    <Image src={img3} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>RECRUITMENT CONSULTING</h3>
                </div>
                <div className='w-[360px] md:w-[320px] sm:w-[100%] h-[370px] rounded-tr-[15px] rounded-bl-[15px] relative flex justify-center items-center overflow-hidden mb-[30px]'>
                    <Image src={img3} alt='background image' className='w-full h-[100%] object-cover'/>
                    <h3 className='text-white font-[700] text-[27px] sm:text-[20px] text-center absolute'>RECRUITMENT CONSULTING</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoreServices
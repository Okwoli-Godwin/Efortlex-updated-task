import React from 'react'
import Image from 'next/image'
import img from "../../../public/aboutframe.png"

const Hero = () => {
    
  return (
    <div className='w-[100%] h-[95vh] sm:h-[80vh]'>
        <div className='w-full h-[100%] top-0 flex justify-center items-center relative'>
            <Image src={img} alt='background' className='w-full h-[100%] object-cover'/>
            <div className='w-[100%] h-[100%] flex-col bg-[rgba(0,0,0,0.5)] absolute z-10 flex justify-center items-center'>
                <h3 className='text-white text-[35px] text-center font-[700] w-[75%] md:w-[85%] sm:w-[90%] mt-[15px] md:text-[23px] sm:text-[20px] sm:mt-[25px]'>
                    A-Class Academic Consults Limited - a Consultancy, Research & Personnel Training Company
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Hero
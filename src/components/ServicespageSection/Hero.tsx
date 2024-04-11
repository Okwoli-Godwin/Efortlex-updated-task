import React from 'react'
import Image from 'next/image'
import img from '../../../public/servicehero.png'

const Hero = () => {
  return (
    <div className='w-[100%] h-[95vh] sm:h-[90vh]'>
        <div className='w-full h-[100%] top-0 flex justify-center items-center relative'>
            <Image src={img} alt='background' className='w-full h-[100%] object-cover'/>
            <div className='w-[100%] h-[100%] flex-col bg-[rgba(0,0,0,0.5)] absolute z-10 flex justify-center items-center'>
                <h3 className='text-white text-[35px] text-center font-[700] w-[75%] md:w-[85%] sm:w-[90%] mt-[15px] md:text-[23px] sm:text-[20px] sm:mt-[25px]'>
                    Elevate Your Potential, Ignite    Success: A-Class Academic Consults - Unleashing Excellence in Research, Strategy, and Training.
                </h3>
                <p className='text-white text-[18px] text-center font-[600] w-[75%] md:w-[85%] sm:w-[90%] mt-[20px] md:text-[16px] sm:text-[14px]'>
                    At A-Class Academic Consults, we redefine success by offering transformative services that empower both businesses and individuals. Dive into a realm of unparalleled industrial and marketing research, impactful project studies, strategic consulting, expert management, dynamic training, brand building, and results-driven online advertising. Discover the keys to unlocking your full potential and achieving unprecedented success. Your journey to excellence starts here."
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
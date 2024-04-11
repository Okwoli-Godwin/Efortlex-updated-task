import React from 'react'
import Image from 'next/image'
import img from "../../../public/earpiece.png"

const Hero = () => {
  return (
    <div className='w-[100%] h-[90vh] sm:h-[70vh]'>
        <div className='w-full h-[100%] top-0 flex justify-center items-center relative'>
            <Image src={img} alt='background' className='w-full h-[100%] object-cover'/>
            <h3 className='text-white z-10 absolute text-[30px] font-[700]'>GET IN TOUCH</h3>
        </div>
    </div>
  )
}

export default Hero
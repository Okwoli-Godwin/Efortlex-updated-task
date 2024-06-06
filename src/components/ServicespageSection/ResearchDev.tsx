import React from 'react'
import img from "../../../public/Rectangle 3854.png"
import Image from 'next/image'

const ResearchDev = () => {
  return (
    <div id='research' className='w-[100%] h-[450px] overflow-hidden mt-[50px] flex justify-center items-center relative'>
        <Image src={img} alt='' className='w-[100%] h-[100%] object-cover absolute'/>
        
        <h3 className='text-[#fff] text-[30px] font-[600] z-[100] sm:text-[20px]'>RESEARCH AND DEVELOPMENT</h3>
    </div>
  )
}

export default ResearchDev
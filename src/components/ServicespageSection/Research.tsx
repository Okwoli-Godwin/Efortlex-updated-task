import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3852.png"

const Research = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex justify-between flex-wrap'>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <h1 className='text-[27px] font-[700] text-[#0E2782]'>Research and Development</h1>
                    <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify mt-[30px]'>We support clients with detailed and applied research which offers in-depth insights into their operations, enhances their knowledge base and aids their strategic decision-making. Our team consists of professionals well-versed and passionate about research and the use of cutting-edge technologies to offer insights into business processes.</p>
                </div>
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[30px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
            </div>

    </div>
  )
}

export default Research
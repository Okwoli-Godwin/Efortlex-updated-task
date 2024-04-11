import React from 'react'
import Image from 'next/image'
import img from "../../../public/mission.png"

const Mission = () => {
    return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd]'>
        <section className='p-[25px] pt-[40px] h-full max-lg:p-12 max-md:p-8 max-lg:mx-5 rounded-xl bg-white w-[95%] flex flex-wrap md:flex-col-reverse sm:flex-col-reverse items-center pb-[35px] justify-between mb-[35px]'>
            <div className='md:w-[100%] sm:w-[100%] h-[390px] md:h-[450px] md:mt-[25px] sm:mt-[25px]'>
                  <Image src={img} alt='/' className='rounded-se-3xl rounded-bl-3xl object-cover w-full h-full'/>
            </div>
            
            <div className='w-[50%] md:w-[100%] sm:w-[100%] flex flex-col'>
                <h2 className='text-primary text-[30px] font-[700] md:w-[100%] sm:w-[100%] flex md:justify-center md:items-center sm:justify-center sm:items-center'>MISSION</h2>
                <p className='mt-[20px] md:text-justify sm:text-justify'>
                    Our mission is to innovate sustainable solutions and nurture the competencies of our client organisations in the private and public sectors to improve their business operations and achieve business success. 
                </p>
            </div>
        </section>
    </div>
  )
}

export default Mission
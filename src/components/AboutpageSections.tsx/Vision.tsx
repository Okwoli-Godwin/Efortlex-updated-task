import React from 'react'
import Image from 'next/image'
import img from "../../../public/teach.png"

const Vision = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd]'>
        <section className='p-[25px] pt-[40px] h-full max-lg:p-12 max-md:p-8 max-lg:mx-5 rounded-xl bg-[#dadaee] w-[90%] flex flex-wrap md:flex-col-reverse sm:flex-col-reverse items-center pb-[35px] justify-between mb-[35px]'>
            <div className='w-[470px] md:w-[100%] sm:w-[100%] h-[440px] md:h-[450px] md:mt-[25px] sm:mt-[25px]'>
                  <Image src={img} alt='/' className='rounded-se-3xl rounded-bl-3xl object-cover w-full h-full'/>
            </div>
            
            <div className='w-[55%] md:w-[100%] sm:w-[100%] flex flex-col'>
                <h2 className='text-primary text-[30px] font-[700] md:w-[100%] sm:w-[100%] flex md:justify-center md:items-center sm:justify-center sm:items-center'>Vision</h2>
                <p className='mt-[20px] md:text-justify text-[18px] sm:text-justify'>
                    Our vision is to become a renowned and reputable research and human development training hub across
                    Nigeria and beyond, improving the operations of our client organizations to achieve business success.
                </p>
            </div>
        </section>
    </div>
  )
}

export default Vision
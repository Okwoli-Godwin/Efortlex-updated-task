import React from 'react'
import Image from 'next/image'
import smilegirl from "../../../public/smilegirl.png"

const WhoWeAre = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center bg-[#f8f9fd] mt-[45px] pt-[70px] sm:pt-[35px] pb-[70px]'>
        <div className='w-[90%] flex rounded-[10px] bg-[#E8E7FD] sm:bg-transparent p-[35px] sm:p-0 justify-between flex-wrap md:flex-col-reverse sm:flex-col-reverse'>
            <div className='w-[35%] md:w-[100%] sm:w-[100%] h-[430px] sm:h-[450px] md:h-[510px] rounded-tl-[15px] rounded-bl-[15px]'>
                <Image src={smilegirl} alt='/' className='w-full h-[100%] object-cover'/>
            </div>
            <div className='w-[60%] md:w-[100%] sm:w-[100%] bg-red sm:bg-transparent rounded-tr-[15px] rounded-bl-[15px] flex flex-col pt-[35px] sm:pt-0 pb-[35px] md:pb-[20px] sm:pb-[20px] pl-[20px] pr-[20px] sm:pl-0 sm:pr-0'>
                <h2 className='text-[40px] sm:text-[25px] w-[100%] text-primary font-[700] sm:text-center sm:w-[100%] sm:flex sm:justify-center'>Who We Are...</h2>
                <p className='mt-[30px] text-[19px] sm:text-[17px] tracking-wide text-paragraph font-[500] w-[100%] text-justify sm:w-[100%]'>
                  A-Class Academic Consults Limited is a consultancy, research and personnel training company that integrates cutting-edge technology to deliver practical solutions to the challenges of organisations in the private and public sectors. Founded and registered in Nigeria and with working experiences supporting clients all over the world. A-Class Academic Consults Limited strives to offer innovative sustainable solutions and improve organisational competencies amongst organisations in the private and public sectors. To achieve this, we offer noteworthy research, personnel/human development training, and consultancy services.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre
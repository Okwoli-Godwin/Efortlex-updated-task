import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3859.png"

const HelpClients = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex flex-col items-center'>
                <h3 className='text-[28px] font-[700] text-[#000000]'>HOW WE HELP CLIENTS</h3>
                <div className='w-[100%] flex justify-between flex-wrap mt-[70px] md:mt-[30px] sm:mt-[15px]'>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <h3 className='text-[27px] sm:text-[23px] font-[700] text-[#0E2782]'>Infrastructure and cloud adoption</h3>
                    <p className='text-[#434141] mt-[25px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>Providing infrastructure for cloud adoption implies updating the application hosting, network, and end-user environments of many organisations to boost dexterity, and productivity while maximizing efficiency to reduce risk. In the modern world, business executives face challenges in their business infrastructure in terms of innovation, business needs and efficiency. At A-Class Academic Consults Limited, one of our core focuses is helping our clients transform their  IT Infrastructure through hosting modernization such as hybrid cloud and data centre co-location. We also provide talent and capability development, automation and process streamlining, and next-generation sourcing. </p>
                </div>
                
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[10px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
                </div>
            </div>

    </div>
  )
}

export default HelpClients
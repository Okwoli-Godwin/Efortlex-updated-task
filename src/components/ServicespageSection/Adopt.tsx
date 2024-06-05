import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3868.png"

const Adopt = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex flex-col items-center'>
                <div className='w-[100%] flex justify-between flex-wrap sm:flex-col-reverse mt-[70px] md:mt-[30px] sm:mt-[15px]'>
                    
                    <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[10px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                  </div>
                  
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[0px]'>
                    <div className='flex flex-col'>
                        <h3 className='text-[20px] sm:text-[18px] font-[700] text-[#000]'>Adopt agile methods and automation</h3>
                    <p className='text-[#434141] mt-[15px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>The business world is highly digitalized, with advanced technology that provides more features to clients. To make this possible, it is vital to streamline client organisations' complete delivery lifecycle and increase agility. Adopting agile principles and automation to their infrastructure will enable the upgrade of their ticket-driven model which is traditional to one dominated automated API. We help them automate the majority of workflows</p>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <h3 className='text-[20px] sm:text-[18px] font-[700] text-[#000]'>Increase IT resiliency</h3>
                    <p className='text-[#434141] mt-[15px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>we aid our clients in receiving value for their business. This value simply implies that they experience increased agility, productivity and access to sophisticated services from cloud service providers. We unlock our client's cloud’s full potential by driving end-to-end cloud transformations. We also provide our client organisations with a business-backed view of future state hosting models, designate a platform and architecture, implement an operating model, build cloud and security capabilities, coach and train internal resources, and ensure they are capturing the full value of the transformation.</p>
                    </div>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Adopt
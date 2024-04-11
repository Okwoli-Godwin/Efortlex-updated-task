import React from 'react'
import img from "../../../public/Vector.svg"
import img2 from "../../../public/vectorservice.svg"
import img3 from "../../../public/vectorbulb.svg"
import img4 from "../../../public/vectorlike.svg"
import img5 from "../../../public/vectorshake.svg"
import Image from 'next/image'

const Values = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#f8f9fd] flex justify-center pb-[70px] sm:pb-[30px]'>
        <div className='w-[90%] flex rounded-[10px] bg-[#E8E7FD] pt-[20px] flex-col items-center pl-[35px] pr-[35px] pb-[40px]'>
            <h2 className='text-[40px] md:text-[30px] sm:text-[25px] text-primary font-[700]'>
                OUR CORE VALUES
            </h2>
            <div className='w-[100%] flex flex-wrap mt-[20px] justify-center'>
                <div className='w-[45%] p-[20px] pt-[50px] pb-[50px] rounded-[10px] flex flex-col items-center bg-white mr-[100px] md:mr-[55px] sm:mr-0 sm:w-[100%] mb-[75px] sm:mb-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-[10px] bg-[#566599] flex justify-center items-center'>
                        <Image src={img} alt='/' className='h-[30px]'/>
                    </div>
                    <h4 className='text-[19px] font-[700] mt-[20px]'>People</h4>
                    <p className='mt-[20px] font-[600] text-center'>Our clients are the focus of our services. They are treated with respect, decency and dignity</p>
                </div>
                <div className='w-[45%] p-[20px] pt-[50px] pb-[50px]  rounded-[10px] flex flex-col items-center bg-white mb-[75px] sm:w-[100%] sm:mb-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-[10px] bg-[#566599] flex justify-center items-center'>
                          <Image src={img2} alt='/' className='h-[30px]'/>
                    </div>
                    <h4 className='text-[19px] font-[700] mt-[20px]'>Service Excelence</h4>
                    <p className='mt-[20px] font-[600] text-center'>We focus on delivering excellent customer service and meeting the quality requirements of our clients within an agreed timeline.</p>
                </div>
                <div className='w-[45%] p-[20px] pt-[50px] pb-[50px] rounded-[10px] items-center flex flex-col bg-white mr-[100px] md:mr-[55px] sm:mr-0 sm:w-[100%] mb-[75px] sm:mb-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-[10px] bg-[#566599] flex justify-center items-center'>
                        <Image src={img3} alt='/' className='h-[30px]'/>
                    </div>
                    <h4 className='text-[19px] font-[700] mt-[20px]'>Innovation</h4>
                    <p className='mt-[20px] font-[600] text-center'>We continuously seek to update knowledge and adapt to the evolving industry environment.</p>
                </div>
                <div className='w-[45%] p-[20px] pt-[50px] pb-[50px] rounded-[10px] items-center flex flex-col bg-white mb-[75px] sm:w-[100%] sm:mb-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-[10px] bg-[#566599] flex justify-center items-center'>
                        <Image src={img4} alt='/' className='h-[30px]'/>
                    </div>
                    <h4 className='text-[19px] font-[700] mt-[20px]'>Accountability</h4>
                    <p className='mt-[20px] font-[600] text-center'>We own every decision we make and their outcomes.</p>
                </div>
                <div className='w-[45%] p-[20px] pt-[50px] pb-[50px] rounded-[10px] items-center flex flex-col bg-white mb-[75px] sm:w-[100%] sm:mb-[40px]'>
                    <div className='w-[60px] h-[60px] rounded-[10px] bg-[#566599] flex justify-center items-center'>
                        <Image src={img5} alt='/' className='h-[30px]'/>
                    </div>
                    <h4 className='text-[19px] font-[700] mt-[20px]'>Collaboration</h4>
                    <p className='mt-[20px] font-[600] text-center'>We partner with experts and organisations with whom we share the same goals to achieve greater success and maximize support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values
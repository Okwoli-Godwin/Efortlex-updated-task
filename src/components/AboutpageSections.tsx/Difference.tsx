import React from 'react'
import TitleProp from './TitleProp'
import Image from 'next/image'
import img from "../../../public/chess.png"

const Difference = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[35px]'>
        <div className='w-[90%] bg-[#000000d0] mt-[25px]  opacity-80  drop-shadow-lg p-[25px] pl-[25px] pr-[25px] pt-[35px] h-full max-lg:p-12 max-md:p-8 rounded-xl'>
            <h2 className='capitalize text-white font-bold text-3xl sm:text-[28px]  text-center'>What makes us different...</h2>
            
            <div className='my-6 w-[62%] md:w-[100%] sm:w-[100%] md:text-justify sm:text-justify text-lg sm:text-[16px] max-lg:w-[80%] max-md:w-full max-lg:text-base'>
                <span className='text-white md:text-justify sm:text-justify'>
                    A-Class Academic Consults Limited functions solely on our core values which define who we are, what we do and what we stand for.  Our core values include;
                </span>
            </div>
            
            <div className='w-full mt-8 grid-cols-2 grid gap-5 max-lg:grid-cols-1 md:flex sm:flex md:flex-wrap sm:flex-wrap'>
                <div className='w-full flex flex-col gap-8'>
                    <TitleProp title='People' titleColor='text-[#C3863E]' description='Our clients are the focus of our services. They are treated with respect, decency and dignity.'/>
                    
                    <TitleProp title='Service Excellence' titleColor='text-[#0A6618]' description='We focus on delivering excellent customer service and meeting the quality requirements of our clients within an agreed timeline.'/>
                    
                    <TitleProp title='Innovation' titleColor='text-[#E82727]' description='We continuously seek to update knowledge and adapt to the evolving industry environment.'/>
                    
                    <TitleProp title='Accountability' titleColor='text-[#3E5BC3]' description='We continuously seek to update knowledge and adapt to the evolving industry environment.'/>
                    
                    <TitleProp title='Collaboration' titleColor='text-[#E82727]' description='We continuously seek to update knowledge and adapt to the evolving industry environment.'/>
                </div>
                
                <div className='w-full flex  items-center max-lg:-order-1'>
                      <Image src={img} alt='/' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Difference
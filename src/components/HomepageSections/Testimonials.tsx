import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd] pt-[20px] pb-[60px]'>
        <div className='w-[90%] flex flex-col items-center bg-[#E8E7FD] rounded-[10px] pt-[15px] pl-[20px] pr-[20px] pb-[30px]'>
            <h3 style={{fontFamily: "font-Playball"}} className='text-primary text-[28px]'>Testimonials</h3>
            <div className='flex items-center mt-[30px] w-[100%]'>
                <div className='w-[43%] p-[20px] bg-white rounded-[10px] flex flex-col mr-[30px]'>
                    <p className='font-italic'>Accept payment with your merchant ID, make bulk transactions with discounts and get access to our developer APIs wth Bingpay business</p>
                    <div className='flex items-center mt-[30px]'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[red]'>
                            
                        </div>
                        <p className='text-primary ml-[15px] text-[19px] font-[600]'>Ndukaegho Aminaho</p>
                    </div>
                </div>
                <div className='w-[43%] p-[20px] bg-white rounded-[10px] flex flex-col'>
                    <p className='font-italic'>Accept payment with your merchant ID, make bulk transactions with discounts and get access to our developer APIs wth Bingpay business</p>
                    <div className='flex items-center mt-[30px]'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[red]'>
                            
                        </div>
                        <p className='text-primary ml-[15px] text-[19px] font-[600]'>Ndukaegho Aminaho</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
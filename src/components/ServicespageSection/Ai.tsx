import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3855.png"

const Ai = () => {
  return (
    <div id='ai' className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex flex-col items-center'>
                <h3 className='text-[28px] font-[700] text-[#A85252]'>Artificial intelligence</h3>
                <div className='w-[100%] flex justify-between flex-wrap mt-[70px]'>
                    <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[10px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>A-Class Academic Consults Limited believes that the advancements and the pervasiveness of technology especially information technology are crucial to managing a business across the world. Technology has continuously transformed how organisations across various industries relate to themselves, how work is done and the future of various firms.</p>
                    <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>With this in mind, we are interested in providing sustainable solutions to the various challenges firms encounter in integrating technology into their work process. A major example is the application of Artificial Intelligence (AI) in business operations which is not only expanding but several firms have started reaping the benefits AI applications are driving. .</p>
                    <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>At  A-Class Academic Consults Limited, we apply Artificial Intelligence as a standalone technology for specialised use cases or embed it within business software systems to handle crucial business operations. Our team of experts are constantly working to develop AI-enabled tools and applications that solve business challenges and ensure that they are properly implemented.</p>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Ai
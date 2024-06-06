import React from 'react'
import img from "../../../public/Frame 1000001853.png"
import img2 from "../../../public/Group 1000001765.png"
import img3 from "../../../public/Vector (4).png"
import img4 from "../../../public/Vector (5).png"
import Image from 'next/image'

const Management = () => {
  return (
    <div id='project' className='w-[100%] flex flex-col items-center'>
        <div className='w-[100%] h-[350px] sm:h-[350px] overflow-hidden mt-[50px] flex justify-center items-center relative'>
            <Image src={img} alt='' className='w-[100%] h-[100%] object-cover absolute'/>
        
            <h3 className='text-[#fff] text-[30px] font-[600] z-[100] sm:text-[20px]'>PROJECT MANAGEMENT</h3>
        </div>
        
        <div className='w-[90%] flex flex-col  items-center mt-[25px]'>
            <p className='text-[#434141] text-[18px] sm:text-[15px]'>
                We use diverse tools, strategies, skills, knowledge, and experience to meet a project’s needs and achieve its desired outcome. Our project management is divided into three processes;
            </p>
        </div>
        
        <div className='flex mt-[50px] justify-between items-center flex-wrap w-[90%]'>
            <div className='w-[350px] h-[300px] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[50px] shadow-lg pb-[30px]'>
                    <Image src={img2} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>DATA</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        we gather adequate data on organisations, their competitors and the industry at large and integrate them with the project objectives to achieve project success.
                    </p>
             </div>
            <div className='w-[350px] h-[300px] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[50px] shadow-lg pb-[30px]'>
                    <Image src={img3} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>STRATEGY</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        our experts spend time actively brainstorming to develop sustainable ideas that will make the project process seamless.
                    </p>
             </div>
            <div className='w-[350px] h-[300px] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[50px] shadow-lg pb-[30px]'>
                    <Image src={img4} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>IMPLEMENTATION</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        The strategies are executed in line with the project objectives and the brand identity.
                    </p>
             </div>
        </div>
    </div>
  )
}

export default Management
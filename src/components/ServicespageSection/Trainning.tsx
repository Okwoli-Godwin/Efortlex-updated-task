import React from 'react'

const Trainning = () => {
  return (
    <div className='flex justify-center w-[100%] mt-[60px]'>
        <div className='w-[90%] flex flex-col'>
            <h1 className='text-[32px] sm:text-[25px] text-[#1B67C1] font-[700]'>
                Our training services cover three thematic areas:
            </h1>
            <div className='flex-col ml-[20px] mt-[20px]'>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Organizational Efficiency Programs:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             These courses are to facilitate organizational efficiency and improve business outcomes. These include courses such as team building, fundraising strategies, management skills, business planning etc.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Personal Development:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                            Courses in this area serve to improve the overall quality and performance of an employee. These courses include effective writing skills, communication and public speaking, leadership skills, conflict management and resolution etc
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Project-Based Training:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                            This area covers courses that improve the overall quality of an organisation’s project management and implementation. The courses include project management lifecycle, project impacts assessment, needs assessment, proposal writing, report writing etc. 
                        </p>
                    </li>
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Trainning
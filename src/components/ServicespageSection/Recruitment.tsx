import React from 'react'
import img from "../../../public/Rectangle 3864.png"
import img2 from "../../../public/Rectangle 3869.png"
import Image from 'next/image'

const Recruitment = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
        <div className='w-[100%] h-[550px] sm:h-[350px] overflow-hidden mt-[50px] flex justify-center items-center relative'>
            <Image src={img} alt='' className='w-[100%] h-[100%] object-cover absolute'/>
        
            <h3 className='text-[#fff] text-[30px] font-[600] z-[100] sm:text-[20px]'>RECRUITMENT CONSULTANCY</h3>
        </div>
        
        <div className='w-[90%] flex flex-col items-center mt-[25px]'>
            <p className='text-[#434141] text-[18px] sm:text-[15px]'>
                <span className='text-[35px] text-[#6E95C3]'>A</span><span className='text-[#6E95C3]'>-Class Academic Consults Limited</span> aids organisations in the private and public sectors to improve their operations, maximize efficiency and achieve business success by matching them with suitable staff on a permanent or temporary basis. Apart from understanding the staff requirements of companies, providing companies with new staff and designing appropriate recruitment strategies, we interact with job applicants from diverse backgrounds to understand their core competencies and match them to better jobs. Our recruitment experts also offer companies and job seekers advice on how to improve their recruitment process and career prospects.
            </p>
        </div>
        
        <div className='flex flex-col mt-[50px] items-center'>
            <h1 className='text-[25px] sm:text-[20px] text-[#4C80BC] underline font-[700]'>OUR CORE RESPONSIBILITIES</h1>

            <div className='w-[90%] flex flex-wrap justify-between mt-[20px]'>
                <div className='w-[60%] md:w-[100%] sm:w-[100%] flex flex-col ml-[20px]'>
                    <ul className='list-disc'>
                    <li>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             We utilize our networks, sales and marketing strategies to find companies and persuade them to externalize their recruiting process
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             We conduct ample research on our clients and the positions they seek to be filled to better understand what they do, their corporate culture, standards for new employees and other relevant information.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             We further establish positive working relationships with our clients and advertise client companies' vacancies on social media or online.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             We research job seekers' databases, review resumes and cover letters, conduct tests and interviews, shortlist job candidates, and negotiate salaries and remuneration, training, and career development as instructed by client companies.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             We Continuously review and improve client companies' recruitment policies to ensure a higher rate of proposed candidates that get hired by client companies
                        </p>
                    </li>
                </ul>
                </div>

                <div className='w-[35%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[30px] h-[430px]'>
                    <Image src={img2} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recruitment
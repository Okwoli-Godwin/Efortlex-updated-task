import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3870.png"

const Marketing = () => {
  return (
    <div className='w-[100%] flex items-center pb-[40px] pt-[35px] mt-[20px] sm:mt-[10px] flex-col'>
            
            <div className='w-[90%] flex justify-between flex-wrap'>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <h1 className='text-[27px] font-[700] text-[#4C80BC]'>MARKETING</h1>
                    <p className='text-[#434141] text-[18px] text-justify sm:text-[15px] md:text-justify sm:text-justify mt-[13px]'>A-Class Academic Consults Limited is ever present to help private and public sector organisations with top-notch marketing strategies guaranteed to improve brand visibility and increase product sales. We achieve this by simply integrating the insights obtained through applied research and developing an effective strategy. Our experts are well-versed in relevant marketing tools from web marketing, traditional marketing and digital marketing to understand how best to reach a target market for our clients. The result is telling our client’s stories in a captivating style so that they communicate with their audience about their product or service.</p>
                </div>
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[30px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
            </div>

            <div className='w-[90%] flex flex-col mt-[40px]'>
            <div className='flex-col ml-[20px] mt-[20px]'>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Marketing strategy:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             Our team of marketing experts are well-versed in developing apt marketing strategies for clients tailored to promote their brand to their target audience.  Our process for developing a fitted marketing strategy involves research, goal-setting, and positioning. We also define the brand objectives, target audience personas, marketing channels, and key performance indicators of our clients
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Marketing plans and objectives:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                            Following the developed marketing strategy, our marketing experts design suitable marketing that details the annual marketing efforts of our clients and develops appropriate goals and objectives to track the process.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Pricing:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             At the core, our expertise is helping our clients fix value to the services and goods they offer. Our team ensures that the pricing strategy reflects on client’s average prices, the buyer’s perceived value and the perceived value of competitors products.
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Branding:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             A-Class Academic Consults Limited derives fulfilment helping businesses create a distinct identity tailored to fit their target audience and the general population. Our branding process consists of helping brands choose their name and logo, design their visual identity, and craft their mission, values, and determine their tone of voice
                        </p>
                    </li>
                </ul>
                    <ul className='list-disc'>
                    <li>
                        <span className='text-[17px] font-[700]'>Sales:</span>
                        <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             At A-Class Academic Consults Limited we believe that businesses cant achieve success without sales or marketing. Sales and marketing are fundamental parts that drive business growth and revenue. Thats why our team of sales experts are equipped to close deals and generate revenue for our clients through direct interaction with their customers.
                        </p>
                    </li>
                </ul>
                </div>
        </div>

    </div>
  )
}

export default Marketing
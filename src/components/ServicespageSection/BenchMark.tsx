import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3860.png"

const BenchMark = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex flex-col items-center'>
                <div className='w-[100%] flex justify-between flex-wrap mt-[70px] md:mt-[30px] sm:mt-[15px]'>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[0px]'>
                    <div className='flex flex-col'>
                        <h3 className='text-[20px] sm:text-[18px] font-[700] text-[#000]'>Benchmark and uncover new opportunities</h3>
                    <p className='text-[#434141] mt-[15px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>Our tools are designed with a multidimensional approach to our clients infrastructure capacity to aid the identification of business opportunities in terms of quality, productivity, efficiency, cost, etc. We further help our clients prioritize and implement these opportunities based on client strategy and interdependence with other initiatives.</p>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <h3 className='text-[20px] sm:text-[18px] font-[700] text-[#000]'>Increase IT resiliency</h3>
                    <p className='text-[#434141] mt-[15px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>Accelerated changes in business operations often trigger negative aftereffects. These negative effects may include reduced IT resiliency and outages which may result in lost revenue, increased overhead costs, poor customer experience, and a decrease in change velocity. Our procedure is tailored to help clients improve their IT resiliency, boost their entire infrastructure environment to support agile technique adoption and increase their change velocity..</p>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <h3 className='text-[20px] sm:text-[18px] font-[700] text-[#000]'>Optimize cost</h3>
                    <p className='text-[#434141] mt-[15px] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>Organisations across the world are under more pressure than ever to control their operating costs. We offer our client organisations innovative products and services to enable them to optimize costs. Our zero-based approach prioritises our clients business model, sets benchmarks, designs solutions, identifies and cost reduction opportunities.</p>
                    </div>
                </div>
                
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[10px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
                </div>
            </div>

    </div>
  )
}

export default BenchMark
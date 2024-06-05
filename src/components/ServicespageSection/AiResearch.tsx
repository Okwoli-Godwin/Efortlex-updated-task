import React from 'react'
import Image from 'next/image'
import img from "../../../public/Union.png"

const AiResearch = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px] sm:mt-[10px]'>
            
            <div className='w-[90%] flex justify-between flex-wrap'>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <h1 className='text-[27px] font-[700] text-[#4C80BC]'>AI RESEARCH</h1>
                    <p className='text-[#434141] text-[18px] text-justify sm:text-[15px] md:text-justify sm:text-justify mt-[13px]'>Market research is pivotal to marketing. It offers businesses an opportunity to effectively and efficiently promote their products, services, and brand benefits. However, it is not possible without gaining a comprehensive understanding of the business target audience, competitors, and industry landscape. Market research helps organisations find the perfect customer, plan marketing strategies and campaigns and monitor competitors. To thrive and achieve marketing goals in a competitive business environment, A-Class Academic Consults Limited offers our client organisations a competitive edge with our AI market research service which automates many aspects of the data collection process and effortlessly manages vast amounts of data.</p>
                    <p className='text-[#434141] text-[18px] text-justify sm:text-[15px] md:text-justify sm:text-justify mt-[10px]'>Our team of experts use cutting-edge AI market research tools to analyze vast datasets which identify emerging trends and predict market shifts with a high degree of accuracy. An accurate prediction enables our clients to proactively adapt their marketing strategies, stay ahead of competitors, and capitalize on new opportunities as they arise. Furthermore, our research abilities uncover hidden patterns and correlations within data which aids in fine-tuning product development, targeting the right audience segments, and optimizing marketing campaigns for maximum effectiveness.</p>
                </div>
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[30px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
            </div>

    </div>
  )
}

export default AiResearch
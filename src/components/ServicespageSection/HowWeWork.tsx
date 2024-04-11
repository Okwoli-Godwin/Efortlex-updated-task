import React from 'react'

const HowWeWork = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd] pb-[40px] pt-[35px]'>
        <div className='w-[90%] flex flex-col'>
            <h1 className='text-[#434141] text-[26px] font-[700] md:w-[100%] sm:w-[100%] flex md:justify-center md:items-center sm:justify-center sm:items-center'>HOW WE WORK</h1>
            <p className='text-[#434141] mt-[20px] w-[60%] md:w-[100%] sm:w-[100%] md:text-justify sm:text-justify'>For over four years, organisations in the private and public sectors across Nigeria have relied heavily on A-Class Academic Consults Limited research services, business consulting and personnel/human development training to boost their performance index. Our Clients cut across several industries such as engineering firms, oil and gas companies, real estate, construction companies, health and social care organisations, retail, research agencies, government and non-governmental organisations etc. </p>
            
            <div className='w-[100%] flex flex-wrap justify-between mt-[45px] ml-[12px] sm:ml-0'>
                <div className='w-[45%] flex flex-col sm:w-[100%] sm:text-justify'>
                    <h3 className='text-[22px] sm:text-[18px] font-[700] text-[#F6AF03]'>Entry and Contracting</h3>
                    <p className='text-[#434141] mt-[15px]'>This highlights our initial contact with a client through a meeting, an email or a phone call. Here, we set up a first meeting to explore what the challenges are and the client’s expectations.</p>
                </div>
                <div className='w-[45%] flex flex-col sm:w-[100%] sm:text-justify sm:mt-[25px]'>
                    <h3 className='text-[22px] sm:text-[18px] font-[700] text-[#0A6618]'>Applied Research/Data Collection </h3>
                    <p className='text-[#434141] mt-[15px]'>We understand the importance of data-driven insights on businesses, therefore, we ensure that we accurately define the problem and use appropriate data collection and analysis techniques to make sense of the challenges</p>
                </div>
                <div className='w-[45%] flex flex-col mt-[50px] sm:w-[100%] sm:text-justify sm:mt-[25px]'>
                    <h3 className='text-[22px] sm:text-[18px] font-[700] text-[#A7284E]'>Feedback </h3>
                    <p className='text-[#434141] mt-[15px]'>Contact our client to report findings from the data collection phase. This feedback is reduced in a simpler way that is easily managed, understood and acted upon</p>
                </div>
                <div className='w-[45%] flex flex-col mt-[50px] sm:w-[100%] sm:text-justify sm:mt-[25px]'>
                    <h3 className='text-[22px] sm:text-[18px] font-[700] text-[#0E2782]'>Implementation </h3>
                    <p className='text-[#434141] mt-[15px]'>We implement our solutions in the best possible manner. Our experts are specifically trained to successfully deliver on any project as well as human development training and workshops.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWeWork
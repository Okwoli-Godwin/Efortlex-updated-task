import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3863.png"
import img2 from "../../../public/Frame 22.png"
import img4 from "../../../public/Frame 23.png"
import img7 from "../../../public/Frame 23 (1).png"
import img3 from "../../../public/Frame 22 (1).png"
import img5 from "../../../public/Frame 22 (2).png"
import img6 from "../../../public/Frame 22 (3).png"
import img8 from "../../../public/Frame 22 (4).png"
import img9 from "../../../public/Frame 22 (5).png"

const Machine = () => {
  return (
    <div className='w-[100%] flex justify-center pb-[40px] pt-[35px] mt-[20px]'>
            
            <div className='w-[90%] flex flex-col'>
                <div className='flex w-[100%] justify-between flex-wrap'>
                    <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <h1 className='text-[27px] font-[700] text-[#0E2782]'>Machine Learning</h1>
                    <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify mt-[15px]'>Modern organisations benefit heavily from machine learning, a set of software systems adept in the analysis of data to produce actionable insights based on the analysis to aid decision-making. At A-Class Academic Consults Limited, we aid our client organisations in implementing machine learning software systems to power the many services their customers encounter every day. Our machine-learning service implementation improves our client organisations in</p>
                    
                    <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify mt-[15px]'>The Following Ways</p>
                    
                    <div className='ml-[20px] flex flex-col'>
                        <ul className='list-disc mb-[12px] mt-[12px]'>
                        <li className='text-[16px] text-[#434141]'>
                            Efficiency. We improve organizational efficiency primarily through increased productivity or optimized processes.
                        </li>
                    </ul>
                        <ul className='list-disc mb-[12px] mt-[12px]'>
                        <li className='text-[16px] text-[#434141]'>
                            Effectiveness. We improve the quality of work done.
                        </li>
                    </ul>
                        <ul className='list-disc mb-[12px] mt-[12px]'>
                        <li className='text-[16px] text-[#434141]'>
                            Experience. We ensure that the Workers, customers and other stakeholders of our client organisations have an overall better interaction using machine learning.
                        </li>
                    </ul>
                        <ul className='list-disc mb-[12px] mt-[12px]'>
                        <li className='text-[16px] text-[#434141]'>
                            Evolution of the business itself: We aid a business in designing new products, services and market opportunities.
                        </li>
                    </ul>
                    
                    <p></p>
                    </div>
                </div>
                <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[30px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
                </div>
                

                <div className='flex flex-col w-[100%] mt-[20px]'>
                    <p className='text-[16px] text-[#434141]'>
                        We aid our clients apply machine learning in their business today in the following ways;
                    </p>
                    <div className='w-[100%] flex flex-wrap mt-[25px] justify-between'>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] mb-[45px] py-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img2} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Chatbot</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Chatbots help our client organisations revolutionize their customer service. It automates tasks that would otherwise be done by customer service agents. Chatbots handle tasks such as customer service inquiries, appointment setting etc.
                            </p>
                        </div>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] py-[30px] mb-[45px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img3} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Customer Management</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Integrating our customer management systems helps our clients take charge of their sales and marketing processes.
                            </p>
                        </div>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] py-[30px] mb-[45px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img4} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Dynamic pricing</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Our Machine learning service implementation helps our client firms to adjust their product/ service prices in near-real-time based on changing market conditions.
                            </p>
                        </div>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] py-[30px] mb-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img5} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Fraud detection</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Machine Learning is integrated into our client organisations infrastructure to alert their clients of potentially fraudulent use of their credit and debit cards.
                            </p>
                        </div>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] py-[30px] mb-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img6} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Optimization</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                We provide client organisations with algorithms to analyze data and run simulations to determine optimal or near-optimal solutions.
                            </p>
                        </div>
                        <div className='w-[350px] sm:w-[100%] md:w-[100%] py-[30px] mb-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img7} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Decision Support</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Our machine learning initiatives aid organisations to make better decisions.
                            </p>
                        </div>
                        <div className='w-[48%] sm:w-[100%] md:w-[100%] py-[30px] mb-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img8} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Monitoring and quality assurance</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                Our machine learning initiative further can understand and distinguish patterns in data at a scale, speed and level unmatched by humans. This enables the technology to be remarkably valuable for monitoring needs and quality assurance
                            </p>
                        </div>
                        <div className='w-[48%] sm:w-[100%] md:w-[100%] py-[30px] mb-[30px] px-[20px] bg-[#D9D9D9] flex flex-col items-center'>
                            <Image src={img9} alt='' height={70}/>
                            <h3 className='text-[20px] font-[700] text-[#434141] mt-[25px]'>Information extraction</h3>
                            <p className='text-center text-[16px] mt-[25px]'>
                                A-Class Consults Limited builds information retrieval and information extraction systems for clients using ML technologies such as NLP, optical character recognition and intelligent character recognition. This extraction system can identify key pieces of structured data from documents automatically even if the information is held in unstructured or semistructured formats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Machine
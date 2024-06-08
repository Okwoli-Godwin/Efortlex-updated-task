import React from 'react'
import Image from 'next/image'
import img from "../../../public/Rectangle 3862.png"

const Robotics = () => {
  return (
    <div className='w-[100%] flex justify-center mt-[40px]'>
        <div className='w-[90%] flex flex-col'>
            <h3 className='text-[24px] font-[700] text-[#566599]'>ROBOTICS</h3>
            
            <div className='w-[100%] flex justify-between flex-wrap mt-[15px]'>
                    <div className='w-[38%] md:w-[100%] sm:w-[100%] md:mt-[20px] sm:mt-[10px] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
                <div className='w-[58%] md:w-[100%] flex flex-col sm:w-[100%] md:mt-[20px] sm:mt-[20px]'>
                    <p className='text-[#434141] mb-[20px] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>The concept of Robotics in business is to use cutting-edge technology to automate repetitive business processes and tasks previously performed by humans. Integrating robotics in business improves business efficiency, accuracy, and productivity, reduces business costs and improves customer experience. At A-Class Academic Consults Limited, we provide robotics automation services to usher firms into the era of digital transformation and to transform the business operations of our client organisations. Our Robotic Process Automation (RPA) services help organisations reduce errors, increase their organisational efficiency, and enhance overall productivity. We further aid our clients in reducing business costs through streamlining and providing our clients with valuable insights and analytics, which allows them to make data-driven decisions and improve their operations. Our Robotics automation processes offer our clients the following;</p>
                </div>
            </div>
            
            <div className='flex w-[90%] flex-col mt-[25px] md:w-[90%] sm:w-[90%]'>
                <div className='flex flex-col ml-[20px]'>
                    <ul className='list-disc mb-[23px]'>
                    <li>
                        <span className='text-[17px] font-[700]'>A benchmark to enhance efficiency and productivity</span>
                        <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             Our team of experts enable businesses to significantly increase their efficiency and productivity in business operations. This is possible because repetitive business operations and time-consuming tasks are automated allowing employees to focus on more strategic and creative work. Our RPA services operate 24/7 enabling businesses to work round the clock without extra staff. The result is that our client organisations streamline their operations, reduce costs, and improve customer satisfaction through faster and more accurate services.
                        </p>
                    </li>
                </ul>
                <ul className='list-disc mb-[23px]'>
                    <li>
                        <span className='text-[17px] font-[700]'>Cost reduction</span>
                        <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             Implementing our process automation process means cost reduction. Our experts ensure that repetitive and time-consuming tasks are automated which in turn saves money on labor costs and increases efficiency. Our RPA process services are also integrated into the existing infrastructure of a business, this avoids the need for expensive infrastructure upgrades or software purchases
                        </p>
                    </li>
                </ul>
                <ul className='list-disc mb-[23px]'>
                    <li>
                        <span className='text-[17px] font-[700]'>Enhanced accuracy and quality of work</span>
                        <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             Our clients can count on us to improve the accuracy and quality of work. Our RPA service works around the clock, without breaks, and any errors. Our experts ensure that they are programmed to follow strict guidelines and protocols, ensuring that all tasks are completed accurately and consistently. The result is quality work bereft of errors leading to customer satisfaction and improved business outcomes
                        </p>
                    </li>
                </ul>
                <ul className='list-disc mb-[23px]'>
                    <li>
                        <span className='text-[17px] font-[700]'>Enhanced Customer Experience</span>
                        <p className='text-[#434141] text-[18px] sm:text-[15px] md:text-justify sm:text-justify'>
                             Our Robotic Process Automation (RPA) service is designed to revolutionize the way our client organisations interact with their customers. It is tailored to free up employees to focus on providing a better customer experience. Our RPA automates the process of responding to customer inquiries, allowing employees to spend more time addressing complex issues and providing personalized support. They are further used to analyze customer data and provide insights that can be used to improve products and services. The result is that our client organisations can enhance the customer experience and build stronger relationships with their customers.
                        </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Robotics
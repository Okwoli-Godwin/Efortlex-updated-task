import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import Image from 'next/image';
import img1 from "../../../public/circle1.png"
import img2 from "../../../public/circle2.png"

const Details = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd]'>
        <div className='w-[90%] flex flex-col items-center pt-[40px]'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[30px] text-primary font-[700]'>Contact Us</h1>
                <p className='text-[#717171] font-[600] sm:text-center'>Any question or remarks? Just write us a message!</p>
            </div>
            
            <div className='w-[100%] flex bg-white rounded-[10px] p-[15px] mt-[35px] mb-[35px] justify-between flex-wrap'>
                <div className='w-[40%] md:w-[100%] sm:w-[100%] flex flex-col rounded-[10px] p-[30px] bg-primary relative'>
                    <div className='flex flex-col'>
                        <h2 className='text-[23px] text-white font-[700]'>Contact Information</h2>
                        <p className='text-white font-[400] text-[15px]'>Any question or remarks? Just write us a message!</p>
                    </div>
                    
                    <div className='flex flex-col mt-[50px]'>
                        <div className='flex items-center'>
                            <div className='text-white text-[23px]'><BiSolidPhoneCall /></div>
                            <div className='flex flex-col ml-[15px]'>
                                <p className='text-white text-[14px]'>+44 7544 742493</p>
                                <p className='text-white text-[14px]'>+234 7061985823</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-[30px]'>
                            <div className='text-white text-[23px]'><MdEmail /></div>
                            <div className='flex flex-col ml-[15px]'>
                                <p className='text-white text-[14px]'>info@aclassconsults.com</p>
                            </div>
                        </div>
                        <div className='flex mt-[30px]'>
                            <div className='text-white text-[23px]'><MdLocationPin /></div>
                            <div className='flex flex-col ml-[15px]'>
                                <p className='text-white text-[14px]'>Achievers Villa, Opposite University of Port Harcourt Teaching Hospital Main Gate, Alakahia, Rivers State, Nigeria.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center mt-[120px]'>
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F6AF03] hover:bg-white hover:text-primary cursor-pointer text-white flex justify-center items-center text-[18px] mr-[20px]'>
                            <FaTwitter />
                        </div>
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F6AF03] hover:bg-white hover:text-primary cursor-pointer text-white flex justify-center items-center text-[18px] mr-[20px]'>
                            <FaInstagram />
                        </div>
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F6AF03] hover:bg-white text-white hover:text-primary cursor-pointer flex justify-center items-center text-[18px]'>
                            <FaDiscord  />
                        </div>
                    </div>
                    
                    <div className='absolute bottom-0 right-0'>
                          <Image src={img2} alt='circle image' />
                    </div>
                    <div className='absolute bottom-[60px] right-[80px]'>
                          <Image src={img1} alt='circle image' />
                    </div>
                </div>
                
                <div className='w-[55%] md:w-[100%] sm:w-[100%] flex flex-wrap pt-[30px] justify-between'>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>First Name</p>
                        <input type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>Last Name</p>
                        <input type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>Email</p>
                        <input type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>Phone Number</p>
                        <input type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>Location</p>
                        <input type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[700] text-primary'>Select Subject?</p>
                        <div className='flex items-center mt-[10px]'>
                            <div className='flex items-center'>
                                <input type="radio" />
                                <p className='font-[600] text-[15px] ml-[10px]'>General Inquiry</p>
                            </div>
                            <div className='flex items-center ml-[15px]'>
                                <input type="radio" />
                                <p className='font-[600] text-[15px] ml-[10px]'>General Inquiry</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <p className='font-[600]'>Message</p>
                        <input placeholder='Write your message' type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='w-[100%] flex justify-end'>
                        <button className='w-[130px] h-[45px] bg-primary text-white rounded-[5px] flex justify-center items-center text-[14px]'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
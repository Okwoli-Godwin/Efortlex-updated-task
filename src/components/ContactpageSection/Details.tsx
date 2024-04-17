"use client"

import React  from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaTwitter, FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import img1 from "../../../public/circle1.png"
import img2 from "../../../public/circle2.png"
import { useState, useEffect } from 'react';
import axios from "axios"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const Details = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [location, setLoaction] = useState<string>('')
    const [inquiry, setInquiry] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const schema = yup.object({
        firstName: yup.string().required('Field is required'),
        lastName: yup.string().required('Field is required'),
        email: yup.string().email().required('Field is required'),
        number: yup.string().min(11).max(11).required('Field is required'),
        location: yup.string().required('Field is required'),
        inquiry: yup.string().required('Field is required'),
        message: yup.string().required('Field is required'),
    })
        .required();
    
    type FormData = yup.InferType<typeof schema>;

    const { register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            number.trim() !== '' &&
            location.trim() !== '' &&
            inquiry.trim() !== '' &&
            message.trim() !== ''
        ) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [firstName, lastName, email, number, location, inquiry, message]);

    const Fetch = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            await schema.validate({
                firstName,
                lastName,
                email,
                number,
                location,
                inquiry,
                message
            });

            await axios.post('https://formserver-1.onrender.com/app/router/postmessage', {
                firstName,
                lastName,
                email,
                number,
                location,
                inquiry,
                message
            });

            toast.success('Your message has been sent successfully.');
            setIsButtonDisabled(true);

            reset();
        } catch (error) {
            toast.error('There was an error while submitting your message. Please try again later.');
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

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
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F6AF03] hover:bg-white text-white hover:text-primary cursor-pointer flex justify-center items-center text-[18px] mr-[20px]'>
                            <FaDiscord  />
                        </div>
                        <div className='w-[38px] h-[38px] rounded-full bg-[#F6AF03] hover:bg-white text-white hover:text-primary cursor-pointer flex justify-center items-center text-[18px]'>
                            <FaLinkedin  />
                        </div>
                    </div>
                    
                    <div className='absolute bottom-0 right-0'>
                          <Image src={img2} alt='circle image' />
                    </div>
                    <div className='absolute bottom-[60px] right-[80px]'>
                          <Image src={img1} alt='circle image' />
                    </div>
                </div>
                
                <form onSubmit={Fetch} className='w-[55%] md:w-[100%] sm:w-[100%] flex flex-wrap pt-[30px] justify-between'>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>First Name</p><span className='text-[red] ml-[5px]'>*</span></div>
                        <input {...register('firstName')} onChange={(e) => setFirstName(e.target.value)} type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>Last Name</p><span className='text-[red] ml-[5px]'>*</span></div>
                        <input {...register('lastName')}  onChange={(e) => setLastName(e.target.value)} type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>Email</p><span className='text-[red] ml-[5px]'>*</span></div>
                        <input {...register('email')}  onChange={(e) => setEmail(e.target.value)} type="email" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>Phone Number</p></div>
                        <input {...register('number')}  onChange={(e) => setNumber(e.target.value)} type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>Location</p></div>
                        <input {...register('location')}  onChange={(e) => setLoaction(e.target.value)} type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none'/>
                    </div>
                    <div className='flex flex-col w-[45%] sm:w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[700] text-primary'>Select Subject?</p><span className='text-[red] ml-[5px]'>*</span></div>
                        <div className='flex items-center mt-[10px]'>
                            <label className='flex items-center'>
                                <input 
                                    value="General Inquiry" 
                                    checked={inquiry === "General Inquiry"}
                                    onChange={(e) => setInquiry(e.target.value)} 
                                    type="checkbox" 
                                    />
                                <p className='font-[600] text-[15px] ml-[10px]'>General Inquiry</p>
                            </label>
                            <label className='flex items-center ml-[15px]'>
                                <input 
                                    value="Services Inquiry"
                                    checked={inquiry === "Services Inquiry"} 
                                    onChange={(e) => setInquiry(e.target.value)} type="checkbox" 
                                    />
                                <p className='font-[600] text-[15px] ml-[10px]'>Services Inquiry</p>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col w-[100%] md:mb-[40px] sm:mb-[40px]'>
                        <div className='flex items-center w-[100%]'><p className='font-[600]'>Message</p><span className='text-[red] ml-[5px]'>*</span></div>
                        <input {...register('message')}  onChange={(e) => setMessage(e.target.value)} placeholder='Write your message' type="text" className='w-[100%] border border-b-[#8D8D8D] border-t-0 border-l-0 border-r-0 outline-none mt-[10px]'/>
                    </div>
                    <div className='w-[100%] flex justify-end'>
                            <button type='submit' disabled={isButtonDisabled}  className={`w-[130px] h-[45px] rounded-[5px] flex justify-center items-center text-[14px] ${isButtonDisabled ? 'bg-[silver] text-gray-600 cursor-not-allowed' : 'bg-primary text-white cursor-pointer'}`}>
                                {loading ? <ClipLoader color="#ffffff" loading={loading} size={20} /> : 'Send Message'}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Details
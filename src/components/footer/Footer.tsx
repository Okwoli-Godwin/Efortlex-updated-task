import React from 'react'
import Image from 'next/image'
import img from "../../../public/removedwhite.png"
import Link from 'next/link'
import { RxHome } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebookSquare  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[100%] bg-white flex justify-center'>
      <div className='w-[90%] sm:w-[100%] flex bg-primary pt-[30px] pb-[40px] pl-[20px] pr-[20px] flex-col flex-wrap'>
        <div className='flex w-[100%] flex-wrap'>
          <div className='w-[300px] mr-[50px] flex flex-col items-center md:w-[100%] sm:w-[100%] md:mr-0 sm:mr-0'>
          <div className='w-[100%] flex justify-start items-start md:justify-center md:items-center sm:justify-center sm:items-center'>
            <Image src={img} alt='/' height={400} className='mt-[-115px] md:hidden sm:hidden'/>
            <Image src={img} alt='/' height={300} className='mt-[-115px] hidden md:flex'/>
            <Image src={img} alt='/' height={200} className='mt-[-115px] sm:mt-[-80px] hidden sm:flex'/>
          </div>
          <p className='text-white text-center mt-[-80px] md:mt-[-90px] sm:mt-[-70px]'>
            A-Class Consults is a consultancy, research and personnel training company that integrates cutting-edge technology to deliver practical solutions to the challenges of organizations in the private and public sectors. Founded and registered in Nigeria in 2019 and with working experiences all over Nigeria
          </p>
        </div>

        <div className='flex flex-col pt-[20px] items-center w-[250px] mr-[50px] md:w-[100%] md:mr-0 sm:w-[100%] sm:mr-0'>
          <h1 className='text-white text-[28px] font-[800]'>Quick Links</h1>
          <div className='flex flex-col mt-[20px]'>
            <Link href="/">
              <p className='text-white text-[18px] mb-[20px]'>Home</p>
            </Link>
            <Link href="/about">
              <p className='text-white text-[18px] mb-[20px]'>About</p>
            </Link>
            <Link href="/service">
              <p className='text-white text-[18px] mb-[20px]'>Services</p>
            </Link>
            <Link href="/blog">
              <p className='text-white text-[18px] mb-[20px]'>Blog</p>
            </Link>
            <Link href="/contact">
              <p className='text-white text-[18px] mb-[20px]'>Contact</p>
            </Link>
          </div>
        </div>

        <div className='flex-1 flex-col flex pt-[20px] sm:w-[100%] sm:flex sm:justify-center sm:items-center'>
          <h1 className='text-white text-[28px] font-[800]'>Contact Us</h1>
          <div className='flex flex-col mt-[20px] ml-[20px] sm:ml-0'>
            <div className='flex items-center mb-[25px]'>
              <div className='text-white text-[25px]'>
                <RxHome />
              </div>
              <p className='text-white ml-[12px]'>Achievers Villa, Opposite University of Port Harcourt Teaching Hospital Main Gate, Alakahia, Rivers State, Nigeria.</p>
            </div>
            <div className='flex items-center mb-[25px]'>
              <div className='text-white text-[25px]'>
                <MdOutlineEmail />
              </div>
              <p className='text-white ml-[12px]'>info@aclassconsults.com</p>
            </div>
            <div className='flex items-center mb-[25px]'>
              <div className='text-white text-[25px]'>
                <IoCallOutline />
              </div>
              <p className='text-white ml-[12px]'>+44 7544 742493, +234 7061985823</p>
            </div>
            <div className='flex items-center'>
              <div className='text-white text-[25px] flex items-center'>
                <div className='text-[32px] mr-[35px]'><FaTwitter /></div>
                <div className='text-[32px] mr-[35px]'><FaInstagram /></div>
                <div className='text-[32px]'><FaFacebookSquare  /></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className='h-[1px] bg-white w-[100%] md:mt-[20px] sm:mt-[40px]'></div>

        <div className='w-[100%] flex justify-center items-center mt-[15px]'>
          <p className='text-white sm:text-center'>Copyright ©2023 All rights reserved by: <span className='font-[700] ml-[5px]'>A-CLASS ACADEMIC CONSULT</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
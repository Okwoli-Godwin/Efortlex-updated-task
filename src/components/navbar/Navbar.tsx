"use client"

import React from 'react'
import Image from 'next/image'
import shuttle from "../../../public/Shuttle.png"
import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }

    const closeSidebar = () => {
        setShow(false);
    };

  return (
    <div className='w-[100%] h-[70px] flex items-center justify-center fixed bg-white z-30'>
        <div className='w-[90%] flex items-center h-[100%] justify-between'>
            <div className='w-[60px] h-[100%] flex items-center'>
                <Image src={shuttle} alt='/'/>
            </div>
            <div className='flex items-center sm:hidden'>
                <h4 className='ml-[40px] cursor-pointer'><Link href="/">Home</Link></h4>
                <h4 className='ml-[40px] cursor-pointer'><Link href="/about">About</Link></h4>
                <h4 className='ml-[40px] cursor-pointer'><Link href="/service">Services</Link></h4>
                <h4 className='ml-[40px] cursor-pointer'><Link href="/blog">Blog</Link></h4>
                <Link href="/contact">
                    <button className='w-[110px] h-[45px] flex justify-center items-center text-[14px] font-[600] border-[2px] border-border rounded-[10px] ml-[80px] cursor-pointer'>Contact Us</button>
                </Link>
            </div>
            <div onClick={Toggle} className='text-[23px] cursor-pointer hidden sm:flex'><FiMenu /></div>
        </div>

        <div className={`fixed z-30 top-[70px] right-0 w-[100%] h-[100vh] bg-rgba ${show ? "translate-x-0" : "translate-x-full"}`}>
            <div className={`w-[50%] flex flex-col p-[15px] h-full bg-white fixed duration-500 ease-out right-0 transition-transform transform ${show ? "translate-x-0" : "translate-x-full"}`}>
                <h4 className='mb-[30px] text-[15px] cursor-pointer'><Link href="/" onClick={closeSidebar}>Home</Link></h4>
                <h4 className='mb-[30px] text-[15px] cursor-pointer'><Link href="/about" onClick={closeSidebar}>About</Link></h4>
                <h4 className='mb-[30px] text-[15px] cursor-pointer'><Link href="/service" onClick={closeSidebar}>Services</Link></h4>
                <h4 className='mb-[30px] text-[15px] cursor-pointer'><Link href="/blog" onClick={closeSidebar}>Blog</Link></h4>
                <Link href="/contact" onClick={closeSidebar}>
                    <button className='w-[100%] h-[45px] flex justify-center items-center text-[13px] font-[600] border border-border rounded-[10px] cursor-pointer'>Contact Us</button>
                </Link>
            </div>
        </div> 

    </div>
  )
}

export default Navbar
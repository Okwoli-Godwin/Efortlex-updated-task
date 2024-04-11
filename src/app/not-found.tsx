import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='pb-[100px] h-[100vh] w-[100%] pt-[100px] flex justify-center'>
        <div className='w-[90%] h-[100%] flex justify-center items-center flex-col'>
            <h2 className='text-[100px] text-[#000] font-[800] md:text-[70px] sm:text-[60px]'>404</h2>
            <p className='text-[30px] text-[#000] mt-[-30px] md:text-[23px] md:mt[-20px] sm:text-[18px] sm:mt-[-10px]'>Oh! Page not found</p>
            <Link href="/">
                <button className='w-[140px] h-[45px] bg-primary text-white flex justify-center items-center rounded-[5px] mt-[40px]'>
                Go back home
            </button>
            </Link>
        </div>
    </div>
  )
}

export default notFound
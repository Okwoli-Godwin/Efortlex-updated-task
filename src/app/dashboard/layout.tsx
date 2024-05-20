import React from 'react'
import { PropsWithChildren } from "react";
import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';

const layout = ({children}: PropsWithChildren) => {
  return (
    // <div className="h-screen overflow-hidden">
    //   <Sidebar />

    //   <div className="grid grid-cols-10 h-[calc(100vh-70px)]">
    //     <Navbar />

    //     <div className="col-span-10 lg:col-span-8 h-full overflow-y-scroll bg-[rgba(250,_250,_250,_0.98)] lg:bg-white px-5 py-4 lg:px-16 lg:py-10 pb-20 lg:pb-10">
    //       {children}
    //     </div>
    //   </div>
      // </div>
      
      <div className='flex w-[100%]'>
        <div className='w-[18%] bg-black'>
            <Sidebar />
        </div>
        <div className='flex-1'>
            <Navbar />
            {children}
        </div>
      </div>
  )
}

export default layout
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import img from "../../../public/Ellipse 45.png"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Wallet from './wallet/wallet';
import Home from './dashboardhome/home';
import Message from "../dashboard/message/message"

const page = () => {

  const tableItems = [
        {
            name: "Dreamland Homes",
            date: "52 Amadi str, Port Harcourt",
            status: " 3 bedroom flat",
            price: "$35.000",
            stat: "Available"
        },
        {
            name: "Blissful Abodes",
            date: "25 Boudillon str, Lagos",
            status: "Mini flat",
            price: "$12.000",
            stat: "Rented"
        },
        {
            name: "Novo Urtan Homes",
            date: "Harold wilson Drive, Port Harcourt",
            status: "Duplex",
            price: "$20.000",
            stat: "Available"
        },
        {
            name: "Fairmount Homes",
            date: "Bode Thomas, Lagos",
            status: "2 bedroom flat",
            price: "$5.000",
            stat: "Rented"
        },
    ]

  return (
    // <div className='w-[100%] pl-[40px] pr-[40px] pb-[15px] mt-[40px] flex-col flex'>
    //   <div className='w-[100%] flex justify-between'>
    //     <div className='w-[60%] h-[280px] pt-[12px] pb-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
    //       <div className='w-[100%] flex flex-col pl-[15px]'>
    //         <h3 className='font-[700] text-[17px]'>Property Overview</h3>
    //         <p className='text-[14px]'>Overview of all properties</p>
    //       </div>
    //       <div className='w-[100%] h-[1px] bg-[#e9e8e8] mt-[20px]'></div>

    //       <div className='flex flex-col w-[100%] pt-[15px] pl-[15px] pr-[15px]'>
    //         <div className='w-[100%] flex items-center pb-[15px]'>
    //           <h4 className='text-[14px] font-[600]'>Total Properties</h4>
    //         </div>
    //         <div className='w-[100%] flex items-center pb-[15px]'>
    //           <h4 className='text-[14px] font-[600]'>Vacant Properties</h4>
    //         </div>
    //         <div className='w-[100%] flex items-center pb-[15px]'>
    //           <h4 className='text-[14px] font-[600]'>Occupied Properties</h4>
    //         </div>
    //         <div className='w-[100%] flex items-center pb-[15px]'>
    //           <h4 className='text-[14px] font-[600]'>No. of Tenants</h4>
    //         </div>
    //       </div>
    //     </div>

    //     <div className='w-[37%] pt-[12px] pb-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
    //       <div className='w-[100%] pl-[15px] pr-[15px] flex items-center justify-between'>
    //         <h4 className='text-[14px] font-[600]'>Upcoming payments</h4>
    //         <IoIosArrowForward className=''/>
    //       </div>
    //       <div className='w-[100%] h-[1px] bg-[#e9e8e8] mt-[15px]'></div>

    //       <div className='w-[100%] flex flex-col mt-[15px] pl-[15px] pr-[15px]'>
    //         <div className='w-[100%] flex items-center justify-between pb-[15px]'>
    //           <div className='flex items-center'>
    //             <div className='w-[33px] h-[33px] rounded-[100%]'>
    //               <Image src={img} alt='' />
    //             </div>
    //             <div className='flex flex-col ml-[12px]'>
    //               <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
    //               <p className='text-[12px] font-[400]'>$ 150.000.00</p>
    //             </div>
    //           </div>

    //           <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
    //             <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
    //           </div>
    //         </div>
    //         <div className='w-[100%] flex items-center justify-between pb-[15px]'>
    //           <div className='flex items-center'>
    //             <div className='w-[33px] h-[33px] rounded-[100%]'>
    //               <Image src={img} alt='' />
    //             </div>
    //             <div className='flex flex-col ml-[12px]'>
    //               <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
    //               <p className='text-[12px] font-[400]'>$ 150.000.00</p>
    //             </div>
    //           </div>

    //           <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
    //             <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
    //           </div>
    //         </div>
    //         <div className='w-[100%] flex items-center justify-between pb-[15px]'>
    //           <div className='flex items-center'>
    //             <div className='w-[33px] h-[33px] rounded-[100%]'>
    //               <Image src={img} alt='' />
    //             </div>
    //             <div className='flex flex-col ml-[12px]'>
    //               <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
    //               <p className='text-[12px] font-[400]'>$ 150.000.00</p>
    //             </div>
    //           </div>

    //           <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
    //             <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
    //           </div>
    //         </div>
    //         <div className='w-[100%] flex items-center justify-between pb-[15px]'>
    //           <div className='flex items-center'>
    //             <div className='w-[33px] h-[33px] rounded-[100%]'>
    //               <Image src={img} alt='' />
    //             </div>
    //             <div className='flex flex-col ml-[12px]'>
    //               <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
    //               <p className='text-[12px] font-[400]'>$ 150.000.00</p>
    //             </div>
    //           </div>

    //           <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
    //             <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
    //           </div>
    //         </div>
    //         <div className='w-[100%] flex items-center justify-between'>
    //           <div className='flex items-center'>
    //             <div className='w-[33px] h-[33px] rounded-[100%]'>
    //               <Image src={img} alt='' />
    //             </div>
    //             <div className='flex flex-col ml-[12px]'>
    //               <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
    //               <p className='text-[12px] font-[400]'>$ 150.000.00</p>
    //             </div>
    //           </div>

    //           <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
    //             <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='w-[100%] flex flex-col'>
    //     <h3 className='text-[16px] font-[700]'>My Properties</h3>

    //      <div className="w-[100%] max-w-screen-xl mx-auto md:px-8 mt-[-25px]">
    //         <div className="mt-12 relative h-max overflow-auto">
    //             <table className="w-full table-auto text-sm text-left">
    //                 <thead className="text-gray-600 font-medium border-b">
    //                     <tr>
    //                         <th className="py-3 pr-6 text-[12px]">PROPERTY NAME</th>
    //                         <th className="py-3 pr-6 text-[12px]">APARTMENT LOCATION</th>
    //                         <th className="py-3 pr-6 text-[12px]">APARTMENT TYPE</th>
    //                         <th className="py-3 pr-6 text-[12px]">RENT AMOUNT</th>
    //                         <th className="py-3 pr-6 text-[12px]">STATUS</th>
    //                         <th className="py-3 pr-6 text-[12px]">TENENTS</th>
    //                         <th className="py-3 pr-6 text-[12px]"></th>
    //                     </tr>
    //                 </thead>
    //                 <tbody className="text-gray-600 divide-y">
    //                     {
    //                         tableItems.map((item, idx) => (
    //                             <tr key={idx}>
    //                                 <td className="pr-6 py-4 whitespace-nowrap font-[600]">{item.name}</td>
    //                                 <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
    //                                 <td className="pr-6 py-4 whitespace-nowrap">
    //                                     <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs ${item.status == "Active" ? "text-[#5C00B2] bg-[#EDDFFF]" : "text-[#5C00B2] bg-[#EDDFFF]"}`}>
    //                                         {item.status}
    //                                     </span>
    //                                 </td>
    //                                 <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
    //                                 <td className="pr-6 py-4 whitespace-nowrap">
    //                                     <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs ${item.stat == "Available" ? "text-[#027A48] bg-[#ECFDF3]" : "text-[#B42318] bg-[#FFF5F4]"}`}>
    //                                         {item.stat}
    //                                     </span>
    //                             </td>
    //                             <td className="pr-6 py-4 whitespace-nowrap">
    //                               <div className='flex items-center'>
    //                                 <div className='w-[20px] h-[20px] rounded-[100%]'>
    //                                   <Image src={img} alt='' />
    //                                 </div>
    //                                 <div className='w-[20px] h-[20px] rounded-[100%] ml-[-5px]'>
    //                                   <Image src={img} alt='' />
    //                                 </div>
    //                               </div>
    //                             </td>
    //                                 <td className="text-right whitespace-nowrap">
    //                                     <a href="javascript:void()" className="py-1.5 px-3 ">
    //                                         <HiOutlineDotsHorizontal className='text-[18px]'/>
    //                                     </a>
    //                                 </td>
    //                             </tr>
    //                         ))
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    //   </div>
    // </div>

    // <Wallet />
    // <Home />
    <Message />
  )
}

export default page
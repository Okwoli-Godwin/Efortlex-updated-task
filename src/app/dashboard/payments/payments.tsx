'use client'

import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis } from 'recharts';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import img from "../../../public/Ellipse 45.png"
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import img2 from "../../../public/cuate.png"

const page = () => {
  const tableItems = [
        {
            name: "04-08-2023",
            date: "Dreamland homes",
            status: "Lordson Ajatiton",
            price: "N80,000",
        },
        {
            name: "04-06-2023",
            date: "Gulf Estate",
            status: "Sabastine Kalu",
            price: "N280.000",
        },
        {
            name: "04-05-2023",
            date: "New Heaven",
            status: "Jenifer Ibe",
            price: "N2,680.000",
        },
        {
            name: "04-05-2023",
            date: "New Heaven",
            status: "Jenifer Ibe",
            price: "N2,680.000",
        },
  ]
  const data = [
    { name: 'Jan', x: 170, y: 12, z: 0 },

        { name: 'Feb', x: 210, y: 15, z: 0 },

        { name: 'Mar', x: 230, y: 30, z: 10 },

        { name: 'Apr', x: 200, y: 40, z: 10 },

        { name: 'May', x: 95, y: 45, z: 10 },

        { name: 'Jun', x: 190, y: 25, z: 10 },

        { name: 'Jul', x: 175, y: 17, z: 10 },
        { name: 'Aug', x: 120, y: 17, z: 10 },
        { name: 'Sep', x: 37, y: 17, z: 10 },
        { name: 'Oct', x: 190, y: 17, z: 10 },
        { name: 'Nov', x: 220, y: 17, z: 10 },
        { name: 'Dec', x: 235, y: 17, z: 10 },
  ]
  return (
    <div className='w-[100%] pl-[40px] pr-[40px] pb-[15px] mt-[40px] flex-col flex'>
      <div className='w-[100%] flex justify-between'>
        <div className='w-[68%] h-[300px] pt-[12px] pb-[12px] pl-[12px] pr-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
          <div className='w-[100%] flex justify-between mb-[20px]'>
            <div className='flex items-center'>
              <p className='text-[14px] text-[#8F8F8F]'>Total Inflow:</p>
              <h3 className='text-[14px] font-[600] ml-[5px]'>N500,000.000</h3>
            </div>

            <button className='w-[110px] h-[40px] rounded-[5px] flex justify-center items-center border border-[#DCDCDC]'>
              <p className='text-[14px] text-[#8F8F8F]'>Monthly</p>
              <IoIosArrowDown className='ml-[10px]'/>
            </button>
          </div>

          <div className='w-[100%] h-[100%] flex justify-start'>
            <ResponsiveContainer width="100%" height="100%" className="ml-[-30px]">
              <BarChart width={380} height={190} data={data}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5C00B2" />
                    <stop offset="100%" stopColor="#CF5FDB" />
                  </linearGradient>
                </defs>

              <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
              <YAxis ticks={[0, 100, 200, 300]} tick={{ fontSize: 12 }}/>
   
                <Bar dataKey="x" stackId="a" fill='url(#colorGradient)' barSize={23} radius={[5, 5, 5, 5]}/>
              </BarChart>
          </ResponsiveContainer>
          </div>

        </div>

        <div className='w-[30%] pt-[12px] pb-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
          <div className='w-[100%] pl-[15px] pr-[15px] flex items-center justify-between'>
            <h4 className='text-[14px] font-[600]'>Upcoming payments</h4>
            <IoIosArrowForward className=''/>
          </div>
          <div className='w-[100%] h-[1px] bg-[#e9e8e8] mt-[15px]'></div>

          <div className='w-[100%] flex flex-col mt-[15px] pl-[15px] pr-[15px]'>
            <div className='w-[100%] flex items-center justify-between pb-[15px]'>
              <div className='flex items-center'>
                <div className='w-[33px] h-[33px] rounded-[100%]'>
                  <Image src={img} alt='' />
                </div>
                <div className='flex flex-col ml-[12px]'>
                  <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
                  <p className='text-[12px] font-[400]'>$ 150.000.00</p>
                </div>
              </div>

              <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
                <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
              </div>
            </div>
            <div className='w-[100%] flex items-center justify-between pb-[15px]'>
              <div className='flex items-center'>
                <div className='w-[33px] h-[33px] rounded-[100%]'>
                  <Image src={img} alt='' />
                </div>
                <div className='flex flex-col ml-[12px]'>
                  <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
                  <p className='text-[12px] font-[400]'>$ 150.000.00</p>
                </div>
              </div>

              <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
                <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
              </div>
            </div>
            <div className='w-[100%] flex items-center justify-between pb-[15px]'>
              <div className='flex items-center'>
                <div className='w-[33px] h-[33px] rounded-[100%]'>
                  <Image src={img} alt='' />
                </div>
                <div className='flex flex-col ml-[12px]'>
                  <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
                  <p className='text-[12px] font-[400]'>$ 150.000.00</p>
                </div>
              </div>

              <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
                <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
              </div>
            </div>
            <div className='w-[100%] flex items-center justify-between pb-[15px]'>
              <div className='flex items-center'>
                <div className='w-[33px] h-[33px] rounded-[100%]'>
                  <Image src={img} alt='' />
                </div>
                <div className='flex flex-col ml-[12px]'>
                  <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
                  <p className='text-[12px] font-[400]'>$ 150.000.00</p>
                </div>
              </div>

              <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
                <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
              </div>
            </div>
            <div className='w-[100%] flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[33px] h-[33px] rounded-[100%]'>
                  <Image src={img} alt='' />
                </div>
                <div className='flex flex-col ml-[12px]'>
                  <p className='text-[13px] font-[500]'>Pee Sarhmy</p>
                  <p className='text-[12px] font-[400]'>$ 150.000.00</p>
                </div>
              </div>

              <div className='w-[90px] h-[35px] rounded-[8px] flex justify-center items-center bg-[#FFEFEE]'>
                <p className='text-[11px] font-[600] text-[#FF0000]'>Overdue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[100%] mt-[30px]'>
        <h3 className='text-[16px] font-[600]'>Recent Transactions</h3>

        <div className='w-[100%] flex justify-between items-center'>
          <div className='w-[65%] flex flex-col'>
            <div className='w-[100%] flex flex-col mt-[13px]'>
            <div className='w-[100%] flex items-center'>
              <div className='w-[250px] flex h-[35px] border border-[#8F8F8F] rounded-[7px] pr-[10px] pt-[5px] pb-[5px]'>
                <div className='w-[40px] flex justify-center items-center h-[100%] text-[17px] border-r border-[#8F8F8F]'>
                  <FiSearch />
                </div>
                <input placeholder='Search by name....' type="text" className='flex-1 h-[100%] outline-none pl-[7px]'/>
              </div>

              <div className='h-[20px] w-[1px] bg-[#8F8F8F] ml-[45px]'></div>

              <div className='flex items-center ml-[20px]'>
                <MdFilterList className='text-[19px]' />
                <h3 className='ml-[10px] text-[14px]'>Filter by</h3>
              </div>

              <div className='w-[80px] h-[35px] border border-[#8F8F8F] rounded-[7px] flex justify-center items-center ml-[20px]'>
                <h4 className='text-[14px]'>Dates</h4>
                <IoIosArrowDown className='ml-[5px] text-[17px]'/>
              </div>
              <div className='w-[80px] h-[35px] border border-[#8F8F8F] rounded-[7px] flex justify-center items-center ml-[20px]'>
                <h4 className='text-[14px]'>Status</h4>
                <IoIosArrowDown className='ml-[5px] text-[17px]'/>
              </div>
            </div>
            
            <div className="w-[100%] flex items-center mt-[10px]">
          <div className='pl-[10px] pr-[10px] pt-[3px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
            <h3 className='text-[12px]'>All</h3>
            <RiCloseFill className='ml-[3px]'/>
          </div>
          <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
            <h3 className='text-[12px]'>ISO 27001</h3>
            <RiCloseFill className='ml-[3px]'/>
          </div>
          <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
            <h3 className='text-[12px]'>Draft</h3>
            <RiCloseFill className='ml-[3px]'/>
          </div>
          <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] rounded-[3px]'>
            <h3 className='text-[12px]'>Clear</h3>
            <RiCloseFill className='ml-[3px]'/>
          </div>
            </div>
            </div>

            <div className='w-[100%] flex flex-col mt-[3px]'>

         <div className="w-[100%] max-w-screen-xl mx-auto md:px-8 mt-[-25px]">
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6 text-[12px]">DATE PAID</th>
                            <th className="py-3 pr-6 text-[12px]">APARTMENT NAME</th>
                            <th className="py-3 pr-6 text-[12px]">TENANT NAME</th>
                            <th className="py-3 pr-6 text-[12px]">RENT AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap font-[600]">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.status}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
          </div>

          <div className='w-[33%]'>
            <Image src={img2} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
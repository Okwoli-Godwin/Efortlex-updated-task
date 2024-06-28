'use client'

import React from 'react'
import Image from 'next/image'
import img from "../../../../public/Ellipse 982.png"
import img2 from "../../../../public/Vector (6).png"
import img3 from "../../../../public/Vector (7).png"
import img4 from "../../../../public/Vector (8).png"
import img5 from "../../../../public/Rectangle 9.png"
import Piechart from '../wallet/piechart'
import { IoIosArrowForward } from "react-icons/io";
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis } from 'recharts';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {

    const data = [
    { name: 'Jan', x: 170, y: 12, z: 0 },

        { name: 'Feb', x: 210, y: 15, z: 0 },

        { name: 'Mar', x: 230, y: 30, z: 10 },

        { name: 'Apr', x: 200, y: 40, z: 10 },

        { name: 'May', x: 95, y: 45, z: 10 },

        { name: 'Jun', x: 190, y: 25, z: 10 },

        { name: 'Jul', x: 175, y: 17, z: 10 },
        // { name: 'Aug', x: 120, y: 17, z: 10 },
        // { name: 'Sep', x: 37, y: 17, z: 10 },
        // { name: 'Oct', x: 190, y: 17, z: 10 },
        // { name: 'Nov', x: 220, y: 17, z: 10 },
        // { name: 'Dec', x: 235, y: 17, z: 10 },
  ]

  return (
    <div className='w-[100%] flex items-center flex-col mt-[20px] pl-[40px] pr-[40px]'>
        <div className='w-[100%] flex justify-between'>
            <div className='w-[40%] flex flex-col'>
                <div className='w-[100%] justify-between h-[120px] bg-[#3AB272] rounded-[12px] flex py-[20px] px-[15px]'>
                    <div className='flex flex-col'>
                        <h2 className='text-[#fff] text-[15px]font-[400]'>
                            Total Properties
                        </h2>
                        <div className='flex mt-[15px] items-center'>
                            <h3 className='text-[#fff] font-[700] text-[30px]'>750</h3>
                            <div className='ml-[15px] h-[30px] bg-[#ffffff8e] items-center flex rounded-full w-[150px] px-[5px]'>
                                <div className='w-[23px] h-[23px] rounded-full'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[23px] h-[23px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[23px] h-[23px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[23px] h-[23px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <h4 className='text-[#fff] font-[600] text-[16px] ml-[5px]'>
                                    +746
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className=''>
                          <Image src={img2} alt=''/>
                    </div>
                </div>

                <div className='w-[100%] flex mt-[12px] justify-between'>
                    <div className='w-[49%] items-center px-[15px] py-[10px] rounded-[12px] flex justify-between bg-[#6C74D8] h-[150px]'>
                        <div className='flex flex-col'>
                            <h2 className='text-[#fff] text-[15px] font-[400]'>
                            Total Landlords
                        </h2>
                        <h3 className='text-[#fff] font-[700] text-[35px] mt-[5px]'>
                            110
                        </h3>
                        <div className='h-[30px] bg-[#ffffff8e] items-center flex rounded-full w-[110px] px-[5px]'>
                                <div className='w-[20px] h-[20px] rounded-full'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <h4 className='text-[#fff] font-[600] text-[16px] ml-[5px]'>
                                    +106
                                </h4>
                            </div>
                        </div>
                        
                        <Image src={img3}  alt=''/>
                    </div>
                    <div className='w-[49%] items-center px-[15px] py-[10px] rounded-[12px] flex justify-between bg-[#6C74D8] h-[150px]'>
                        <div className='flex flex-col'>
                            <h2 className='text-[#fff] text-[15px] font-[400]'>
                            Total Tenants
                        </h2>
                        <h3 className='text-[#fff] font-[700] text-[35px] mt-[5px]'>
                            890
                        </h3>
                        <div className='h-[30px] bg-[#ffffff8e] items-center flex rounded-full w-[110px] px-[5px]'>
                                <div className='w-[20px] h-[20px] rounded-full'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full ml-[-5px]'>
                                    <Image src={img} alt="" objectFit='cover' className='w-[100%] h-[100%]'/>
                                </div>
                                <h4 className='text-[#fff] font-[600] text-[16px] ml-[5px]'>
                                    +886
                                </h4>
                            </div>
                        </div>
                        
                        <Image src={img4}  alt=''/>
                    </div>
                </div>
            </div>

            <div className='w-[57%] pt-[15px] pb-[15px] rounded-[10px] overflow-hidden border border-[#DCDCDC] flex flex-col'>
          <h3 className='text-[16px] w-[100%] pl-[20px] pr-[20px] font-[500]'>Total inflow and outflow</h3>
          <div className='w-[100%] h-[1px] bg-[#DCDCDC] mt-[15px]'></div>

          <div className='w-[100%] flex items-center mt-[10px] justify-between'>
            <div className='w-[50%]'>
              <Piechart />
            </div>
            <div className='w-[50%] flex flex-col'>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#5C00B2]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>75%</span> total inflow</h3>
              </div>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#CC96FF]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>25%</span> total outflow</h3>
              </div>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#EDDFFF]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>25%</span> total pending</h3>
              </div>
            </div>
          </div>
            </div>
        </div>

        <div className='w-[100%] flex mt-[22px] justify-between'>
            <div className='w-[50%] pt-[15px] pb-[15px] rounded-[10px] overflow-hidden border border-[#DCDCDC] flex flex-col'>
          <div className='w-[100%] flex justify-between items-center'>
            <h3 className='text-[16px] w-[100%] pl-[20px] pr-[20px] font-[500]'>Payment status</h3>
            <IoIosArrowForward className='mr-[20px] text-[18px]'/>
          </div>
          <div className='w-[100%] h-[1px] bg-[#DCDCDC] mt-[15px]'></div>

          <div className='w-[100%] flex items-center mt-[10px] justify-between pr-[20px]'>
            <div className='w-[50%]'>
              <Piechart />
            </div>
            <div className='w-[23%] flex flex-col'>
              <div className='flex items-center mb-[12px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#5C00B2]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>55%</span></h3>
              </div>
              <div className='flex items-center mb-[12px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#CC96FF]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>25%</span></h3>
              </div>
              <div className='flex items-center mb-[12px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#EDDFFF]'></div>
                <h3 className='ml-[12px]'><span className='font-[600]'>15%</span></h3>
              </div>
            </div>

            <div className='w-[23%] flex flex-col'>
                <button className='w-[120px] h-[35px] mb-[10px] flex justify-center items-center rounded-[3px] bg-[#ECFDF3]'>
                    <p className='text-[14px] text-[#027A48] font-[600]'>Paid</p>
                </button>
                <button className='w-[120px] h-[35px] flex mb-[10px] justify-center items-center rounded-[3px] bg-[#ECFDF3]'>
                    <p className='text-[14px] text-[#027A48] font-[600]'>Paid</p>
                </button>
                <button className='w-[120px] h-[35px] flex mb-[10px] justify-center items-center rounded-[3px] bg-[#ECFDF3]'>
                    <p className='text-[14px] text-[#027A48] font-[600]'>Paid</p>
                </button>
            </div>
          </div>
            </div>

            <div className='w-[47%] h-[300px] pt-[12px] pb-[12px] pl-[12px] pr-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
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
        </div>

        <div className='w-[100%] flex flex-col mt-[20px] mb-[24px]'>
            <div className='w-[100%] flex items-center justify-between'>
                <h3 className='text-[17px] font-[600]'>Apartments</h3>
                <h4 className='text-[15px] font-[600] text-[#5C00B2]'>See more</h4>
            </div>

            <div className='w-[100%] flex justify-between mt-[15px] '>
                <div className='w-[24%] relative h-[230px] bg-[#fff] shadow-lg rounded-[10px] py-[10px] px-[10px]'>
                    <div className='w-[100%] h-[100%] rounded-[10px] overflow-hidden'>
                          <Image src={img5} alt='' objectFit='cover' className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    
                    <div className='absolute left-[16px] top-[20px] w-[120px] h-[35px] flex items-center pl-[15px] rounded-full bg-[#FFEFEE]'>
                        <p className='text-[13px] font-[600] text-[#FF3D00]'>Not listed</p>
                    </div>
                </div>
                <div className='w-[24%] relative h-[230px] bg-[#fff] shadow-lg rounded-[10px] py-[10px] px-[10px]'>
                    <div className='w-[100%] h-[100%] rounded-[10px] overflow-hidden'>
                          <Image src={img5} alt='' objectFit='cover' className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    
                    <div className='absolute left-[16px] top-[20px] w-[120px] h-[35px] flex items-center pl-[15px] rounded-full bg-[#FFEFEE]'>
                        <p className='text-[13px] font-[600] text-[#FF3D00]'>Not listed</p>
                    </div>
                </div>
                <div className='w-[24%] relative h-[230px] bg-[#fff] shadow-lg rounded-[10px] py-[10px] px-[10px]'>
                    <div className='w-[100%] h-[100%] rounded-[10px] overflow-hidden'>
                          <Image src={img5} alt='' objectFit='cover' className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    
                    <div className='absolute left-[16px] top-[20px] w-[120px] h-[35px] flex items-center pl-[15px] rounded-full bg-[#ECFDF3]'>
                        <p className='text-[13px] font-[600] text-[#027A48]'>Listed 1hr ago</p>
                    </div>
                </div>
                <div className='w-[24%] relative h-[230px] bg-[#fff] shadow-lg rounded-[10px] py-[10px] px-[10px]'>
                    <div className='w-[100%] h-[100%] rounded-[10px] overflow-hidden'>
                          <Image src={img5} alt='' objectFit='cover' className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    
                    <div className='absolute left-[16px] top-[20px] w-[120px] h-[35px] flex items-center pl-[15px] rounded-full bg-[#ECFDF3]'>
                        <p className='text-[13px] font-[600] text-[#027A48]'>Listed 1hr ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
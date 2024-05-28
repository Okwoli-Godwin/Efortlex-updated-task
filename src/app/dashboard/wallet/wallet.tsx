'use client'

import React from 'react'
import img from "../../../public/bg-shape.png"
import img2 from "../../../public/bg-left.png"
import img3 from "../../../public/bg-bottom.png"
import Image from 'next/image'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Piechart from './piechart'
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuArrowDownUp } from "react-icons/lu";
import { HiOutlineArrowDown } from "react-icons/hi";
import { useState, useEffect } from "react"
import { CgClose } from "react-icons/cg";
import img4 from "../../../public/wired-flat-1103-confetti 1.png"

const wallet = () => {

  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
		let timer: any;
		if (show) {
			timer = setTimeout(() => {
				setShow(false);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [show]);

  const ToggleShow = () => {
    setShow(!show)
    setShowModal(false)
  }
  
  const ToggleModal = () => {
    setShowModal(!showModal)
  }

  const CloseModal = () => {
    setShowModal(false)
  }

  const tableItems = [
        {
            name: "Dreamland Homes",
            date: "Inward transfer",
            status: "+N135,000",
            price: "Rent",
            stat: "Nov 5th, 2023",
            option: "Success"
        },
        {
            name: "Blissful Abodes",
            date: "Outward transfer",
            status: "-N135,000",
            price: "Rent",
          stat: "Oct 5th, 2023",
            option: "Pending"
        },
        {
            name: "Novo Urtan Homes",
            date: "Inward Transfer",
            status: "+N135,000",
            price: "Maintenance fee",
          stat: "Nov 5th, 2023",
            option: "Success"
        },
        {
            name: "Fairmount Homes",
            date: "Outward transfer",
            status: "-N135,000",
            price: "Rent",
          stat: "Oct 5th, 2023",
            option: "Pending"
        },
  ]
  return (
    <div className='w-[100%] flex items-center flex-col mt-[20px] pl-[40px] pr-[40px]'>
      <div className='w-[100%] flex  justify-between'>
        <div className='w-[45%] h-[250px] p-[20px] rounded-[10px] overflow-hidden border border-[#DCDCDC] relative'>
          <Image src={img} alt='' className='absolute left-0 top-0' />
          <Image src={img2} alt='' className='absolute right-0 top-0'/>
          <Image src={img3} alt='' className='absolute right-0 bottom-0' />
          <div className='w-[100%] h-[100%] absolute left-0 top-0 p-[20px] flex-col flex'>
            <div className='w-[100%] flex items-center justify-between'>
              <h3 className='text-[17px] font-[500]'>Wallet balance</h3>
              <MdOutlineRemoveRedEye className='text-[25px]'/>
            </div>

            <h2 className='text-[28px] font-[600] mt-[30px]'>N540,310,000</h2>

            <button onClick={ToggleModal} className='w-[100%] mt-[60px] h-[40px] rounded-[5px] border border-[#5C00B2] flex justify-center items-center'>
              <p className='text-[#5C00B2] text-[18px]'>Withdraw</p>
            </button>
          </div>
        </div>

        <div className='w-[50%] pt-[15px] pb-[15px] rounded-[10px] overflow-hidden border border-[#DCDCDC] flex flex-col'>
          <h3 className='text-[16px] w-[100%] pl-[20px] pr-[20px] font-[500]'>Total inflow and outflow</h3>
          <div className='w-[100%] h-[1px] bg-[#DCDCDC] mt-[15px]'></div>

          <div className='w-[100%] flex items-center mt-[10px] justify-between'>
            <div className='w-[50%]'>
              <Piechart />
            </div>
            <div className='w-[50%] flex flex-col'>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#5C00B2]'></div>
                <h3 className='ml-[12px]'><span className='font-[500]'>75%</span> total inflow</h3>
              </div>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#CC96FF]'></div>
                <h3 className='ml-[12px]'><span className='font-[500]'>25%</span> total outflow</h3>
              </div>
              <div className='flex items-center pb-[10px]'>
                <div className='w-[15px] h-[15px] rounded-full bg-[#EDDFFF]'></div>
                <h3 className='ml-[12px]'><span className='font-[500]'>25%</span> total pending</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[100%] mt-[20px] flex flex-col'>
        <h3 className='text-[17px] font-[500]'>Transaction History</h3>
        <div className='w-[100%] flex items-center mt-[20px]'>
            <div className='w-[350px] flex h-[35px] border border-[#8F8F8F] rounded-[7px] pr-[10px] pt-[5px] pb-[5px]'>
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
                            <th className="py-3 pr-6 text-[20px]"><LuArrowDownUp /></th>
                            <th className="py-3 pr-6 text-[12px]">TRANSACTION TYPE</th>
                            <th className="py-3 pr-6 text-[12px]">AMOUNT</th>
                            <th className="py-3 pr-6 text-[12px]">DESCRIPTION</th>
                            <th className="py-3 pr-6 text-[12px]">DATE</th>
                            <th className="py-3 pr-6 text-[12px]">STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                <td className="pr-6 py-4 whitespace-nowrap font-[600]">
                                  <div className='w-[25px] h-[25px] rounded-full bg-[#ECFDF3] text-[#027A48] flex justify-center items-center'>
                                    <HiOutlineArrowDown />
                                  </div>
                                </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs ${item.status == "+N135,000" ? "text-[#027A48]" : "text-[#B42318]"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                <td className="pr-6 py-4 whitespace-nowrap">{item.stat}</td>
                                <td className="pr-6 py-4 whitespace-nowrap">
                                  <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs flex items-center ${item.option == "Success" ? "text-[#027A48] bg-[#ECFDF3]" : "text-[#B42318] bg-[#FFF5F4]"}`}>
                                            <div className={`w-[15px] h-[15px] rounded-full bg-[${item.option == "Success" ? "bg-[#027A48]" : "bg-[#FF3838]"}]`}></div> {item.option}
                                        </span>
                                </td>
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>

      {showModal ? (
        <div className='fixed w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
          <div className='w-[35%] p-[20px] rounded-[10px] bg-white flex flex-col'>
            <div className='w-[100%] flex items-center justify-between'>
              <h3 className='text-[19px] font-[500]'>Withdraw from wallet</h3>
              <CgClose onClick={CloseModal} className='text-[20px] cursor-pointer'/>
            </div>

            <div className='w-[100%] h-[1px] bg-[#8F8F8F] mt-[15px]'></div>

          <div className='w-[100%] flex flex-col mt-[20px]'>
            <h3 className='text-[17px] font-[500]'>Recipient account number</h3>
            <input placeholder='enter account' type="text" className='w-[100%] h-[40px] rounded-[5px] pl-[7px] border border-[#8F8F8F] mt-[5px] outline-none'/>
          </div>

          <div className='w-[100%] flex flex-col mt-[12px]'>
            <h3 className='text-[17px] font-[500]'>Amount</h3>
            <input placeholder='N100,000,000' type="text" className='w-[100%] h-[40px] rounded-[5px] pl-[7px] border border-[#8F8F8F] mt-[5px] outline-none'/>
          </div>

          <div className='w-[100%] flex flex-col mt-[12px]'>
            <h3 className='text-[17px] font-[500]'>Recipient Bank</h3>
            <select className='w-[100%] h-[40px] rounded-[5px] border border-[#8F8F8F] pr-[12px] outline-none mt-[5px]'>
              <option value="">Fidelity Bank</option>
              <option value="">Sterling Bank</option>
              <option value="">UBA Bank</option>
              <option value="">First Bank</option>
            </select>
          </div>

          <div className='w-[100%] flex flex-col mt-[12px]'>
            <h3 className='text-[17px] font-[500]'>Account Name</h3>
            <input placeholder='John Kalu' type="text" className='w-[100%] h-[40px] rounded-[5px] pl-[7px] border border-[#8F8F8F] mt-[5px] outline-none'/>
          </div>

          <div className='w-[100%] flex flex-col mt-[12px]'>
            <h3 className='text-[17px] font-[500]'>Description</h3>
            <textarea className='w-[100%] h-[100px] pl-[10px] pt-[5px] resize-none outline-none rounded-[5px] border border-[#8F8F8F] mt-[5px]'></textarea>
          </div>

          <button onClick={ToggleShow} className='w-[100%] h-[40px] flex justify-center items-center bg-[#5C00B2] text-[#fff] text-[16px] mt-[10px] rounded-[5px]'>
            Confirm withdrawal
          </button>
          </div>
      </div>
      ) : null}

      {show ? (
        <div className='w-[100%] h-[100%] fixed flex justify-center items-center top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
          <div className='w-[35%] p-[20px] bg-[#fff] rounded-[10px] flex flex-col justify-center items-center'>
            <Image src={img4} alt='' height={200} />
            
            <h3 className='text-[25px] font-[700]'>Withdraw Successful</h3>
            <p className='text-center text-[17px] w-[95%] mt-[15px]'>You have successfully withdrawn money from your wallet</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default wallet
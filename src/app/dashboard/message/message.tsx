"use client"

import Image from "next/image"
import img from "../../../../public/Elli.png"
import img2 from "../../../../public/Eli.png"
import img3 from "../../../../public/cute.png"
import { useState } from "react"


const Message = () => {

    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const ToggleShow = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
    }
    const ToggleShow2 = () => {
        setShow2(!show2)
        setShow(false)
        setShow3(false)
    }
    const ToggleShow3 = () => {
        setShow3(!show3)
        setShow(false)
        setShow2(false)
    }

    return (
        <div className='w-[100%] flex items-center flex-col mt-[20px] pl-[40px] pr-[40px]'>
            <div className="w-[100%] h-[100%] border border-[#DCDCDC] py-[20px] px-[20px] flex flex-col">
                <h3 className="text-[18px] font-[600] text-[#5C00B2]">
                    All broadcast
                </h3>

                <div className="w-[100%] flex mt-[25px] justify-between">
                    <div className="w-[40%] h-[480px] pr-[20px] overflow-y-scroll flex flex-col border-r-[3px] border-[#DCDCDC]">

                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                        <div className="w-[100%] h-[110px] px-[10px] py-[10px] shadow-lg rounded-[7px] border-l-[7px] border-[#EDDFFF] flex mb-[15px]">
                            <div className="flex flex-col items-center w-[25%] h-[100%]">
                                <div className="flex items-center">
                                    <Image src={img} alt="" height={40}/>
                                    <Image src={img2} alt="" height={40} className="ml-[-10px]"/>
                                </div>
                                <h4 className="text-[14px] font-[400] text-[#8F8F8F] mt-[10px]">
                                    +106
                                </h4>
                            </div>

                            <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tennats regarding the upcoming changes...
                                </p>
                            </div>
                        </div>
                    </div>

                    {show ? (
                        <div className="w-[58%] h-[470px] flex justify-center items-center flex-col">
                        <Image src={img3}  alt="" height={200}/>

                        <button onClick={ToggleShow2} className="h-[40px] w-[180px] flex justify-center items-center text-[#fff] bg-[#5C00B2] rounded-[7px] mt-[20px]">
                            Start new message
                        </button>
                    </div>
                    ) : null}

                    {show2 ? (
                        <div className="w-[58%] h-[470px] flex items-center flex-col">
                            <div className="w-[100%] flex flex-col">
                                <h4 className="text-[14px] font-[500] text-[#2A2A2A]">
                                    Send to
                                </h4>
                                <div className="relative w-[100%] max-w-full mx-auto mt-[6px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-[7px] shadow-sm outline-none appearance-none">
                                    <option>Select Category</option>
                                    <option>Software engineer</option>
                                    <option>IT manager</option>
                                    <option>UI / UX designer</option>
                                </select>
                                </div>
                            </div>
                            <div className="w-[100%] flex flex-col mt-[20px]">
                                <h4 className="text-[14px] font-[500] text-[#2A2A2A]">
                                    Filter by
                                </h4>
                                <div className="relative w-[100%] max-w-full mx-auto mt-[6px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-[7px] shadow-sm outline-none appearance-none">
                                    <option>Select Category</option>
                                    <option>Software engineer</option>
                                    <option>IT manager</option>
                                    <option>UI / UX designer</option>
                                </select>
                                </div>
                            </div>
                            <div className="w-[100%] flex flex-col mt-[20px]">
                                <h4 className="text-[14px] font-[500] text-[#2A2A2A]">
                                    Subject
                                </h4>
                                <div className="relative w-[100%] max-w-full mx-auto mt-[6px]">
                                <input className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-[7px] shadow-sm outline-none appearance-none" />

                                </div>
                            </div>
                            <div className="w-[100%] flex flex-col mt-[20px]">
                                <h4 className="text-[14px] font-[500] text-[#2A2A2A]">
                                    Enter message
                                </h4>
                                <div className="relative w-[100%] max-w-full mx-auto mt-[6px]">
                                <textarea className="w-full h-[120px] resize-none px-3 py-2 text-sm text-gray-600 bg-white border rounded-[7px] shadow-sm outline-none appearance-none">
                                </textarea>
                                </div>
                            </div>

                            <button onClick={ToggleShow3} className="w-[100%] h-[40px] flex justify-center items-center bg-[#5C00B2] text-[#fff] rounded-[7px] mt-[7px]">
                                Send
                            </button>
                        </div>
                    ) : null}

                    {show3 ? (
                        <div className="w-[58%] h-[470px] flex items-center flex-col">
                            <div className="w-[100%] h-[150px] px-[20px] py-[20px] shadow-lg">
                                <div className="flex-1 flex flex-col ml-[7px]">
                                <div className="w-[100%] flex justify-between items-center">
                                    <h3 className="text-[12px] font-[600]">Landlords: Verified landlords</h3>
                                    <div className="flex items-center">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[green]"></div>
                                        <h4 className="text-[12px] ml-[3px] font-[400] text-[#8F8F8F]">
                                            10mins
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-[11px] mt-[5px] text-[#615E83]">
                                    As from 15th june 2024, all verified landlords will be able to send mails to their tenants regarding the upcoming changes made on the maintenance request sent every single hour and time and its becoming a really difficult task to carry out on the platform and i just wanted to make this a notice for every single person and thing using this platform.
                                </p>
                            </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Message
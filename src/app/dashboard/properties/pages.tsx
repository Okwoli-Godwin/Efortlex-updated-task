import { HiOutlineBuildingOffice2, HiOutlineUser } from 'react-icons/hi2';
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import Image from 'next/image';
import img from "../../../public/Ellipse 45.png"
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
    <div className="w-[100%] flex items-center flex-col mt-[20px] pl-[40px] pr-[40px]">
      <div className='w-[100%] flex items-center justify-between'>
        <div className="w-[24%] p-[15px] mr-[12px] pt-[30px] pb-[30px] rounded-[10px] border border-[#DCDCDC] flex items-center">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] rounded-[100%] bg-[#EDDFFF] flex justify-center items-center">
            <HiOutlineBuildingOffice2 className="text-[#5C00B2] text-[23px]" />
          </div>

          <div className='flex flex-col ml-[10px]'>
            <h4 className='text-[22px] font-[600]'>16</h4>
            <p className='text-[13px] text-[#8F8F8F]'>Total properties</p>
          </div>
        </div>
      </div>

      <div className="w-[24%] p-[15px] mr-[12px] pt-[30px] pb-[30px] rounded-[10px] border border-[#DCDCDC] flex items-center">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] rounded-[100%] bg-[#FFF5F4] flex justify-center items-center">
            <HiOutlineBuildingOffice2 className="text-[#B42318] text-[23px]" />
          </div>

          <div className='flex flex-col ml-[10px]'>
            <h4 className='text-[22px] font-[600]'>10</h4>
            <p className='text-[13px] text-[#8F8F8F]'>Rented properties</p>
          </div>
        </div>
      </div>

      <div className="w-[24%] p-[15px] mr-[12px] pt-[30px] pb-[30px] rounded-[10px] border border-[#DCDCDC] flex items-center">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] rounded-[100%] bg-[#EDDFFF] flex justify-center items-center">
            <HiOutlineBuildingOffice2 className="text-[#5C00B2] text-[23px]" />
          </div>

          <div className='flex flex-col ml-[10px]'>
            <h4 className='text-[22px] font-[600]'>6</h4>
            <p className='text-[13px] text-[#8F8F8F]'>Available properties</p>
          </div>
        </div>
      </div>

      <div className="w-[24%] p-[15px] mr-[12px] pt-[30px] pb-[30px] rounded-[10px] border border-[#DCDCDC] flex items-center">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] rounded-[100%] bg-[#FFEEE5] flex justify-center items-center">
            <HiOutlineUser className="text-[#FF5F00] text-[23px]" />
          </div>

          <div className='flex flex-col ml-[10px]'>
            <h4 className='text-[22px] font-[600]'>12</h4>
            <p className='text-[13px] text-[#8F8F8F]'>Total occupants</p>
          </div>
        </div>
      </div>
      </div>

      {/* property details */}
      <div className='w-[100%] flex flex-col mt-[25px]'>
        <div className='w-[100%] flex items-center justify-between'>
          <h3 className='text-[16px] font-[500]'>Property details</h3>

          <button className='w-[220px] h-[40px] rounded-[7px] flex justify-center items-center border border-[#5C00B2]'>
            <h3 className='text-[16px] text-[#5C00B2] m-0'>Add new property <span className='text-[20px] ml-[10px]'>+</span></h3>
          </button>
        </div>

        <div className='w-[100%] flex flex-col mt-[13px]'>
          <div className='w-[100%] flex items-center'>
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

      <div className='w-[100%] flex flex-col mt-[3px]'>

         <div className="w-[100%] max-w-screen-xl mx-auto md:px-8 mt-[-25px]">
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6 text-[12px]">PROPERTY NAME</th>
                            <th className="py-3 pr-6 text-[12px]">APARTMENT LOCATION</th>
                            <th className="py-3 pr-6 text-[12px]">APARTMENT TYPE</th>
                            <th className="py-3 pr-6 text-[12px]">RENT AMOUNT</th>
                            <th className="py-3 pr-6 text-[12px]">STATUS</th>
                            <th className="py-3 pr-6 text-[12px]">TENENTS</th>
                            <th className="py-3 pr-6 text-[12px]"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap font-[600]">{item.name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs ${item.status == "Active" ? "text-[#5C00B2] bg-[#EDDFFF]" : "text-[#5C00B2] bg-[#EDDFFF]"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-[6px] rounded-[5px] font-semibold text-xs ${item.stat == "Available" ? "text-[#027A48] bg-[#ECFDF3]" : "text-[#B42318] bg-[#FFF5F4]"}`}>
                                            {item.stat}
                                        </span>
                                </td>
                                <td className="pr-6 py-4 whitespace-nowrap">
                                  <div className='flex items-center'>
                                    <div className='w-[20px] h-[20px] rounded-[100%]'>
                                      <Image src={img} alt='' />
                                    </div>
                                    <div className='w-[20px] h-[20px] rounded-[100%] ml-[-5px]'>
                                      <Image src={img} alt='' />
                                    </div>
                                  </div>
                                </td>
                                    <td className="text-right whitespace-nowrap">
                                        <a href="javascript:void()" className="py-1.5 px-3 ">
                                            <HiOutlineDotsHorizontal className='text-[18px]'/>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page 



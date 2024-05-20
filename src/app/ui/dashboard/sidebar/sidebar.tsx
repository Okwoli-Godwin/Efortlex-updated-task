'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgLogOut } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import img from '../../../../../public/effort.png';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const pathname = usePathname();
  

  const getLinkStyle = (path: any) => ({
    width: '100%',
    color: pathname === path ? '#5C00B2' : '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '5px',
    padding: '5px 10px',
    height: '50px',
    backgroundColor: pathname === path ? '#EDDFFF' : '',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
  });

  return (
    <div className='w-[18%] h-[100vh] bg-[#5C00B2] flex flex-col fixed pl-[15px] pr-[15px] pt-[20px] pb-[20px]'>
      <div className='flex items-center justify-between'>
        <Image src={img} alt='' height={25} />
        <CgLogOut className='text-[#fff] text-[23px] mt-[3px]' />
      </div>

      <div className='w-[100%] flex flex-col mt-[40px]'>
        <h3 className='text-[#fff]'>MENU</h3>

        <Link href="/dashboard">
          <div style={getLinkStyle('/dashboard')}>
            <RxDashboard className='text-[25px]' />
            <h3 className='ml-[15px] font-[600] text-[17px]'>Dashboard</h3>
          </div>
        </Link>

        <Link href="/dashboard/properties">
          <div style={getLinkStyle('/dashboard/properties')}>
            <HiOutlineBuildingOffice2 className='text-[25px]' />
            <h3 className='ml-[15px] font-[600] text-[17px]'>My Properties</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

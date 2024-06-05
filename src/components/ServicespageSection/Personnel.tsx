import React from 'react'
import img from "../../../public/Rectangle 3864.png"
import img2 from "../../../public/oui_training.png"
import img3 from "../../../public/Vector (2).png"
import img5 from "../../../public/Vector (3).png"
import img4 from "../../../public/Group.png"
import Image from 'next/image'

const Personnel = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
        <div className='w-[100%] h-[550px] sm:h-[350px] overflow-hidden mt-[50px] flex justify-center items-center relative'>
            <Image src={img} alt='' className='w-[100%] h-[100%] object-cover absolute'/>
        
            <h3 className='text-[#fff] text-[30px] font-[600] z-[100] sm:text-[20px]'>PERSONNEL TRAINING AND WORKSHOP</h3>
        </div>
        
        <div className='w-[90%] flex flex-col items-center mt-[25px]'>
            <p className='text-center text-[#434141] text-[18px] sm:text-[15px]'>
                A-Class Academic Consults Limited offers in-house personnel/human development training and workshops to employees of client organisations to ensure their improved efficiency and effectiveness. Our training process involves four processes
            </p>

            <div className='w-[100%] flex flex-wrap mt-[35px]'>
                <div className='w-[47%] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[50px]'>
                    <Image src={img2} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>Training Needs Analysis</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        To analyse the current competencies of employees, the objectives of the organisations, the skills needed to meet these goals, the current competencies of employees and the needed skills to close the gap.
                    </p>
                </div>
                <div className='w-[47%] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[50px]'>
                    <Image src={img3} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>Skills Assessments</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        To assess employees competencies and to know what skills need to be improved.
                    </p>
                </div>
                <div className='w-[47%] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[30px]'>
                    <Image src={img4} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>Training</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        Provide sound detailed training for employees either online or through seminars and workshops.
                    </p>
                </div>
                <div className='w-[47%] sm:w-[100%] md:w-[100%] flex flex-col items-center px-[20px] mb-[30px]'>
                    <Image src={img5} alt='' height={60}/>
                    <h3 className='text-[19px] font-[700] mt-[10px]'>Post-Training experience</h3>
                    <p className='text-center text-[#434141] text-[18px] sm:text-[15px] mt-[12px]'>
                        To ensure training is implemented in the workplace.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Personnel
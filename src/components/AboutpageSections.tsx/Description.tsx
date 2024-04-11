import React from 'react'
import Image from 'next/image'
import img from "../../../public/scan.png"

const Description = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd] pb-[35px] pt-[35px]'>
        <section className='p-[25px] h-full max-lg:p-12 max-md:p-8 max-lg:mx-5 rounded-xl bg-[#566599] mb-[35px] w-[90%]'>
        
        {/* First Section */}
        <div className='flex grid-cols-[1fr,0.8fr] gap-12 max-lg:grid-cols-1 flex-wrap'>
            <div className=' justify-center items-center max-md:h-[350px] h-[370px] w-[330px] hidden'>
                  <Image src={img} alt='/' className='rounded-se-3xl rounded-bl-3xl object-cover w-full h-full'/>
            </div>
            
            <div className='w-[60%] md:w-[100%] sm:w-[100%]'>
                <p className='text-justify max-md:text-[14px] leading-relaxed text-white'>
                    A-Class Academic Consults Limited is a consultancy, research and personnel training company that integrates cutting-edge technology to deliver practical solutions to the challenges of organisations in the private and public sectors. Founded and registered in Nigeria and with working experiences supporting clients all over the world. A-Class Academic Consults Limited strives to offer innovative sustainable solutions and improve organisational competencies amongst organisations in the private and public sectors. To achieve this, we offer noteworthy research, personnel/human development training, and consultancy services. 
                </p>
                <p className='mt-8 text-justify max-md:text-[14px] leading-relaxed text-white'>
                    We believe that the global world is constantly evolving, triggering a whole new process in its wake that impacts every company. For organisations to perform better and achieve business success in the ever-evolving and globalized world, we aid them by designing innovative, strategic and practical solutions to the challenges facing their organisations. 
                </p>
            </div>
            <div className=' justify-center items-center max-md:h-[350px] h-[370px] md:h-[420px] w-[330px] md:w-[100%]' >
                <Image src={img} alt='/' className='rounded-se-3xl rounded-bl-3xl object-cover w-full h-full'/>
            </div>
        </div>
        
        {/* second sess */}
        <div className='mt-8'>
            <p className='text-justify max-md:text-[14px] leading-relaxed text-white'>
                A-Class Academic Consults Limited is Corporate Affairs Commission (CAC) registered and has national affiliations with experts, industry leaders and organisations highly committed to harnessing the potential and synergies of the national and global economy.  Furthermore, We offer research packages integrated with sophisticated technologies, personnel and human development training, research and business consultancy services through our network of experienced industry and academic professionals knowledgeable in project management, innovative technologies, applied research, development, business management etc. The result is years of offering efficient, effective and strategic business solutions that drive the growth of firms in the public and private sectors. 
            </p>
        </div>
    </section>
    </div>
  )
}

export default Description
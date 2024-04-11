import React from 'react'
// import Hero from '@/components/ServicespageSection/Hero'
import Banner from '@/components/ServicespageSection/Banner'
import CoreServices from '@/components/ServicespageSection/CoreServices'
import Clients from '@/components/ServicespageSection/Clients'
import HowWeWork from '@/components/ServicespageSection/HowWeWork'

const ServicePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <CoreServices />
      <Clients />
      <HowWeWork />
    </div>
  )
}

export default ServicePage
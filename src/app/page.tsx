import React from 'react'
import Hero from '../components/HomepageSections/Hero'
import WhoWeAre from '../components/HomepageSections/WhoWeAre'
import Values from '../components/HomepageSections/Values'
import OurServices from '../components/HomepageSections/OurServices'
import Academic from '../components/HomepageSections/Academic'
import Testimonials from '../components/HomepageSections/Testimonials'

const page = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Values />
      <OurServices />
      <Academic />
      <Testimonials />
    </>
  )
}

export default page
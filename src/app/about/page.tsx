import Description from '@/components/AboutpageSections.tsx/Description'
import Difference from '@/components/AboutpageSections.tsx/Difference'
import Hero from '@/components/AboutpageSections.tsx/Hero'
import Mission from '@/components/AboutpageSections.tsx/Mission'
import Vision from '@/components/AboutpageSections.tsx/Vision'
// import Testimonials from '@/components/HomepageSections/Testimonials'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Vision />
      <Mission />
      <Difference />
      {/* <Testimonials /> */}
    </div>
  )
}

export default AboutPage
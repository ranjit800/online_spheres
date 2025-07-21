import React from 'react'
import HeroHome from '@/components/HomeComponents/HeroHome'
import AboutSection from '@/components/HomeComponents/AboutSection'
import WhyStandOut from '@/components/HomeComponents/WhyStandOut'
import OurExpertise from '@/components/HomeComponents/OurExpertise'
import WhyChooseUs from '@/components/HomeComponents/WhyChooseUs'



const page = () => {
  return (
    <>
      <HeroHome/>
      <AboutSection/>
      <WhyStandOut />
      <OurExpertise/>
      <WhyChooseUs/>
    </>
  )
}

export default page

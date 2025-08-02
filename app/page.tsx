import React from 'react'
import HeroHome from '@/components/HomeComponents/HeroHome'
import AboutSection from '@/components/HomeComponents/AboutSection'
import WhyStandOut from '@/components/HomeComponents/WhyStandOut'
import OurExpertise from '@/components/HomeComponents/OurExpertise'
import WhyChooseUs from '@/components/HomeComponents/WhyChooseUs'
import IdeaToLaunch from '@/components/HomeComponents/IdeaToLaunch'
import Testimonial from '@/components/HomeComponents/Testimonial'
import Anidea from '@/components/HomeComponents/Anidea'




const page = () => {
  return (
    <>
      <HeroHome/>
      <AboutSection/>
      <WhyStandOut />
      <OurExpertise/>
      <WhyChooseUs/>
      <IdeaToLaunch />
      <Testimonial/>
      <Anidea/>
    </>
  )
}

export default page

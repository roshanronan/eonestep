import React from 'react'
import Carousel from '../components/Carousel'
import ServicesSection from '../components/Services'
import AchievementSection from '../components/Achivements'
import About from '../components/About'
import AffiliationProcess from '../components/AffiliationProcess'
import RefundAndCanel from '../components/RefundAndCanel'

const Landing = () => {
  return (
    <>
      <Carousel/>
      <ServicesSection/>
      <AchievementSection/>
      <About/>
      <AffiliationProcess/>
      <RefundAndCanel/>
    </>
  )
}

export default Landing
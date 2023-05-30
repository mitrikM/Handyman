import React from 'react'
import { Navbar } from '../Components/Layout/Navbar'
import { LetUsMakeItForYou } from '../Components/Layout/LetUsMakeItForYou'
import { HeroSection } from '../Components/Layout/HeroSection'
import { Footer } from '../Components/Layout/Footer'
import { Testimonial } from '../Components/Layout/Testimonial'

export const HomePage = () => {
  return (
    <div className={''}>
      <Navbar />
      <hr />
      <HeroSection />
      <LetUsMakeItForYou />
      <Testimonial />
      <Footer />
    </div>
  )
}

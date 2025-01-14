import React from 'react'
import Hero from '../components/Hero'
import LandingNav from '../components/LandingNav'
import Features from '../components/Features'
import Payments from '../components/Payments'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/authContext'

const Home = () => {
  const {isAuthenticated}=useAuth();
  return (
    <div className="bg-dark">
      <LandingNav/>
      <Hero/>
      <Features/>
      <Payments/>
      <Footer/>
    </div>

  )
}

export default Home
import React from 'react'
import CommentSection from '../components/commentsection/CommentSection'
import HeroSection from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Twinkling from '../components/twinkling/Twinkling'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Twinkling />
      <HeroSection />
      <CommentSection />
    </div>
  )
}

export default Home
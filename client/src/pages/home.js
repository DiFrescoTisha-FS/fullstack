import React from 'react'
import CommentSection from '../components/commentsection/CommentSection'
import HeroSection from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommentSection />
    </div>
  )
}

export default Home
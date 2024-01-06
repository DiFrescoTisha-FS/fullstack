import React from 'react'
import ArtistInfo from '../components/artistInfo/Artist'
import CommentSection from '../components/commentsection/CommentSection'
import HeroSection from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Thoughts from '../components/thoughts/Thoughts'
import Music from '../components/music/Music'
import NewSection from '../components/new/NewSection'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArtistInfo />
      <Music />
      <NewSection />
      <Thoughts />
      <CommentSection />
      <Footer />
    </div>
  )
}

export default Home
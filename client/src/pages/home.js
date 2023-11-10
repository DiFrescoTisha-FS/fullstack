import React from 'react'
import ArtistInfo from '../components/artistInfo/Artist'
import CommentSection from '../components/commentsection/CommentSection'
import HeroSection from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Thoughts from '../components/thoughts/Thoughts'
import Music from '../components/music/Music'
// import StarBackground2 from '../components/starbackground2/StarBackground2'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <StarBackground2 /> */}
      <HeroSection />
      <ArtistInfo />
      <Music />
      <Thoughts />
      <CommentSection />
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import ArtistInfo from '../components/artistInfo/Artist'
import CommentSection from '../components/commentsection/CommentSection'
import HeroSection from '../components/hero/Hero'
// import Navbar from '../components/navbar/Navbar'
import Navbar1 from '../components/navbar/Navbar1'
import Thoughts from '../components/thoughts/Thoughts'
import Music from '../components/music/Music'
import NewSection from '../components/new/NewSection'
import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toggle = () => {
    console.log("Toggle function called");
      setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setCurrentUser(null);
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const handleSignIn = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        currentUser={currentUser}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
      />
      <Navbar1 toggle={toggle} />
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
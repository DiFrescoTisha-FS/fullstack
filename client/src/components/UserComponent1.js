import React, { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const UserComponent1 = ({ onSignIn, onSignOut }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already signed in when the component mounts
    const checkSignInStatus = async () => {
      try {
        const response = await axios.get('/api/auth/status');
        if (response.data.isAuthenticated) {
          setUser(response.data.user);
          if (onSignIn) {
            onSignIn(response.data.user);
          }
        }
      } catch (error) {
        console.error('Error checking sign-in status:', error);
      }
    };

    checkSignInStatus();
  }, [onSignIn]);

  const handleSignIn = async () => {
    try {
      // Replace with your Google sign-in logic
      const googleUser = await signInWithGoogle();
      setUser(googleUser);
      if (onSignIn) {
        onSignIn(googleUser);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      // Replace with your Google sign-out logic
      await signOutWithGoogle();
      setUser(null);
      if (onSignOut) {
        onSignOut();
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (user) {
    return (
      <div className="user-info">
        <img src={user.avatar} alt={user.name} className="user-avatar" />
        <span className="user-name">{user.name}</span>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  }

  return (
    <button onClick={handleSignIn} className="google-sign-in-btn">
      <FaGoogle />
      Sign in with Google
    </button>
  );
};

// Replace signInWithGoogle and signOutWithGoogle with actual Google Auth API calls
async function signInWithGoogle() {
  // Simulating a sign-in process
  return {
    name: 'John Doe',
    avatar: 'path/to/avatar.jpg',
  };
}

async function signOutWithGoogle() {
  // Simulating a sign-out process
  console.log('User signed out');
}

export default UserComponent1;

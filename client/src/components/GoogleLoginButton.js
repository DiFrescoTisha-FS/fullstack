import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'; // Import axios for making HTTP requests


const GoogleLoginButton = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      try {
        const response = await axios.post('/auth/google', {
          code: codeResponse.code,
        });

        if (response.status === 200) {
          const userDataResponse = response.data;
          // Save user data in state
          setUserData(userDataResponse);

          // Send user data to your backend for storage in your database
          saveUserDataToDatabase(userDataResponse);
        } else {
          // Handle server-side errors
          setError('Server error. Please try again later.');
        }
      } catch (error) {
        // Handle network errors
        setError('Network error. Please check your internet connection.');
      }
    },
    onError: (errorResponse) => {
      // Handle error from the useGoogleLogin hook
      setError(`Google Login Error: ${errorResponse.message}`);
    },
  });

  const saveUserDataToDatabase = async (userData) => {
    try {
      // Send userData to your backend for database storage
      const response = await axios.post('/api/save-user-data', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        // Handle database save errors
        setError('Failed to save user data to the database.');
      }
    } catch (error) {
      // Handle network errors when saving to the database
      setError('Network error while saving user data to the database.');
    }
  };

  return (
    <div>
      {userData ? (
        // Display user information if available
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          {/* Add more user information fields as needed */}
        </div>
      ) : (
        <button onClick={login}>Sign in with Google 🚀</button>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GoogleLoginButton;


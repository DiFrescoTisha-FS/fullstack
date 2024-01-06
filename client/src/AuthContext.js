// AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function to update the user state
  const login = async (loginDetails) => {
    try {
      const response = await axios.post('/api/auth/login', loginDetails);
      if (response.data && response.data.user) {
        setUser(response.data.user); // Set the user state
      } else {
        // Handle case where login response doesn't have user data
        console.error('Login response does not contain user data');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Logout function to clear the user state
  const logout = async () => {
    try {
      // Replace with your logout endpoint
      await axios.get('/api/auth/logout'); 
      setUser(null); // Clear the user from context
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Provide the user and auth functions to the rest of the app
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

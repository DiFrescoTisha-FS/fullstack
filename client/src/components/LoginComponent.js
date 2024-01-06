import React from 'react';
import { useAuth } from '../../AuthContext'; // Adjust the import path

const LoginComponent = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      // Example: Get login details from Google OAuth
      const loginDetails = await signInWithGoogle();

      // Call the login function from AuthContext
      await login(loginDetails);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginComponent;

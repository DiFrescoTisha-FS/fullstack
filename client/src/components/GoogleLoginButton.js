import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleLoginButton({ onLoginSuccess }) {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        const userData = userInfoResponse.data;

        // Make a POST request to your backend for authentication
        const loginResponse = await axios.post('http://localhost:4000/login', {
          userObject: userData,
        });

        if (loginResponse.data.message === 'Authentication successful') {
          onLoginSuccess(userData);
        } else {
          console.error('Authentication failed');
        }
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <button onClick={() => login()} style={{ background: '#e1affd', size: 'large' }}>
      Log In With Google
    </button>
  );
}

export default GoogleLoginButton;

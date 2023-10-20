// GoogleLoginComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

function GoogleLogin() {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        // Store user data in state
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      {user ? (
        <div>
          {/* Display user profile image */}
          <img src={user.picture} alt="User Profile" style={{ width: '100px', height: '100px' }} />
          {/* Display user data */}
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Given Name: {user.given_name}</p>
          <p>Family Name: {user.family_name}</p>
          {/* Add more user data fields as needed */}
        </div>
      ) : (
        <button onClick={() => login()} style={{ background: '#e1affd', size: 'large' }}>
          Log In With Google
        </button>
      )}
    </div>
  );
}

export default GoogleLogin;

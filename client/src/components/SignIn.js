// SignIn.js
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function SignIn({ onSignIn }) {
 function handleCallbackResponse(response) {
  console.log('Encoded JWT ID token: ' + response.credential);
  var userObject = jwt_decode(response.credential);
  console.log(userObject);

  // Send user data to the server for authentication
// Update the fetch URL to point to your server (e.g., http://localhost:4000/login)
fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userObject }),
})

    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      if (data.message === 'Authentication successful') {
        // Authentication was successful, redirect to a protected route
        window.location.href = '/dashboard';
      } else {
        // Authentication failed, handle it accordingly (e.g., show an error message)
        console.error('Authentication failed:', data.error);
        // Update the UI to display an error message
      }
    })
    .catch((error) => {
      console.error('Error sending user data to the server:', error);
      // Handle errors, e.g., show an error message
      // Update the UI to display an error message
    });
}

  
  

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "287299510870-78cld8ed4ih7vedf85vhmu9j1jglinpa.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default SignIn;


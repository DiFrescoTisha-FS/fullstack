import React, { useState } from 'react';
// import SignIn from '../components/SignIn';
import GoogleSignInButton from '../components/GoogleSigninButton';
import UserProfile from '../components/UserProfile';
import SignOutButton from '../components/SignOutButton';

function LoginPage() {
  const [user, setUser] = useState(null);

  // Function to handle Google sign-in and authentication
  async function handleGoogleSignIn(response) {
    try {
      const serverResponse = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userObject: response }), // Send the userObject to the server
      });
  
      if (serverResponse.ok) {
        // Handle successful authentication on the client-side
        console.log('Authentication successful on the client side');
        // Redirect or perform other actions here
      } else {
        // Authentication failed on the client-side
        console.error('Authentication failed on the client side');
        // Display an error message to the user
      }
    } catch (error) {
      // Handle other errors (e.g., network errors)
      console.error('Error during authentication:', error);
    }
  }
  

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <div>
          {/* Display user profile if logged in */}
          <UserProfile user={user} />
          <SignOutButton />
        </div>
      ) : (
        <div>
          {/* Render Google sign-in component */}
          <GoogleSignInButton onSignIn={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;

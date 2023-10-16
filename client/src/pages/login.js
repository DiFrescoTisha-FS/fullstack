import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import UserProfile from '../components/UserProfile';

function LoginPage() {
  const [user, setUser] = useState(null);

  // Function to handle Google sign-in
  const handleGoogleSignIn = (userObject) => {
    // Store the user object in the component's state
    setUser(userObject);
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    // Clear the user object from the component's state
    setUser(null);
    // You can also send a sign-out request to your server if needed
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <div>
          {/* Display user profile if logged in */}
          <UserProfile user={user} />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          {/* Render Google sign-in component */}
          <SignIn onSignIn={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;

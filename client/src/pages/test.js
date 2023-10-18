// TestPage.js
import React from 'react';
import LoginWithGoogleButton from '../components/GoogleSigninButton';

function TestPage() {
  const handleSignIn = (userObject) => {
    // Handle the userObject here (e.g., display user information)
    console.log(userObject);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <LoginWithGoogleButton onSignIn={handleSignIn} />
    </div>
  );
}

export default TestPage;

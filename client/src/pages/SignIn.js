// SignInPage.js
import React from 'react';
import GoogleSignInButton from '../components/GoogleSignInButton';
import SignInForm from '../components/SignInForm';

function SignInPage() {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <GoogleSignInButton />
      <SignInForm />
    </div>
  );
}

export default SignInPage;

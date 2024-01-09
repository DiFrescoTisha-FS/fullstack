import React from 'react';
import { FcGoogle } from "react-icons/fc";

export const SidebarSignInButton = ({ onClick }) => {
  const handleSignIn = () => {
    window.location.href = 'http://localhost:4000/auth/google';
    onClick(); // This will close the sidebar after clicking
  };

  return (
    <button onClick={handleSignIn} className="google-sign-in-btn">
      <FcGoogle size={24} />
      Sign in with Google
    </button>
  );
};

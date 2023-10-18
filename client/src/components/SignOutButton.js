import React, { useState } from 'react';

const SignOutButton = () => {
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'GET',
        credentials: 'include', // Include credentials to send cookies
      });

      if (response.ok) {
        // Handle successful logout
        window.location.href = '/'; // Redirect to the home page or another page
      } else {
        // Handle logout error
        setLogoutMessage('Logout failed. Please try again.'); // Display an error message
      }
    } catch (error) {
      console.error('Error during logout:', error);
      setLogoutMessage('An error occurred during logout.'); // Display a generic error message
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default SignOutButton;

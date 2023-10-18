import React, { useEffect, useState } from 'react';

function GoogleSignInButton() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded || typeof window === 'undefined' || !window.google) return;

    window.google.accounts.id.initialize({
      client_id: 'Y287299510870-78cld8ed4ih7vedf85vhmu9j1jglinpa.apps.googleusercontent.com',
      callback: handleGoogleSignIn,
    });

    setScriptLoaded(true);
  }, [scriptLoaded]);

  function handleGoogleSignIn(response) {
    // Handle the Google Sign-In response here
    console.log('Google Sign-In Response:', response);

    // You can send the response to your server for authentication
    // or perform any other actions you need.
  }

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => setScriptLoaded(true);
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup if needed
    };
  }, [scriptLoaded]);

  return (
    <div className="g-signin2" data-onsuccess="onSignIn"></div>
  );
}

export default GoogleSignInButton;

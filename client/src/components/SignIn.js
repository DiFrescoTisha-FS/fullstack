// SignIn.js
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function SignIn({ onSignIn }) {
  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    onSignIn(userObject);
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


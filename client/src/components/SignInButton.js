import React from 'react';
import jwt_decode from 'jwt-decode';

function SignInButton({ onSignIn }) {
  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    onSignIn(userObject);
  }

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default SignInButton;

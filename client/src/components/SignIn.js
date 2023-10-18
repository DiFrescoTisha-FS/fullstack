import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';



function SignIn({ onSignIn }) {

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

  async function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);

    userObject.googleId = "102561968174603609693"; 

    // Call the onSignIn function to pass userObject to the parent component
    onSignIn(userObject);

    try {
      const serverResponse = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userObject }), // Send the userObject to the server
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
      <div id="signInDiv"></div>
    </div>
  );
}

export default SignIn;

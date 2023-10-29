import React, { useEffect, useState } from 'react';
import { loadGapiInsideDOM } from 'gapi-script';

const Login = ({ setUser }) => {
  const [user, setUserState] = useState(null);

  useEffect(() => {
    const initGapi = async () => {
      const gapi = await loadGapiInsideDOM();

      const onSuccess = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const userData = {
          name: profile.getName(),
          email: profile.getEmail(),
          imageUrl: profile.getImageUrl(),
        };
        setUserState(userData);
        setUser(userData); 
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        const id_token = googleUser.getAuthResponse().id_token; // Define id_token here
      
        // Send the ID token to the server
        fetch('http://localhost:4000/tokensignin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ idToken: id_token })
        });
      };

      const onFailure = (error) => {
        console.log(error);
      };

      const onSignOut = () => {
        console.log('Signed out');
      };

      gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '630469049970-161iihf5mjh96rt6mj963asetm2cv665.apps.googleusercontent.com',
            prompt: 'select_account'
        }).then(() => {
          gapi.signin2.render('google-signin-button', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
          });

          const auth2 = gapi.auth2.getAuthInstance();

          // Add event listener for sign-out button
          auth2.currentUser.listen(onSignOut);
        }).catch((error) => {
          console.log(error);
        });
      });
    };

    initGapi();
  }, [setUser]);

  const handleSignOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  };
  

  return (
    <div>
      <div id="google-signin-button"></div>
      {user && (
        <div className="user-dropdown">
          <div className="user-info">
            <img className="user-profile-pic" src={user.imageUrl} alt="User profile" />
            <div>
              <div className="user-name">{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>
          <button className="user-logout-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Login;

// App.js
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState({});

  function handleSignIn(userObject) {
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut() {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  return (
    <div className="App">
      <Header />
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 ? (
        <div>
          <SignOut onSignOut={handleSignOut} />
          <UserProfile user={user} />
        </div>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;

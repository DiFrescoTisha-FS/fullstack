// UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <img src={user.picture} alt="profile" />
      <h3>{user.name}</h3>
    </div>
  );
}

export default UserProfile;

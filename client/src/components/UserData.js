import React from 'react';

function UserData({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>ID:</strong> {user.id}<br />
        <strong>Name:</strong> {user.name}<br />
        <strong>Email:</strong> {user.email}<br />
        {/* Add more user data fields as needed */}
      </p>
    </div>
  );
}

export default UserData;

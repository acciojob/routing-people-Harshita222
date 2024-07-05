import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default UserDetail;

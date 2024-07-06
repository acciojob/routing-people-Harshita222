import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserDetails;

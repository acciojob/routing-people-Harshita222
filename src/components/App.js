// UserDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  // Fetch user information based on the ID from API or any data source
  // For simplicity, let's assume we have a hardcoded user object
  const user = {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
    // Add more user details as needed
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Render more user details as needed */}
    </div>
  );
};

export default UserDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token'); // Retrieve token

  useEffect(() => {
    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    axios.get('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data.data);
      setError(null);
    })
    .catch(err => {
      console.error('Error fetching profile:', err);
      setError('Failed to fetch profile. Please try again.');
    });
  }, [token]);

  return (
    <div>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <h1>Hello, {user.userName}!</h1>
          <p>Email: {user.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

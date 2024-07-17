import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

const ProfileApp = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    const fetchUserProfile = async () => {
      if (!token) {
        setLoading(false);
        return; // Exit early if token is not available
      }
      try {
        const response = await axios.get("http://localhost:5282/api/Donor/DonorProfile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserProfile(); // Call fetchUserProfile function

  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleEdit = async (editedUserData) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        setError('No token available');
        return;
      }

      const response = await axios.put("http://localhost:5282/api/Donor", editedUserData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(editedUserData); // Update user state with edited data upon successful edit
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        setError('No token available');
        return;
      }

      await axios.delete("http://localhost:5282/api/Donor", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(null); // Remove user data from state upon successful deletion
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {user ? (
        <UserProfile userData={user} onEdit={handleEdit} onDelete={handleDelete} />
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default ProfileApp;
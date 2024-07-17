import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Content from './Content';

const Donordashboard = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  
  // Function to handle page selection
  const handleSelect = (page) => {
    setSelectedPage(page);
  };

  // State to manage user data
  const [user, setUser] = useState(null);

  // Function to handle sign up
  const handleSignUp = (userData) => {
    setUser(userData);
  };

  // Function to handle user data edit
  const handleEdit = (editedUserData) => {
    setUser(editedUserData);
  };

  // Function to handle user data deletion
  const handleDelete = () => {
    setUser(null);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-3">
          <Sidebar onSelect={handleSelect} />
        </div>
        <div className="col-md-6 mt-5">
          <Content page={selectedPage} />
        </div>
        {/* Additional columns or components can be added here */}
      </div>
    </div>
  );
};

export default Donordashboard;